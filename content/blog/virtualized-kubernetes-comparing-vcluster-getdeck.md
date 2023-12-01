---
src: '/blog/virtualized-kubernetes-comparing-vcluster-getdeck'
img: '/img/blogs/kubernetes-vcluster-getdeck.jpg'
alt: 'kubernetes vcluster getdeck'
preTitle: 'K8s in K8s'
title: "Virtualized Kubernetes: comparing vcluster and Getdeck"
date: '24.08.2023'
author:
  - Robert Gutschale
technology: []
productUpdates:
  - Getdeck
topic: []
---
Virtualization lets multiple OS instances run on one system and has modernized over time. In Kubernetes, running Kubernetes within Kubernetes is emerging as a new standard, altering cluster management and resource use. This offers better isolation, simpler development, and efficient resource use. We'll explore two key tools for this: [vcluster](https://www.vcluster.com/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} by Loft Labs and [Getdeck](https://getdeck.dev/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} by Blueshoe.
<!--more-->

![my image](/img/blogs/kubernetes-vcluster-getdeck.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalTitle{:size="lg" .mb-5}
What is virtualized Kubernetes?
:::
:::globalParagraph
At its core, the idea is simple: running a logical or "virtual" Kubernetes cluster within a physical or "host" [Kubernetes](https://kubernetes.io/de/docs/concepts/overview/what-is-kubernetes/){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} cluster. This concept brings a new layer of flexibility, allowing developers to spin up isolated environments quickly without the overhead of managing multiple physical clusters. With this, developers can replicate production environments, experiment safely, and optimize applications for the Kubernetes ecosystem.
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
Vcluster is the most visible player when it comes to tools for Kubernetes-in-Kubernetes. In a nutshell, it works by setting up virtual Kubernetes clusters inside namespaces of a host Kubernetes cluster. To deploy and manage virtual clusters, a CLI vcluster is used. Let’s look at some key points.
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
Much like vcluster, Getdeck provides a Kubernetes-in-Kubernetes approach. However, there are nuances that set it apart. Virtual K8s clusters are created by running k3s server-/agent-nodes inside namespaces of a host cluster. To deploy and manage virtual clusters, a CLI beibootctl and a desktop app are available.
:::globalParagraph
**Workload Execution:** Getdeck's workloads run inside the virtual clusters. This provides deeper isolation, allowing workloads to operate independently of the host cluster.
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
::::GlobalTitle{.mb-6}
TftC E3: Deep dive into Getdeck
::::
::::globalParagraph{.mb-4}
Michael and Robert are introducing and demonstrating Getdeck as well as comparing local and remote Kubernetes and preproduction clusters
::::
::::globalParagraph
More editions of our podcast can be found here:
::::
::::GlobalButton{:url="/podcast" :label="Show more" :color="green"}
::::
:::

:::BlogRelatedPosts{:url='["/blog/virtualized-kubernetes-comparing-vcluster-getdeck", "/blog/kubernetes-basics-simply-explained", "/blog/cloud-native-conferences"]'}

:::
