---
src: '/blog/telepresences-docker-desktop-extension'
img: '/img/blogs/gefyra-telepresence.jpg'
alt: 'gefyra telepresence'
preTitle: 'Gefyra’s number one competitor evaluated'
title: "Exploring Telepresence’s Docker Desktop Extension"
description: "Telepresence's Docker Desktop Extension currently has limited capabilities, but with their partnership with Docker, future upgrades are expected. Find out more!"
date: '14.06.2023'
author:
  - Robert Stein
technology:
  - Telepresence
productUpdates:
  - Gefyra
topic: []
---
Robert tried out Telepresence’s Docker Desktop extension and drew comparisons to Blueshoe’s own cloud-native development tool Gefyra. This post is the result of a live video exploring session on the first time use of the extension.
<!--more-->

![my image](/img/blogs/gefyra-telepresence.jpg){.object-cover .max-w-full .mb-6}


:::GlobalParagraph
For the past couple of years Blueshoe has been working intensely on an alternative solution to Telepresence - called [Gefyra](/products/){.bs-link-blue}. Since the good folks of <a href="https://www.getambassador.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Ambassador</a> Labs have released Telepresence v2, which was a massive rewrite, fixed some issues, added new features as well as a Docker Desktop Extension.
:::

:::GlobalPodcastSection{:videoId="Sxf0onWzXyo" :bg="bg-white" :videoPosition="left" .mb-6}
::::GlobalParagraph
Since then Gefyra also came a long way, we released Gefyra v1 as well as a Docker Desktop Extension. This blog post is a summary of the <a href="https://www.youtube.com/watch?v=Sxf0onWzXyo" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">exploration session video</a> I did in the beginning of May 2023.
::::
:::

:::GlobalTitle{:size="lg" .mb-5}
**Installation of Telepresence Docker Desktop Extension**
:::
:::GlobalParagraph
Docker’s marketplace makes it super easy to install new extensions. Same with Telepresence. Just look it up in the marketplace and hit “Install”.
:::

![telepresence](/img/blogs/telepresence.jpg){.object-cover .max-w-full .mb-6}

:::GlobalParagraph
The screenshot shows an already installed extension state.
:::
:::GlobalParagraph
After the installation has finished the Telepresence extension shows up in Docker Desktop’s sidebar. A nice graphic as well as some explanations are displayed when opening the extension for the first time.
:::

![telepresence](/img/blogs/telepresence-2.jpg){.object-cover .max-w-full .mb-6}

![telepresence](/img/blogs/telepresence-3.jpg){.object-cover .max-w-full .mb-6}

:::GlobalParagraph
Oops - you first have to create an account - before actually you can get started with Telepresence Docker Desktop. Fair enough - let’s set up an account and continue. The process was a bit flaky, after creating the account its page redirects to a localhost port which simply does not respond. After trying again the registration seems to have worked.
:::

![telepresence](/img/blogs/telepresence-4.jpg){.object-cover .max-w-full .mb-6}

:::GlobalParagraph
Back to Docker Desktop!
:::

:::GlobalTitle{:size="lg" .mb-5}
**Simple Intercept with Telepresence on Docker Desktop**
:::
:::GlobalParagraph
After the account setup we can now actually start working with Telepresence’s Docker Desktop extension. The home screen now looks like this:
:::

![telepresence](/img/blogs/telepresence-5.jpg){.object-cover .max-w-full .mb-6}

:::GlobalParagraph
Docker Desktop’s Kubernetes context is preselected. One thing I noticed (also in the video) is that you cannot change your kubeconfig to select different contexts. It seems Telepresence assumes all your relevant clusters are available in your default kubeconfig file.
:::
:::GlobalParagraph
Make sure to tick “Install Telepresence on this cluster” since it - same as Gefyra - needs to install a few components the first time it is used on a cluster.
:::
:::GlobalParagraph
After a short loading time everything is available. In the video I am trying out the demo case and struggle a bit, since there have been other components installed in the cluster. I leave it out here for the sake of the reader 🙂
:::
:::GlobalParagraph
On the following screen Telepresence displays the “services” for a given namespace. In case you watch the video - I was a bit confused since my service did not show up here. Turns out Telepresence does not allow to intercept <a href="https://kubernetes.io/de/docs/concepts/workloads/pods/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">pods</a> - rather it wants to work with <a href="https://kubernetes.io/docs/concepts/workloads/controllers/deployment/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">deployments</a>.
:::

![telepresence](/img/blogs/telepresence-6.jpg){.object-cover .max-w-full .mb-6}

:::GlobalParagraph
I rewrote my frontend pod’s manifest to be a deployment. It showed up afterwards - let’s intercept! The intercept options are fairly limited which makes it easier for the user to finish the intercept setup:
:::

![telepresence](/img/blogs/telepresence-7.jpg){.object-cover .max-w-full .mb-6}

:::GlobalParagraph
The ports come prefilled - I only have to choose a “Target docker image”. The dropdown allows me to choose any of the available images on my machine. The image then will be used to start a container which then can receive the traffic from Telepresence’s intercept.
:::
:::GlobalParagraph
After setting up the intercept the Docker Desktop Extension displays the log of the container. In the past we did this with Gefyra as well - however, there is a built-in log viewer in Docker Desktop, which basically does the job.
:::

![telepresence](/img/blogs/telepresence-8.jpg){.object-cover .max-w-full .mb-6}

:::GlobalParagraph
Surely the way Telepresence solved displaying the logs allows the user to stay within the extension. However for longer log output this seems a bit messy. Furthermore I am not sure (from a user’s perspective) why this is the time and place to manage my subscriptions. Let’s close that overlay.
:::

![telepresence](/img/blogs/telepresence-9.jpg){.object-cover .max-w-full .mb-6}

:::GlobalParagraph
Alright! The traffic is intercepted! And there is even a preview url - which allows me to share my running container with my team. That’s indeed an amazing feature. There are some information displayed about the currently running intercepts.
:::

![telepresence](/img/blogs/telepresence-10.jpg){.object-cover .max-w-full .mb-6}

:::GlobalParagraph
Below the intercept overview are two more buttons to create another intercept. It seems they have a standardized file format to share intercept request parameters within your development team. That’s amazing.
:::
:::GlobalParagraph
However - as a developer I am missing especially one particular feature here - hot code reloading. In case anyone reading this knows how to do it - feel free the contact us - we will update the blog post asap!
:::
:::GlobalParagraph
With Gefyra’s Docker Desktop Extension you can just mount your code into your running container. This way the code within the container is continuously updated which is a huge advantage to Telepresence’s implementation of running containers locally. Also Telepresence’s CLI actually supports intercepting traffic and sending it to a specified process on your machine - it’s Docker Desktop Extension does not (yet).
:::
:::GlobalParagraph
After stopping the intercept we are redirected to the home screen:
:::

![telepresence](/img/blogs/telepresence-11.jpg){.object-cover .max-w-full .mb-6}

:::GlobalParagraph
One thing I also noticed during the exploration of this Docker Desktop Extension was that it is not open source (8 May 2023). All of Gefyra’s components and extensions are fully <a href="https://github.com/gefyrahq/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">open source</a> - this way developers can actually check what happens on their machine and in their clusters.
:::

:::GlobalTitle{:size="lg" .mb-5}
**Summary**
:::
:::GlobalParagraph
Telepresence currently only implements few of their capabilities in their Docker Desktop Extension. I am sure they will upgrade it in the future, especially since they announced a partnership with Docker itself. The extension brings some value to the user, however some of the really important core features for cloud native software development are missing. We developed Gefyra’s Docker Desktop Extension based on Blueshoe’s needs as a cloud native software development company.
:::
:::GlobalParagraph
We’re super excited to see how Telepresence has evolved and even though [Gefyra](/products/){.bs-link-blue} and Telepresence are competing tools for similar use-cases it gives us a lot of motivation and inspiration to push [Gefyra](/products/){.bs-link-blue} further!
:::

:::GlobalPodcastSection{:videoId="5wNTUUSk1jA" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR PODCAST: TOOLS FOR THE CRAFT
::::
::::GlobalTitle{:tag="h3" .mb-6}
E3: Deep dive into Getdeck
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael and Robert are introducing and demonstrating Getdeck as well as comparing local and remote Kubernetes and preproduction clusters
::::
::::globalParagraph{:font-size="lg" }
More editions of our podcast can be found here:
::::
::::GlobalButton{:url="/podcast" :label="Show more" :color="green"}
::::
:::

:::BlogRelatedPosts{:url='["/blog/kubernetes-community-days-munich-2023", "/blog/cilium-kubernetes-networking-observability", "/blog/performance-comparison-gke-vs-eks", "/blog/local-kubernetes-development", "/blog/evolution-of-application-development-to-cloud-native"]'}

:::
