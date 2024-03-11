---
head:
  title: 'Managed vs. unmanaged Kubernetes'
  meta:
    - property: 'og:locale'
      content: 'en_US'
    - name: 'description'
      content: 'Find out more about the differences about managed and unmanaged Kubernetes. ✔ Development Infrastructure ✔ On-premise vs. Cloud Hosting ✔ Kubernetes'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Managed vs. unmanaged Kubernetes'
    - property: 'og:description'
      content: 'Find out more about the differences about managed and unmanaged Kubernetes. ✔ Development Infrastructure ✔ On-premise vs. Cloud Hosting ✔ Kubernetes'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Managed vs. unmanaged Kubernetes'
    - name: 'twitter:description'
      content: 'Find out more about the differences about managed and unmanaged Kubernetes. ✔ Development Infrastructure ✔ On-premise vs. Cloud Hosting ✔ Kubernetes'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/managed-vs-unmanaged-kubernetes'
img: '/img/blogs/managed-vs-unmanaged-kubernetes.jpg'
alt: 'Managed vs. unmanaged Kubernetes'
preTitle: "What's the difference?"
title: "Managed vs. unmanaged Kubernetes"
description: 'Find out more about the differences about managed and unmanaged Kubernetes. ✔ Development Infrastructure ✔ On-premise vs. Cloud Hosting ✔ Kubernetes'
date: '23.06.2021'
author:
  - Robert Gutschale
technology:
  - Kubernetes
productUpdates: []
topic:
  - Operation
---
We’ve noticed an increasing interest in Kubernetes (K8s) when speaking to techies and even more so when speaking to our clients. So in this blog article, we’re asking the question of what managed and unmanaged Kubernetes actually is.
<!--more-->

![Managed vs. unmanaged Kubernetes](/img/blogs/managed-vs-unmanaged-kubernetes.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
When it comes to Kubernetes (K8s), we’ve noticed that the biggest knowledge gap is often found in one of the fundamental questions – namely, whether you want to use managed or unmanaged Kubernetes. We want to change this!
:::

:::BlogNavigationCard{:title="In this blog post we cover the following topics"}

:::

:::globalTitle{:size="lg" .mb-5}
Kubernetes overview
:::
:::globalParagraph
For this blog post, we will assume that you have a [basic understanding of Kubernetes](/blog/local-kubernetes-development/){.bs-link-blue} (K8s). However, we do still want to have a quick look at how Kubernetes actually works and in particular, how it interacts:
:::
:::globalParagraph
At the bottom of the graphic, there are technically no changes; just ‘like before’, virtual servers are still being used to run the code. **Kubernetes acts as a kind of abstraction layer above the virtual servers – in this case, they’re called nodes and they are combined to a cluster** (see diagram below by <a href="https://kubernetes.io/docs/concepts/overview/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Kubernetes.io</a>). This means that as a developer and operations specialist, I don’t really need to worry about which of the nodes my application ends up running on. I only need to teach Kubernetes the framework of my application in the form of manifest files and subsequently, K8s will ensure that a suitable node is used.
:::

![bildschirmfoto](/img/blogs/bildschirmfoto_1.jpg){.object-cover .w-full .mb-5}

:::globalParagraph
So effectively, the direct **interaction with virtual machines is covered by Kubernetes,** so I don’t need to deal with it myself. In the K8s manifest, a number of things are specified, including the container image and its version as well as the command which is to be run. What’s more, you can also find other things here, such as the resource requests and limits – i.e. the minimum requirements that CPU and memory have to fulfill in order for the application to run successfully or the maximum value the application is allowed to take up.
:::

:::globalTitle{:size="lg" .mb-5}
Unmanaged Kubernetes
:::
:::globalParagraph
The word ‘unmanaged’ in the term ‘**unmanaged Kubernetes’ refers to the fact that you have to deal with the installation and maintenance of Kubernetes yourself** – essentially, you have to manage Kubernetes on your own. Primarily, this will be necessary if a hosting with a cloud provider is not possible or not wanted.
:::
:::globalParagraph
Below is an example of a standard, albeit shortened, **procedure of the manual installation:**
:::
:::globalParagraph
**First, the K8s nodes – i.e. virtual machines – have to be created.** In this example, we’ll assume there are 3 virtual servers: one for the so-called master node and two for the so-called worker nodes. The master node controls the worker nodes which means that the K8s software that is installed on the master node ultimately decides on which worker node an application is run.
:::
:::globalParagraph
**Next, the software packages required need to be installed and configured.** Among others, kubeadm will be required to initialise the master node and also to assign the worker nodes to the master one. With this step, you essentially create the Kubernetes cluster which is now technically ready to use.
:::
:::globalParagraph
**Next, the K8s manifests can be installed directly or via applications – using helm, for example.**
:::
:::globalParagraph
**As an alternative to installing all the individual components required, it would also be possible to use microk8s by Canonical, for example.** This is often used to simulate Kubernetes for the local development. For some years now, however, even microk8s has been deemed as production-ready by Canonical. The advantage of this method compared to the previous one is that you’d only need to install one package.
:::
:::globalParagraph
**What must be considered, though, is that ‘managed’ also refers to the maintenance.** All maintenance tasks must be done manually – be it the set-up and configuration of further worker nodes due to the available resources not sufficing anymore or even just the regular updates of the Kubernetes version.
:::

<hr class='mb-8'>

::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" :bg="bg-bs-gray" .mb-5}
:::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR KUBERNETES PODCAST
:::
:::GlobalTitle{:tag="h3" .mb-6}
TftC E1: Kubernetes development environments
:::
:::globalParagraph{:font-size="lg" .mb-4}
Michael and Robert are talking about the various options developers have for running remote Kubernetes development environments.
:::
:::globalParagraph{:font-size="lg" .mb-4}
More editions of our podcast can be found here:
:::
::::GlobalButton{:url="/podcast" :label="Show me more" :color="green"}
::::
::

<hr class='mb-8'>

:::globalTitle{:size="lg" .mb-5}
Managed Kubernetes
:::
:::globalParagraph
In contrast, managed Kubernetes describes **a Kubernetes installation which is made available by a provider or which can be configured via a provider.** Providers and their services include the Google Kubernetes Engine (GKE), Amazon’s AWS Elastic Kubernetes Service (EKS) and IONOS’ managed Kubernetes.
:::
:::globalParagraph
**The degree of the management can vary.** In many cases, there’s ‘only’ the option to have a Kubernetes infrastructure provided – meaning, to have a cluster created as well as having the number and specification of the worker nodes configured. That’s already a lot more convenient than unmanaged Kubernetes. Usually, a web interface or a command line interface is provided for the interaction. On top of this, further worker nodes can be added, or the Kubernetes version can be conveniently updated.
:::
:::globalParagraph
Right at the top of the ‘managed’ range, you’ll find the managed Kubernetes offer by <a href="https://ubuntu.com/kubernetes/managed" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Canonical</a>, among others. With this set-up, the entire Kubernetes infrastructure is installed and maintained by the provider. With such an offer, the operational part is reduced to the creation of the Kubernetes manifests or Helm charts.
:::
:::globalParagraph
In the upper range of the ‘managed’ services, Google has <a href="https://cloud.google.com/blog/products/containers-kubernetes/introducing-gke-autopilot" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">GKE Autopilot</a> on offer. With this one, the nodes are automatically scaled according to the resources required by the application. Here I can also limit my responsibilities to the creation of the Kubernetes manifests or Helm charts as a developer of operations specialist. We will be having a closer look at the GKE Autopilot in a future blog post.
:::

:::globalTitle{:size="lg" .mb-5}
Summary
:::
:::globalParagraph
**In our experience, most projects and companies will be better off with managed Kubernetes.** Thanks to the variety of providers, a lot of hosting requirements can be covered. Depending on how much it’s managed, you can benefit from various conveniences. One of the main benefits is undoubtedly that you don’t need to bother with the maintenance of the clusters – instead, some of this can be automated or you can conveniently deal with it via a web interface or CLI.
:::
:::globalParagraph
**If there are explicit requirements of on-premise hosting** or valid reasons to run Kubernetes in your own data centre, then there’s **no getting around unmanaged Kubernetes.**
:::
:::globalParagraph
Good to know: When it comes to [Unikube](/products){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid}, the issue of ‘managed vs. unmanaged Kubernetes’ isn’t even a problem in the first place. Whether in its entirety or only partially managed, unmanaged or even just simulated locally with Unikube, it doesn’t matter how the K8s cluster was installed.
:::





:::BlogRelatedPosts{:url='["/blog/performance-comparison-gke-vs-eks", "/blog/container-orchestration-options-comparison", "/blog/strategies-for-slim-docker-images", "/blog/local-kubernetes-development", "/blog/evolution-of-application-development-to-cloud-native"]'}

:::
