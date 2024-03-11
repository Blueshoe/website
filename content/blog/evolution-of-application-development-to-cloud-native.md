---
head:
  title: 'The evolution of application development to cloud native'
  meta:
    - property: 'og:locale'
      content: 'en_US'
    - name: 'description'
      content: 'Becoming a truly cloud-native company is not easy. Take a look at the ✅  5 stages ✅  of our Cloud Native Development Evolution Model for DevOps!'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'The evolution of application development to cloud native'
    - property: 'og:description'
      content: 'Becoming a truly cloud-native company is not easy. Take a look at the ✅  5 stages ✅  of our Cloud Native Development Evolution Model for DevOps!'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'The evolution of application development to cloud native'
    - name: 'twitter:description'
      content: 'Becoming a truly cloud-native company is not easy. Take a look at the ✅  5 stages ✅  of our Cloud Native Development Evolution Model for DevOps!'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/evolution-of-application-development-to-cloud-native'
img: '/img/blogs/evolution-of-application-development-to-cloud-native.jpg'
alt: 'The evolution of application development to cloud native'
preTitle: 'For DevOps'
title: "The evolution of application development to cloud native"
description: 'Becoming a truly cloud-native company is not easy. Take a look at the ✅  5 stages ✅  of our Cloud Native Development Evolution Model for DevOps!'
date: '23.08.2021'
author:
  - Michael Schilonka
technology:
  - Kubernetes
productUpdates: []
topic:
  - Development
---
Becoming a truly cloud-native company is not easy. It takes evolution. But what stages of evolution do companies have to go through to arrive at the desired stage? And what does that stage entail? Take a look with us!
<!--more-->

![The evolution of application development to cloud native](/img/blogs/evolution-of-application-development-to-cloud-native.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="In this blog post we will cover"}

:::

:::globalTitle{:size="lg" .mb-5}
Stage 1: Normalisation
:::
:::GlobalBlock{.ul-disk .mb-5}
- Application development teams use version control.
- Application development teams use standard development procedures.
:::
:::globalParagraph
This happens for example by using Git or SVN. There is the main branch and individual feature branches make it easier to keep control of the application code. There is also versioning for release procedures.
:::
:::globalParagraph
  If you have not yet arrived at this stage you must have lived under a rock for the last 20 years. Go and get version control implemented. Now.
:::

:::globalTitle{:size="lg" .mb-5}
Stage 2: Standardisation
:::
:::GlobalBlock{.ul-disk .mb-5}
- Teams build on a standard set of technology.
- Teams deploy to a standard operating platform.
:::
:::globalParagraph
Standardisation drastically increases the efficiency of your organisation. That’s not only true for your tech team. But for those guys, it means working with container technology such as [Docker](/blog/strategies-for-slim-docker-images/){.bs-link-blue}, Docker-Compose or [Kubernetes](/blog/local-kubernetes-development/){.bs-link-blue}.
:::
:::globalParagraph
This stage is the groundwork for moving towards the Cloud Native organisation.
:::

![unikube_c-ndem_Infographic](/img/blogs/unikube_c-ndem_Infographic.jpg){.object-cover .w-full .mb-5}

:::globalTitle{:size="lg" .mb-5}
Stage 3: Expansion
:::
:::GlobalBlock{.ul-disk .mb-5}
- Applications consist of multiple smaller moving parts, loosely coupled services.
- Applications are designed for scale, resiliency and pace of change.
:::
:::globalParagraph
Your organisation is using service-oriented architectures, message brokering, event streams and loosely coupled (REST-, GraphQL-, etc.) interfaces. This helps for implementing specialist teams, faster development and better handling of complex applications by applying the “divide and conquer”-principle.
:::
:::globalParagraph
To arrive at this stage, it is important to already plan out your application as a structure consisting of individually developed services from the get-go, since splitting up a monolithic application structure later on is a real struggle.
:::

:::globalTitle{:size="lg" .mb-5}
Stage 4: Automated Application Delivery
:::
:::GlobalBlock{.ul-disk .mb-5}
- Teams reuse deployment patterns.
- Version control for deployment patterns and configurations.
- Automated development environment provisioning.
- Teams use a standard set of build and test systems.
- Service discovery is used in applications.
- Security teams are involved in design and deployment.
- Automated code and manifest security profiling.
:::
:::globalParagraph
Technologies and principles you may have implemented in stage 4 could include Helm, Quay, GitHub Actions, Continuous Integration, ArgoCD, Service Mesh, Network Policies, Pod Disruption Budget.
:::
:::globalParagraph
Applications, or better yet, resilient small services have a high release cadence. End-to-end automated deployment patterns (e. g. using Helm for all parts) with GitOps are in place. A “push” to the source management system triggers traceable changes to the infrastructure and applications. All team members (with a special focus on developers) know the pivotal elements of the continuous integration pipeline and solve challenges on their own. Besides, members of a dedicated security team are involved in the creation of architectures and services. Security fixes are rolled out just as fast as they appear.
:::

:::globalTitle{:size="lg" .mb-5}
Stage 5: Automated Application Lifecycle Management
:::
:::GlobalBlock{.ul-disk .mb-5}
- Development teams can access all services for development.
- Production can be replicated to development.
- Applications use advanced operating platform patterns.
- Applications manage themselves and the operating platform.
:::
:::globalParagraph
Examples: Operators, CRD (Custom Resource Definitions), Auto Scaling and Probes.
:::

:::globalParagraph
Your development team hunts a complex bug that embarrassingly sits between all of your services? No problem, since in stage 5 your teams can provision the complexity of your production environment with the flick of a finger. In addition, all services manage their own lifecycle without the need for manual intervention.
:::
:::globalParagraph
There is an update that requires a data migration? No problem, for your Kubernetes Operators which detect the available update in your registry and automatically apply the needed scripts in order to keep your application’s data consistent. Applications themselves tell Kubernetes about their health - are they ready to process requests or is there more capacity required? May we scale down a bit in order to save money? In stage 5, that’s nothing your team has to take care of anymore.
:::
:::globalParagraph
Are you at stage 5 yet? Yes? Congratulations! But if not, don’t worry. From our own assessment, there are still very few companies that have truly arrived in stage 5 already. We feel that every organisation should do its best to arrive at stage 3 sooner rather than later and immediately start looking towards the mid-term goal of reaching stage 4. If that is the strategy, you are on a good way to be set up for future success.
:::
:::globalParagraph
If you want more insights into the Kubernetes ecosystem, feel free to <a href="https://www.linkedin.com/in/michael-schilonka/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">follow Michael Schilonka on LinkedIn</a>.
:::

::GlobalPodcastSection{:videoId="KapP6ouEL3E" :videoPosition="left" :bg="bg-bs-gray" .mb-5}
:::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR PODCAST: TOOLS FOR THE CRAFT
:::
:::GlobalTitle{:tag="h3" .mb-6}
E2: Remote Kubernetes development environments
:::
:::globalParagraph{:font-size="lg" .mb-4}
Michael and Robert are talking about the various options developers have for running remote Kubernetes development environments.
:::
:::globalParagraph{:font-size="lg" .mb-4}
More editions of our podcast can be found here:
:::
::::GlobalButton{:url="/podcast" :label="Show more podcasts!" :color="green"}
::::
::


:::BlogRelatedPosts{:url='["/blog/container-orchestration-options-comparison", "/blog/performance-comparison-gke-vs-eks", "/blog/local-kubernetes-development", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/docker-vs-podman"]'}

:::
