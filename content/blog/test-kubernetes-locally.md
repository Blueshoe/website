---
src: '/blog/test-kubernetes-locally'
img: '/img/blogs/test-kubernetes-locally.jpg'
alt: 'Test Kubernetes locally'
preTitle: 'How to'
title: "Test Kubernetes locally"
description: 'Running applications in the cloud but being able to test them in a local setup before pushing into production is still a tricky part of development. This is how we see it.'
date: '20.04.2022'
author:
  - Michael Schilonka
technology:
  - Kubernetes
  - Telepresence
  - Gefyra
productUpdates: []
topic:
  - Development
---
Reddit can be a wonderful community, not just for entertainment but also for professional purposes. We regularly skim through r/kubernetes and the level of discussion can be quite enlightening.

A couple of weeks ago we came across the following question:

**“How are your developers testing their code locally?”**
<!--more-->

![Test Kubernetes locally](/img/blogs/test-kubernetes-locally.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Quick references"}

:::

:::globalParagraph
Since “local Kubernetes” is kind of “our thing” we of course had to chime in.
:::
:::globalParagraph
In general “testing code locally” in a Kubernetes infrastructure was a true issue we had to deal with on a daily basis. In the end we feel the best solution would be if developers would Kubernetes already during the local development process as that already solves a bunch of the main issues.
:::

![Test locally](/img/blogs/test-kubernetes-locally-1.jpg){.object-cover .w-full .mb-5}


:::globalTitle{:size="lg" .mb-5}
Moments of clarity
:::
:::GlobalBlock{.ol-decimal .mb-5}
1. **We must leverage Kubernetes in development**
    ::::globalParagraph
   With container orchestration platforms like Kubernetes (with its compelling features to actually operate the software) applications have to intertwine with the platform one way or another.
    ::::
    ::::globalParagraph
   For example, you’d like to have reasonable probes (not just serving a http 200, but mechanisms that really find out the state of the application), use sidecar patterns or speak to Kubernetes and operators via custom resource definitions.
    ::::
    ::::globalParagraph
   Only that will leverage Kubernetes to the full extent and will make software much more reliable and scalable than ever. In addition, we hope that Kubernetes as a development platform would finally change the mindsets to create less monolithic applications and support the way of service-oriented thinking.
    ::::
    ::::globalParagraph
    From our perspective, docker-compose or Docker alone did not lead to that in the past.
    ::::

2. **Let ops be ops and devs be devs**
   ::::globalParagraph
   We observed that creating well-crafted container images is still something developers struggle with.
   ::::
   ::::globalParagraph
   If you have a very good container image (i.e. secure, as slim as possible, etc) it’ll take ages to build. That is frustrating and thus doesn't really add to the acceptance of this technology. Keeping in mind that containers as well as container orchestration is driven by the IT operation side of things.
   ::::
   ::::globalParagraph
   Of course you can find developers (mostly backend) with a strong affinity for infrastructure (I count containers to that part), so-called DevOps working on the interception of code and infrastructure, but this talent is rare.
   ::::
:::


:::globalTitle{:size="lg" .mb-5}
“Just mock all adjacent services” / “Contract testing is enough”
:::

:::globalParagraph
We don’t think that this can be the answer.
:::
:::GlobalBlock{.ul-disk .mb-5}
- Who is responsible for the mock service implementation?
- The neighboring development team writing the actual service?
- Or the team depending on that particular service?
:::
:::globalParagraph
   We did that in the past and found mocking services to be not enough. Three relevant points:
:::


:::GlobalBlock{.ol-decimal .mb-5}
1. **Who is taking care of the mock?**
   ::::globalParagraph
   The mock service is doomed to become outdated. Interfaces develop, data structures evolve over time, etc. Those mock services usually do have their own logic to create mock answers to mock complex scenarios. Since a mock service is perceived to not really contribute to the usable system the responsibility question is difficult to figure out within companies.
   ::::

2. **Bugs are rarely just in one service**
   ::::globalParagraph
   Our dev teams quite often experienced bugs to be in between two or more services. That often depends on somewhat special data constellations in all participating applications. Something you can’t really test or hunt down running mock services.
::::

3. **What would your devs prefer?**
   ::::globalParagraph
   After all, it’s not massive fun for developers to only write against mock services, contracts, and so on. Having real world setups with close-to-production data feels more productive as you can test your development effort and get instant feedback. From my point of view this is not negligible.
::::
:::

:::globalParagraph
Still, there are situations where we feel a mock service is not avoidable.
:::
:::globalParagraph
Our dev teams have been using k3d (or other local Kubernetes provider) plus Telepresence 2 for quite some time. However, while Telepresence is a pretty cool tool, we must admit that we had quite a few troubles with it in the past.
:::


:::GlobalPodcastSection{:videoId="EtOCTuwYdE4" :videoPosition="left" .mb-6}

::::GlobalTitle{:tag="h3" .mb-6}
Stop mocking - develop frontends with real K8s setups
::::
::::globalParagraph{:font-size="lg" .mb-4}
During this talk, a showcase will be presented on federating multiple backend GraphQL interfaces into one common interface, which is then consumed by the frontend. The services are orchestrated with Kubernetes running locally on the developer's machine. The frontend comes with a webpack development server and is built with Vue.js.
::::

:::


:::globalParagraph
However, with that approach being somehow forced onto the dev teams, we had them slightly overwhelmed with using k3d + kubectl + Helm + sops + still having to deal with Docker + other tooling.
:::
:::globalParagraph
And that is basically also part of the backstory as to why we started Unikube.
:::
:::globalParagraph
The idea is to expose as little of the complexity as possible to the developer while still being in the driver's seat.
:::
:::globalParagraph
The development of new features, bug fixes, and so on happens locally using the local Docker host, but having the application to behave as it would be right within the cluster. We see massive advantages of that approach (especially once all of the features are in place).
:::

:::GlobalPodcastSection{:videoId="FazRUwBWPUI" :videoPosition="left" .mb-6}

::::GlobalTitle{:tag="h3" .mb-6}
An alternative to telepresence
::::
::::globalParagraph{:font-size="lg" .mb-4}
We decided to create an alternative to Telepresence 2. Check it out if you like: https://gefyra.dev
::::
::::globalParagraph{:font-size="lg" }
Also, have a look at my talk at [Conf42](https://www.conf42.com/cloud2022){.bs-link-blue} about debugging a container with sidecar using Gefyra.
::::
::::GlobalButton{:url="https://gefyra.dev/" :label="Gefyra" :color="blue"}
::::
:::


:::BlogRelatedPosts{:url='["/blog/local-kubernetes-development", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/evolution-of-application-development-to-cloud-native", "/blog/strategies-for-slim-docker-images", "/blog/docker-vs-podman"]'}

:::
