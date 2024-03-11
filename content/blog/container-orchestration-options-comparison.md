---
head:
  title: 'Comparison of Container Orchestration Options'
  meta:
    - property: 'og:locale'
      content: 'en_US'
    - name: 'description'
      content: 'There are plenty of possibilities for orchestrating your container landscape and we want to give you a quick little introduction to your possibilities. ✅ Cloud  ✅ On-site ✅ Comparison'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'Comparison of Container Orchestration Options'
    - property: 'og:description'
      content: 'There are plenty of possibilities for orchestrating your container landscape and we want to give you a quick little introduction to your possibilities. ✅ Cloud  ✅ On-site ✅ Comparison'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'Comparison of Container Orchestration Options'
    - name: 'twitter:description'
      content: 'There are plenty of possibilities for orchestrating your container landscape and we want to give you a quick little introduction to your possibilities. ✅ Cloud  ✅ On-site ✅ Comparison'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/container-orchestration-options-comparison'
img: '/img/blogs/container-orchestration-options-comparison.jpg'
alt: 'Comparison of Container Orchestration Options'
preTitle: 'A comparison'
title: "Comparison of Container Orchestration Options"
description: 'There are plenty of possibilities for orchestrating your container landscape and we want to give you a quick little introduction to your possibilities. ✅ Cloud  ✅ On-site ✅ Comparison'
date: '30.08.2021'
author:
  - Hannes Hanusch
technology:
  - Kubernetes
productUpdates: []
topic:
  - Operation
---
There are plenty of possibilities for orchestrating your container landscape and we want to give you a quick little introduction to your possibilities. Taking a look at both cloud-offerings and on-site options.
<!--more-->

![Comparison of Container Orchestration Options](/img/blogs/container-orchestration-options-comparison.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalParagraph
You are building applications in a containerized manner and really love the advantages of service-based application development. Now you have to decide how you want to tackle the orchestration of these containers so that you ideally have low cost, high reliability and high performance?
:::
:::globalParagraph
Or there may be some other factors that you need to consider? For example, your company doesn't allow you to use public cloud services?
:::
:::globalParagraph
The decision for a method is also based upon how many parts of your application's landscape you want to manage yourself. We identified the following integral parts:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Applications
- Data
- Container Orchestration
- Operating System
- Virtualization
- Networking
- Storage
- Server
:::
:::globalParagraph
  There are many ways to orchestrate your container landscape, and we would like to give you a brief introduction to your options.
:::

![unikube_coec_Infographic](/img/blogs/unikube_coec_Infographic.jpg){.object-cover .w-full .mb-5}

:::globalTitle{:size="lg" :color="text-bs-green" .mb-5}
Cloud Offerings
:::
:::globalParagraph
The general advantage of public cloud offerings is that mostly you have very little ramp up time. Once you’ve made the decision to opt for a cloud service you have to make a few more decisions of how you want to run your infrastructure. In general you have the options to go for a “Platform as a Service” (PaaS) offer, “Infrastructure as a Service” (Iaas) offer or to opt for a “Managed Kubernetes” offer.
:::
:::globalParagraph
All of these come with different features, difficulties and flexibility. The following explanations can hopefully help you with this decision.
:::

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
Cloud Platform - native Services (PaaS)
:::
:::globalParagraph
If you are looking for a cloud offering that is really simple to set up and very reliable, you could opt for a PaaS offering. You only need to manage your applications and the data while the PaaS vendor will take care of the container orchestration, OS, virtualization, networking, storage and server.
:::
:::globalParagraph
So, if it’s simple and reliable, what’s the catch? Well, the simplicity comes with a strong vendor lock-in. Once you are set up it is really hard to change your setup. You can’t just port your environment to a different provider or you have to start from scratch. That also makes you susceptible to any changes in pricing or policies that your provider may implement in the future.
:::
:::globalParagraph
Also, you are limited to the exact services that your PaaS provider has to offer. If you see a service at a different provider that you may like, you may have to connect to service providers external to your cloud or provide the service per IaaS.
:::

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
Managed Kubernetes
:::
:::globalParagraph
Kubernetes has been all the rage over the last few years but as a platform, it can be very complex. So, if you want to use all the great advantages that Kubernetes brings but don’t want to do everything yourself, then you could work with a Managed Kubernetes Service of any cloud provider that you may choose.
:::
:::globalParagraph
In the end, it’s very convenient again as the only thing you’ll have to worry about is the management of your application and the respective data. Your cloud provider will again take care of orchestration, OS, virtualization, networking, storage and the server.
:::
:::globalParagraph
Also, in a <a href="/blog/managed-vs-unmanaged-kubernetes/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid">Managed Kubernetes</a> environment your provider will take care of updating and patches and it will generally need a lot fewer experts in your team to run your infrastructure.
:::
:::globalParagraph
And if you want to take things even further, you can have a look at <a href="https://chaordic.io/blog/gke-autopilot-a-serverless-game-changer/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">GKE autopilot</a>, a service by Google built for the Google Kubernetes Engine, that takes even more of the hard work out of your hands by providing a very automated and opinionated configuration of GKE.
:::
:::globalParagraph
But what’s the difference to the PaaS offering of the cloud providers? Well, mostly you would be putting your money on the current and feature industry-standard, that is Kubernetes. Also, you would now have a portable infrastructure and are not as eternally attached to your provider anymore. Portability is clearly one of Kubernetes’ strong sides.
:::
:::globalParagraph
However, the whole setup is a little more complicated than when using a PaaS offering.
:::

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
Infrastructure as a Service
:::
:::globalParagraph
Well, you may enjoy the simplicity of the services you get offered by cloud providers but you just wish you had a bit more flexibility. Then an infrastructure as a service offering could be the right choice for you.
:::
:::globalParagraph
When you use an IaaS offering, the provider predominantly takes care of your virtualization, the networking, the storage and the server. But you are completely flexible in deciding which orchestration service you use. A prefered Kubernetes distribution, such as RKE, micok8s, OKD, Docker Swarm or OpenShift? You decide and take care of the configuration.
:::
:::globalParagraph
The same is true for the operating system. When using IaaS, you can decide on which OS you want to be operating on and how - including underlying software and updates.
:::
:::globalParagraph
Of course, additionally, you also have to manage your applications and data again.
:::

<hr class='mb-5'>

:::globalTitle{:size="lg" :color="text-bs-green" .mb-5}
On-Site
:::
:::globalParagraph
There are sometimes good reasons why you don’t want to rely on the services of a cloud provider and run your infrastructure completely in-house. Mostly, this has to do with privacy and data security compliance guidelines in companies or because you simply don’t want to rely on an external provider.
:::
:::globalParagraph
If that’s the case, you clearly also need some serious expert knowledge in-house as with this option you are responsible for managing your whole infrastructure. Of course, aside from security this also gives you all the flexibility you want or need. But if you really want to run your infrastructure on-site, you still have a couple of options:
:::

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
Unmanaged Kubernetes
:::
:::globalParagraph
As mentioned earlier in this article, if you decided to go with Kubernetes, you definitely went with the current and future industry-standards and should be settled for the years to come. However, if you run a Kubernetes based infrastructure yourself, you better buckle up, because the setup can be really complex. In the end here you not only have to manage your application and data but also configure the orchestration, manage the OS, your virtualization, networking storage and server.
:::
:::globalParagraph
In addition to the management of all these infrastructure parts, you’ll also have to take care of the maintenance of your hardware, which causes additional overhead. Just to keep in mind.
:::
:::globalParagraph
But is there anything to gain? Yes, of course. In a complex setup like this, if done properly, you’ll have a maximum of security, great reliability and a portable and flexible infrastructure that can be adapted to every specific need of your company that may arise. If for example you want to decide to make the move to a cloud infrastructure later, such as Managed Kubernetes, you can still do that.
:::

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
Unmanaged Infrastructure
:::
:::globalParagraph
If you like challenges this setup is for you. You may decide that you want to run everything yourself but you either don’t have Kubernetes knowledge in-house or are not yet convinced of Kubernetes (what?! - tell us why). Well, then the setup is of course also very complex and prone to be misconfigured and therefore can lead to consistently having infrastructural problems all over the place. Seriously, this is hard.
:::
:::globalParagraph
And as with the Unmanaged Kubernetes setup, you don’t only have to manage all parts of your infrastructure but also have to take care of the hardware maintenance. All of this while you only gain on the security spectrum and have endless flexibility. However, reliability can be questionable and you have zero portability.
:::

<hr class='mb-5'>

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
::::GlobalButton{:url="/podcast" :label="More podcasts!" :color="green"}
::::
::

:::globalTitle{:size="lg" .mb-5}
Conclusion
:::
:::globalParagraph
Of course, we would like to give a recommendation of what your choice should be but that is unfortunately impossible as this is completely depending on your individual requirements. However, in general we would say, if you want to be ready for the future, go with one of the possible setups that entail a Kubernetes infrastructure. We also did that switch once and never looked back since.
:::
:::globalParagraph
Also, check out [Unikube](/products){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid}, which makes Kubernetes really accessible for your developers. [Cloud Native Development](/blog/evolution-of-application-development-to-cloud-native/){.bs-link-blue} out of the box, so to say.
:::


:::BlogRelatedPosts{:url='["/blog/evolution-of-application-development-to-cloud-native", "/blog/managed-vs-unmanaged-kubernetes", "/blog/strategies-for-slim-docker-images", "/blog/local-kubernetes-development", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot"]'}

:::
