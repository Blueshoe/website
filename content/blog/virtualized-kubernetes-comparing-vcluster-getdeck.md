---
src: '/blog/virtualized-kubernetes-comparing-vcluster-getdeck'
img: '/img/blogs/kubernetes-vcluster-getdeck.jpg'
alt: 'kubernetes vcluster getdeck'
preTitle: 'K8s in K8s'
title: "Virtualized Kubernetes: comparing vcluster and Getdeck"
description: 'Compare vcluster and Getdeck to optimize your K8s setup. Learn how virtualized K8s boosts resource use, reduces costs, and streamlines development.'
date: '24.08.2023'
author:
  - Robert Gutschale
technology: []
productUpdates:
  - Getdeck
topic: []
---
Virtualization lets multiple OS instances run on one system and has modernized over time. In Kubernetes, running Kubernetes within Kubernetes is emerging as a new standard, altering cluster management and resource use. This offers better isolation, simpler development, and efficient resource use. We'll explore two key tools for this: [vcluster](https://www.vcluster.com/){.bs-link-blue} by Loft Labs and [Getdeck](https://getdeck.dev/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} by Blueshoe.
<!--more-->

![my image](/img/blogs/kubernetes-vcluster-getdeck.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}
:::

:::globalTitle{:size="lg" .mb-5}
What is virtualized Kubernetes?
:::
:::globalParagraph
At its core, the idea is simple: running a logical or "virtual" [Kubernetes](https://kubernetes.io/de/docs/concepts/overview/what-is-kubernetes/){.bs-link-blue} cluster within a physical or "host" Kubernetes cluster. This concept brings a new layer of flexibility, allowing developers to spin up isolated environments quickly without the overhead of managing multiple physical clusters. With this, developers can replicate production environments, experiment safely, and optimize applications for the Kubernetes ecosystem.
:::
:::globalParagraph
There are two major benefits with this approach. First, you get the possibility to run ephemeral Kubernetes clusters, i.e. K8s clusters with a short lifespan, that you can create and delete much quicker than spinning up regular clusters. And second, the resources of the shared host cluster are much more efficiently used when running for example 5 virtual clusters, than running 5 regular K8s clusters.
:::
:::globalParagraph
Both should lead to a decrease in operating costs, as you are now able to more easily spin up clusters when you need them and delete them when you don’t need them anymore. This comes in handy in development setups, when you don’t work on the same cluster from day to day. And it can also be advantageous with automated testing against K8s clusters or also QA and staging systems that don’t need to run 24/7 but for example only when new features are tested.
:::

:::globalTitle{:size="lg" .mb-5}
vcluster: a closer look
:::
:::globalParagraph
Vcluster is the most visible player when it comes to tools for Kubernetes-in-Kubernetes. In a nutshell, it works by setting up virtual Kubernetes clusters inside namespaces of a host Kubernetes cluster. To deploy and manage virtual clusters, a CLI _vcluster_ is used. Let’s look at some key points.
:::
:::globalParagraph
**Workload Execution:** Crucially, the workloads in vcluster are executed on the host cluster. The pods of a virtual cluster are synced to and executed in the host cluster.
:::
:::globalParagraph
**Isolation:** While each vcluster has its distinct control plane ensuring Kubernetes-level isolation, the underlying nodes and resources are shared from the host cluster.
:::
:::globalParagraph
**Multitenancy:** Designed with multi-tenancy in mind, vcluster is perfect for scenarios where distinct teams or projects need their own isolated Kubernetes environments without the overhead of separate physical clusters.
:::

:::globalTitle{:size="lg" .mb-5}
Getdeck: a new player for K8s-in-K8s
:::
:::globalParagraph
Much like vcluster, [Getdeck](/products){.bs-link-blue} provides a Kubernetes-in-Kubernetes approach. However, there are nuances that set it apart. Virtual K8s clusters are created by running k3s server-/agent-nodes inside namespaces of a host cluster. To deploy and manage virtual clusters, a CLI [_beibootctl_](https://github.com/Getdeck/beiboot){.bs-link-blue} and a [desktop app](https://github.com/Getdeck/Getdeck-Desktop){.bs-link-blue} are available.
:::
:::globalParagraph
**Workload Execution:**  [Getdeck's](/products){.bs-link-blue} workloads run inside the virtual clusters. This provides deeper isolation, allowing workloads to operate independently of the host cluster.
:::
:::globalParagraph
**Quick Provisioning & Flexibility:** Getdeck is built for speed, provisioning Kubernetes clusters in under one minute.
:::
:::globalParagraph
**Snapshot & Restore:** The ability to fully snapshot and restore cluster states offers a unique blend of persistence and elasticity. This allows you to delete a cluster when it is not needed and create it again at a later time, exactly at the state it was deleted.
:::
:::globalParagraph
**Automatic cluster management:** Getdeck can automatically delete clusters at a specified time, or also dynamically by setting usage-timeouts.
:::


:::GlobalPodcastSection{:videoId="5wNTUUSk1jA" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
Our Kubernetes podcast
::::
::::GlobalTitle{:tag="h3" .mb-6}
TftC E3: Deep dive into Getdeck
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


:::globalTitle{:size="lg" .mb-5}
Comparing vcluster and Getdeck
:::
:::globalParagraph
While both [vcluster](https://www.vcluster.com/){.bs-link-blue} and [Getdeck](/products){.bs-link-blue} allow for the virtualization of Kubernetes clusters within a host Kubernetes cluster, their operation, design philosophy, and target audience exhibit noteworthy differences.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Workload Execution and Isolation
:::
:::globalParagraph
**vcluster:** The workloads of the virtual clusters are executed on the host cluster, leading to a tighter integration with the host. This might offer better overall resource utilization, as the resources are effectively shared. However, it also means that the boundaries between the virtual and host clusters are more porous.
:::
:::globalParagraph
**Getdeck:** Emphasizes deep isolation by running the workloads inside the virtual clusters. This results in a working environment that feels more akin to managing standalone Kubernetes instances.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Development & Management Tools
:::
:::globalParagraph
**vcluster:** Primarily uses its CLI, vcluster, to manage and deploy virtual clusters.
:::
:::globalParagraph
**Getdeck:** Provides a more diverse toolkit, with both a CLI, beibootctl, and a dedicated desktop app for cluster management. This might offer a more versatile user experience catering to both CLI enthusiasts, as well as enabling diverse configuration and management options and those preferring a GUI, providing a low level entry point to manage and interact with virtual clusters.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Flexibility & Persistence
:::
:::globalParagraph
**vcluster:** Offers standard Kubernetes-in-Kubernetes functionalities, emphasizing multi-tenancy and isolation.
:::
:::globalParagraph
**Getdeck:** Pushes the envelope with features like fast provisioning (in under a minute), the ability to snapshot and restore cluster states, and automated cluster management. These functionalities lean heavily into the ephemeral nature of development, testing, and staging environments, maximizing the efficient use of resources.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Use Cases
:::
:::globalParagraph
**vcluster:** Its design philosophy revolves around providing isolated Kubernetes environments for different teams or projects. Its core strengths lie in scenarios demanding multi-tenancy without the overhead of multiple physical clusters.
:::
:::globalParagraph
**Getdeck:** With its emphasis on speed, flexibility, and deeper isolation, Getdeck seems tailor-made for dynamic development and staging setups where clusters' lifespan varies, and resources need to be optimized. The snapshot & restore functionality further endorses its use in scenarios where persistence across sessions is crucial.
:::

:::globalTitle{:size="lg" .mb-5}
Conclusion
:::
:::globalParagraph
The rise of virtualized Kubernetes, signified by tools like vcluster and Getdeck, showcases the ever-evolving nature of container orchestration and its alignment with modern development needs. While both tools have their distinct advantages, the choice between them should be influenced by specific use cases, required levels of isolation, and the importance of features like snapshotting and automatic cluster management.
:::
:::globalParagraph
Vcluster, being a prominent player in the space, offers solid Kubernetes-in-Kubernetes functionalities with a focus on multi-tenancy. On the other hand, Getdeck, a newer entrant, brings in innovative features aimed at optimizing resource usage and ensuring deeper workload isolation. As with most technology choices, understanding your requirements and mapping them to the features of these tools is key to making an informed decision.
:::
:::globalParagraph
As with most technology choices, understanding your requirements and mapping them to the features of these tools is key to making an informed decision. For those interested in a hands-on experience with Getdeck without initial setup complexities, there's the free [Getdeck as a Service](https://getdeck.dev/docs/getdeck-as-a-service/){.bs-link-blue} available.
:::


:::BlogRelatedPosts{:url='["/blog/virtualized-kubernetes-comparing-vcluster-getdeck", "/blog/kubernetes-basics-simply-explained", "/blog/cloud-native-conferences"]'}
:::
