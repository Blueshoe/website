---
src: '/blog/vuejs-error-tracking-with-sentry'
img: '/img/blogs/vuejs-error-tracking-with-sentry.jpg'
alt: 'VueJS error tracking with Sentry'
preTitle: 'Frontend Error Handling'
title: "VueJS error tracking with Sentry"
description: 'When it comes to error tracking in our Cloud Native applications Sentry has become our go-to solution. This blog post aims to provide you with our learnings on using Sentry on Unikube’s VueJS based frontend. Read on!'
date: '02.12.2021'
author:
  - Robert Stein
technology:
    - Docker
    - Vue JS
productUpdates: []
topic:
  - Development
---
When it comes to error tracking in our Cloud Native applications Sentry has become our go-to solution. We do love the ease of use, the deep insights and the well-structured documentation. This blog post aims to provide you with our learnings on using Sentry on Unikube’s VueJS based frontend.
<!--more-->

![VueJS error tracking with Sentry](/img/blogs/vuejs-error-tracking-with-sentry.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalParagraph
<a href="https://sentry.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Sentry</a> is simply a great piece of software we love to use in our everyday work and we want to share our learnings on using Sentry on Unikube’s VueJS based frontend with you. The code snippets are a bit simplified compared to the originals, however, they contain all necessary information.
:::

:::globalTitle{:size="lg" .mb-5}
General information & dependencies
:::
:::globalParagraph
Unikube’s <a href="https://app.unikube.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">frontend</a> provides a UI to our many backend microservices. All our microservices are equipped with GraphQL interfaces which are then federated via <a href="https://www.apollographql.com/docs/federation/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Apollo Federation</a>. This gives us the convenience of consuming the whole (external) graph through one endpoint. The frontend itself is a monolithic single page application, built with TypeScript on top of VueJS and Vuetify. We have included internationalisation via <a href="https://kazupon.github.io/vue-i18n/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">vue-i18n</a> and frontend permission management through <a href="https://casl.js.org/v5/en/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">CASL</a>.
:::
:::globalParagraph
When it comes to error tracking we have included Sentry’s SDK, which already includes a beautiful integration for VueJS.
:::

:::globalTitle{:size="md" .mb-5}
Sentry Integration
:::
:::globalParagraph
The basic integration itself is as simple as it can be:<br />
main.ts:
:::
:::BlogCode{.mb-5}
```json5
import * as Sentry from '@sentry/vue';

Sentry.init({
    Vue,
    dsn: process.env.VUE_APP_SENTRY_DSN,
});
```
:::
:::globalParagraph
Wait - but what is this dsn-thing? It provides the SDK with the endpoint to which it will send any relevant events tracked by Sentry. To make sure we do not track any events from our local development environments we surround the initialisation with a simple if statement.<br />
main.ts:
:::
:::BlogCode{.mb-5}
```json5
import * as Sentry from '@sentry/vue';
if (process.env.NODE_ENV === 'production') {
    Sentry.init({
        Vue,
        dsn: process.env.VUE_APP_SENTRY_DSN,
    });
}
```
:::
:::globalParagraph
process.env contains certain environment variables and their values.
:::
:::globalParagraph
However, we do not stop here. To provide our developers with as much information ass possible, to ease the process of debugging, we add some more information at runtime. One very helpful thing is the integration of Sentry with Vue’s router.<br />
router/index.ts:
:::
:::BlogCode{.mb-5}
```json5
router.beforeEach((to: Route, from, next) => {
    Sentry.configureScope((scope) => scope.setTransactionName(to?.meta?.label));
    next();
});
```
:::
:::globalParagraph
Setting the label of the current route to Sentry’s transaction name immediately restricts the context in which our developers are „hunting“ the bug.
:::
:::globalParagraph
To provide our user’s with the best support possible we also enrich Sentry’s events with some user information. Our store's auth.ts modules handle the authentication tokens and states. As soon as the user information change (login, logout) we update Sentry’s context.<br />
store/auth.ts:
:::
:::BlogCode{.mb-5}
```json5
setRpt(state, rpt: string): void {
    state.rawRpt = rpt;
    Sentry.setUser({ email: state.email });
}
```
:::
:::globalParagraph
This way we can filter the tracked errors for certain users and provide them with superb support and insights as well as super-quick bug fixes.
:::


:::globalTitle{:size="md" .mb-5}
Sentry Source Maps and Release Health
:::
:::globalParagraph
Sentry comes with a fancy Webpack integration, which allows streamlining the creation of releases and linking source maps to those. This is an essential step to make sure our developers are not confronted with stack traces and errors from the minified JavaScript sources, but with the actual code from the repository.
:::
:::globalParagraph
We simply add the Sentry CLI Webpack plugin to our vue.config.js - and therefore to the Webpack configuration.<br />
webpack.config.js:
:::
:::BlogCode{.mb-5}
```json5
if (process.env.NODE_ENV === 'production') {
  const sentryAuthToken = fs.readFileSync('/run/secrets/SENTRY_AUTH_TOKEN', 'utf8');
      plugins.push(
          new SentryCliPlugin({
            // webpack specific configuration
              authToken: sentryAuthToken,
              include: '.',
              ignore: ['node_modules', 'babel.config.js', 'apollo.config.js', '.eslintrc.js'],
              release: `unikube-frontend@${process.env.VUE_APP_VERSION}`,
    }),
  );
}
```
:::
:::globalParagraph
We’re surrounding the release process with process.env.NODE_ENV === 'production' to make sure nothing from our development or CI test workflows lands as a release in Sentry.
:::
:::globalParagraph
If you take a closer look at the code you’ll notice that we work with an environment variable 'VUE_APP_VERSION' as well as with a file, which is located under '/run/secrets/SENTRY_AUTH_TOKEN'.
:::
:::globalParagraph
Let’s dive a bit deeper into the build process of the frontend.
:::


:::globalTitle{:size="md" .mb-5}
Docker Arguments and Secrets
:::
:::globalParagraph
Since we make use of environment variables, which may differ from one environment to the other (compare development and production), those variables need to be set at build time. The 'dist' version of the frontend is served through a simple NGINX docker container. Therefore we leverage Docker’s arguments to pass in environment variables at build time (for the docker image as well as for the frontend).
<br />
Dockerfile:
:::

:::BlogCode{.mb-5}
```json5
FROM quay.io/blueshoe/node14.4-slim AS app
…
### Build ENV variables
ARG VUE_APP_BASE_URL
ARG VUE_APP_PUBLIC_PATH
ARG VUE_APP_I18N_LOCALE
ARG VUE_APP_I18N_FALLBACK_LOCALE
ARG VUE_APP_GRAPHQL_URL
ARG VUE_APP_KEYCLOAK_JS
ARG VUE_APP_KEYCLOAK_AUTHZ_JS
ARG VUE_APP_KEYCLOAK_URL
ARG VUE_APP_KEYCLOAK_REALM
ARG VUE_APP_KEYCLOAK_CLIENT_ID
ARG VUE_APP_UPLOAD_URL
ARG VUE_APP_VERSION
ARG VUE_APP_SENTRY_DSN
ARG SENTRY_DSN
ARG SENTRY_ORG
ARG SENTRY_PROJECT
ARG SENTRY_URL
```
:::
:::globalParagraph
If you wonder about the difference between docker ARG and ENV check it out <a href="https://vsupalov.com/docker-arg-env-variable-guide/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">here</a>.
:::
:::globalParagraph
However, the SentryCLIPlugin sends something to our Sentry installation and therefore needs some kind of authentication. For that, the 'authToken' configuration parameter is used. Now - Unikube is an open-source project, which means our CI pipelines are open source as well. Nevertheless, we would like to keep our 'authToken' a secret, so that no one else can manipulate any release information on our Sentry installation. For that, we use <a href="https://docs.docker.com/engine/swarm/secrets/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Docker’s secret management</a>. It allows us to inject secret information into the build process, which can only be used during build time. This is exactly what we need since the release information (including the source maps) only need to be generated once when the Docker image is built.
:::
:::globalParagraph
Docker injects the secret as a file, located under '/run/secrets/SENTRY_AUTH_TOKEN'. This file then is read by the 'SentryCLIPlugin'.
:::

<hr class="mb-6">

:::GlobalPodcastSection{:videoId="KapP6ouEL3E" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR PODCAST: TOOLS FOR THE CRAFT
::::
::::GlobalTitle{:tag="h3" .mb-6}
E2: Remote Kubernetes development environments
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael and Robert are talking about the various options developers have for running remote Kubernetes development environments.
::::
::::globalParagraph{:font-size="lg" }
More editions of our podcast can be found here:
::::
::::GlobalButton{:url="/podcast" :label="More podcasts!" :color="green"}
::::
:::

<hr class="mb-6">

:::globalTitle{:size="md" .mb-5}
Github Actions
:::
:::globalParagraph
The last missing piece of the puzzle is the automated build of the Docker image in our CI pipeline. Since Unikube’s repositories are located on Github we leverage [Github Actions].
:::
:::globalParagraph
Within the `docker.yaml` we define the steps to build the Docker images for our development and production environments.
.github/workflows/docker.yaml:
:::

:::BlogCode{.mb-5}
```json5
name: Create Docker Image

on:
    push:
        tags:
            - '*'
jobs:
    build_local_dev_docker_image:
        name: Build docker images (dev and prod).
        runs-on: ubuntu-latest
        strategy:
            matrix:
                include:
                    # production image
                    - graphql_url: https://api.unikube.io/graphql
                    keycloak_url: https://login.unikube.io/auth
                    upload_url: https://api.unikube.io/upload
                    tag_suffix: ''
                    # dev image
                    - graphql_url: http://gateway.unikube.127.0.0.1.nip.io:8085/graphql
                    keycloak_url: http://keycloak.127.0.0.1.nip.io:8085/auth
                    upload_url: http://gateway.unikube.127.0.0.1.nip.io:8085/upload
                    tag_suffix: '-dev'
        steps:
            - name: Checkout
            uses: actions/checkout@v2
            - name: Login to quay.io
            uses: docker/login-action@v1
            with:
                registry: quay.io
                username: ${{ secrets.QUAY_USERNAME }}
                password: ${{ secrets.QUAY_ROBOT_TOKEN }}
            - name: Docker meta
            uses: docker/metadata-action@v3
            id: meta
            with:
                images: quay.io/unikube/frontend
                flavor: |
                    latest=false
                    suffix=${{ matrix.tag_suffix }}
                tags: |
                    type=semver,pattern={{version}}
                    latest
            - name: Build and push
            id: docker_build
            uses: docker/build-push-action@v2
            with:
                push: true
                tags: ${{ steps.meta.outputs.tags }}
                secrets: |
                "SENTRY_AUTH_TOKEN=${{ secrets.SENTRY_AUTH_TOKEN }}"
                file: docker/Dockerfile
                context: .
                build-args: |
                    VUE_APP_BASE_URL
                    VUE_APP_PUBLIC_PATH
                    VUE_APP_I18N_LOCALE=en
                    VUE_APP_I18N_FALLBACK_LOCALE=en
                    VUE_APP_KEYCLOAK_JS=/js/keycloak.js
                    VUE_APP_KEYCLOAK_AUTHZ_JS=/js/keycloak-authz.js
                    VUE_APP_KEYCLOAK_REALM=unikube
                    VUE_APP_KEYCLOAK_CLIENT_ID=frontend
                    VUE_APP_GRAPHQL_URL=${{ matrix.graphql_url }}
                    VUE_APP_KEYCLOAK_URL=${{ matrix.keycloak_url }}
                    VUE_APP_UPLOAD_URL=${{ matrix.upload_url }}
                    VUE_APP_VERSION=${{ steps.meta.outputs.version }}
                    SENTRY_RELEASE=${{ steps.meta.outputs.version }}
                    VUE_APP_SENTRY_DSN=${{ secrets.SENTRY_DSN }}
                    SENTRY_DSN=${{ secrets.SENTRY_DSN }}
                    SENTRY_ORG=${{ secrets.SENTRY_ORG }}
                    SENTRY_PROJECT=${{ secrets.SENTRY_PROJECT }}
                    SENTRY_URL=${{ secrets.SENTRY_URL }}
            - name: Image digest
            run: echo ${{ steps.docker_build.outputs.digest }}
```
:::

:::globalParagraph
There are a few things to consider here:
:::
:::GlobalBlock{.ol-decimal .mb-5}
1. We use Github Action’s 'matrix' keyword to use the same job template for multiple environment builds.
2. We log in <a href="http://quay.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">to quay.io</a> which is the service hosting our Docker images.
3. Secret and Arguments are passed via 'docker/build-push-action@v2'.
:::

:::globalParagraph
   The last thing to do here is set the secret information for the repository on its Github settings page:
:::

![settings page](/img/blogs/vuejs-error-tracking-with-sentry-1.jpg){.object-cover .w-full .mb-6}

:::globalParagraph
Done! This is how Unikube’s frontend currently integrates Sentry to better understand errors, fix bugs faster and provide better support for our users.
:::
:::globalParagraph
Let us know if you have any [questions, feedback](coffee@unikube.io){.bs-link-blue} or maybe things we should consider to change. Thank you very much.
:::


:::BlogRelatedPosts{:url='["/blog/kubernetes-logging-with-promtail-loki-and-grafana", "/blog/performance-comparison-gke-vs-eks", "/blog/local-kubernetes-development", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/strategies-for-slim-docker-images"]'}

:::

