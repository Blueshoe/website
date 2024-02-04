---
src: '/blog/alternative-to-telepresence-2-gefyra'
img: '/img/blogs/alternative-to-telepresence-2-gefyra.jpg'
alt: 'An alternative to Telepresence 2: Gefyra'
preTitle: 'More local Kubernetes Development'
title: "An alternative to Telepresence 2: Gefyra"
description: "If you worked with Telepresence you know it's a great tool with a few issues. We set out to make Gefyra a viable more lightweight alternative."
date: '30.03.2022'
author:
  - Michael Schilonka
technology:
  - Kubernetes
  - Telepresence
  - Gefyra
productUpdates:
  - Gefyra
topic:
  - Development
---
There are a couple of different approaches to develop locally using Kubernetes. One very well-known tool for a few different scenarios ranging from local to remote Kubernetes application development is Telepresence. Although Telepresence 2 comes with great features, we have not been completely satisfied with the extent of supported use cases. So we decided to build our own solution. May we introduce: [Gefyra](https://gefyra.dev/){.bs-link-blue :target="_blank"}.
<!--more-->

![An alternative to Telepresence 2: Gefyra](/img/blogs/alternative-to-telepresence-2-gefyra.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalTitle{:size="lg" .mb-5}
Introduction
:::
:::globalParagraph
For local <a href="https://unikube.io/blog/how-does-kubernetes-development-work/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Kubernetes development</a> there are few possibilities to make writing code right within Kubernetes feasible. One of the simpler solutions with a limited feature set are host path mappings (such as the local-path-provisioner in <a href="https://k3d.io/v5.4.1/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">K3d</a>) in Kubernetes. Among others, the biggest concern with that is the missing portability of that approach to remote Kubernetes development scenarios.
:::
:::globalParagraph
Hence, we started to use Telepresence (back in the days in version 1) in all of our development infrastructures. That empowered our teams to utilize the same tool regardless of their development setups: either locally or remotely running Kubernetes environments. The <a href="https://cli.unikube.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Unikube CLI</a> offered this functionality to their users by building on top of the free open source parts of <a href="https://www.telepresence.io/docs/latest/reference/architecture/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Telepresence 2</a>.
:::
:::globalParagraph
Unfortunately, we have always had troubles with Telepresence. We experienced quite some issues on different platforms and environments. That’s why we decided to create an alternative to Telepresence 2 and started the development of Gefyra.
:::
:::globalParagraph
Today, <a href="https://gefyra.dev/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Gefyra</a> is part of the Unikube CLI and replaces Telepresence as the default development mechanism while having the same or even better experience. The following article will go into detail why we decided to start Gefyra and what the biggest differences between Telepresence and Gefyra are.
:::

:::globalTitle{:size="lg" .mb-5}
Working with Telepresence
:::
:::globalParagraph
Telepresence 2 is a very comprehensive tool to create a seamless Kubernetes-based development experience while having established equipment available. These include favorite IDEs (integrated development environments), debugging tools, code hot reloading, environment variables and so on. Using Telepresence comes with the great advantage of having developers work with Kubernetes from the beginning without leaving too far from the familiar surroundings.
:::
:::globalParagraph
The makers of Telepresence 2 are addressing a new paradigm, new development workflow and development environment: it essentially means that Kubernetes is becoming part of the software it runs. And so the development workflow and tooling must be adapted, too. <a href="https://www.telepresence.io/docs/latest/concepts/devloop/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">This is concisely written down here</a>.
:::
:::globalParagraph
Additionally to the free part, Telepresence offers commercial only features in combination with the Ambassador Cloud, for example preview links. They allow sharing of development states even within a production(-near) environment with other teams.
:::
:::globalParagraph
Our teams have only been using the free parts and so we cannot report experiences with using the commercial version.
:::

:::globalTitle{:size="lg" .mb-5}
Challenges and issues with Telepresence 2
:::
:::globalParagraph
One of the biggest challenges of Telepresence 2 is to make “your development machine to become part of the cluster”. Running on Windows, MacOS and Linux, that leads to a lot of platform specific logic, for example with the DNS resolvers. Creating special DNS and interface rules plus maintaining them as the operating systems evolve seems very difficult. In fact, it always requires granting *sudo-privileges* in order to connect to a (even local) Kubernetes cluster.
:::
:::globalParagraph
We found ourselves and users of the Unikube CLI to face *timeout issues* with no relatable reason. A very frustrating situation.
:::
:::globalParagraph
Another architectural decision of the Telepresence team was to modify the workload components (e.g. Deployments) of the applications in question upon connection. That approach opens up great opportunities and features, but can lead to inconsistencies and residues when not disconnecting properly (which is often the case for us). Once the workloads are modified they cannot be reset to their original states without applying the workload descriptors again. Cleaning up the Telepresence components became a frequent task in our development clusters.
:::


:::globalTitle{:size="sm" .mb-5}
Bypassing of containers
:::
:::globalParagraph
However, one of the major downsides of Telepresence 2 is their *agent*-concept which incorporates a dedicated sidecar component which can intercept running Pods. No matter which port is the target for the intercept, the traffic from the services is directly routed to Telepresence’s agent (which got installed to the Pod) effectively bypassing all other containers (i.e. sidecars). From our perspective, this is the exact opposite of writing Cloud Native software as it leaves one of the most promising Kubernetes patterns disregarded.
:::

:::globalTitle{:size="lg" .mb-5}
Gefyra: our alternative to Telepresence 2
:::
:::globalParagraph
After placing a couple of issue tickets on GitHub and being part of their community calls, we decided to build an alternative to Telepresence 2 with a smaller featureset and a simplified architecture. Gefyra is based on other popular open source projects, such as Wireguard or Nginx. We are committed to create something more robust and to support a wider range of actual development scenarios, including all Kubernetes patterns.
:::

:::globalTitle{:size="md" .mb-5}
More control with 4 operations
:::
:::globalParagraph
Gefyra does not try to make your entire development machine to be part of the Kubernetes cluster, instead it only connects a dedicated Docker network. That ought to be more controllable and portable across different operating systems. In addition, this approach does not need to grant sudo-privileges if the development user account has access to the Docker host.
:::
:::globalParagraph
Gefyra declares four relevant operations: *up, down, run, bridge*. Similar to Telepresence 2 one has to connect to the development cluster. Gefyra sets up the required cluster components. A developer can *run* a container which behaves to be part of the cluster while having it on the local Docker host. The bridge operation redirects traffic that hits a container in a certain Pod and proxies these requests to a local container instance. Of course, *down* removes all cluster components.
:::
:::globalParagraph
In contrast to Telepresence, Gefyra does not modify the workload manifest in the cluster. In case something goes wrong, deleting the Pod will restore its original state.
:::
:::globalParagraph
If you want to know more about Gefyra’s architecture, please head over to the documentation: [https://gefyra.dev/architecture/](https://gefyra.dev/architecture/){.bs-link-blue :target="_blank"}
:::
:::globalParagraph
The following table compares the approaches of Telepresence 2 and Gefyra side-by-side:
:::

![Telepresence 2 & Gefyra](/img/blogs/alternative-to-telepresence-2-gefyra-1.jpg){.object-cover .w-full .mb-1}
![Telepresence 2 & Gefyra](/img/blogs/alternative-to-telepresence-2-gefyra-2.jpg){.object-cover .w-full .mb-5}


:::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
Our Kubernetes podcast
::::
::::GlobalTitle{:tag="h3" .mb-6}
Tools for the Craft: Navigating the Kubernetes ecosystem
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael and Robert are talking in depth about the ins and outs of local Kubernetes development and also provide some real coding examples.
::::
::::globalParagraph{:font-size="lg" }
More editions of our podcast can be found here:
::::
::::GlobalButton{:url="/podcast" :label="Show more" :color="green"}
::::
:::

:::globalTitle{:size="lg" .mb-5}
Using Gefyra: an Overview
:::
:::globalParagraph
If you want to use Gefyra then simply head over to the installation guide: [https://gefyra.dev/installation/](https://gefyra.dev/installation/){.bs-link-blue :target="_blank"}. There are installation candidates for Windows, Linux and MacOS with different installation methods. Once the executable is available you can run
:::
:::globalParagraph
Gefyra actions.
:::
:::globalParagraph
But before you go on, please make sure you have a working *kubectl* connection set. If not, or you simply want to work with a local Kubernetes cluster, you can easily create one using *<a href="https://k3d.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">k3d</a>*.
:::
:::globalParagraph
Also, when you tried Gefyra, we would really <a href="https://forms.gle/5U6EPgkq3RzQyYcz9" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">appreciate feedback and have prepared a quick questionnaire</a>. This should not take you more than 3 minutes and really helps us.
:::

:::globalTitle{:size="lg" .mb-5}
Set a UDP Connection
:::
:::globalParagraph
**Important**: In order to use Gefyra, you’ll need a *UDP* connection. Depending on your cluster connectivity (if it is not local) you have to set appropriate firewall rules for port *UDP/31820*.
:::
:::globalParagraph
For a working local k3d cluster (k3d version >= 5) you run:
:::
:::globalParagraph
*k3d cluster create mycluster --agents 1 -p 8080:80@agent:0 -p 31820:31820/UDP@agent:0*
:::

:::BlogTerminal{:input='> gefyra up'}
First thing to do is connect Gefyra with the cluster running
#lines
- \[INFO] Installing Gefyra Operator
- \[INFO] Pulling image "quay.io/gefyra/operator:latest"
- \[INFO] Successfully pulled image "quay.io/gefyra/operator:latest" in 638.596569ms
- \[INFO] Pulling image "quay.io/gefyra/stowaway:latest"
- \[INFO] Successfully pulled image "quay.io/gefyra/stowaway:latest" in 7.092248247s
- \[INFO] Operator became ready in 15.2887 seconds
- \[INFO] Creating Docker network
- \[INFO] Created network 'gefyra' (156bace408)
:::

:::BlogTerminal{:input='> gefyra run -i pyserver -N mypyserver -n default'}
Now, Gefyra is connected to the cluster.

All you have to do now is to run a local container with:
#lines
- \[INFO] Container image 'pyserver:latest' started with name 'mypyserver' in Kubernetes namespace 'default'
:::

:::BlogTerminal{:input='> gefyra bridge -N mypyserver -n default --deployment hello-nginxdemo --port 80:8000 --container-name hello-nginx -I myp'}
**Mind the -n default** which places the container *“mypyserver”* in the Kubernetes namespace of your choice. There are a couple of options available for the run action, for example you can **ask Gefyra to copy the environment** from a container within the cluster.

This is handy if you need to connect to a cluster-based database for which a container within the cluster already holds the parameters.

If you want to **intercept a cluster-based container** in a *pod* of a certain *deployment*, you can do so with the bridge action.
#lines
- \[INFO] Creating bridge for Pod hello-nginxdemo-7d648bd866-xsd28
- \[INFO] Waiting for the bridge(s) to become active
- \[INFO] Bridge mypybridge established
:::

:::BlogTerminal{:input='> gefyra down'}
This action will make the “hello-nginx” container in all pods of the deployment *“hello-nginxdemo”* to redirect their traffic to the local instance of *“mypyserver”*.

Now, you are able to write code or make other changes and instantly see it interacting with other Kubernetes-based components.

To clean up everything you simply run:


To find even more examples please check out <a href="https://gefyra.dev" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">https://gefyra.dev</a>.
#lines
- \[INFO] Removing running bridges
- \[INFO] Uninstalling Operator
- \[INFO] Removing Cargo
- \[INFO] Stopping remainder container from Gefyra network
- \[INFO] Removing Docker network
- \[INFO] Removed 1 docker networks with name 'gefyra'
:::

:::globalTitle{:size="lg" .mb-5}
Summary
:::
:::globalParagraph
In this blog post, we introduced our Telepresence 2 alternative Gefyra. Although it does not cover all (enterprise) features of Telepresence at the moment, it is already usable for the core requirements of real Cloud Native development. We hope that, from a technical perspective, the differences will make the technology less prone to failures caused by the host system. In addition, the clear UDP based connection requirements will make the life of corporate infrastructure teams much easier, as the underlying connection is much more comprehensible. However, in terms of features Gefyra is still far behind Telepresence.
:::

:::globalTitle{:size="lg" .mb-5}
Gefyra in Unikube
:::
:::globalParagraph
Gefyra will replace Telepresence 2 in the upcoming release of the Unikube CLI and become the new standard provider for the <a href="https://unikube.io/docs/guides/developing-with-unikube.html#switch-operation" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">switch operation</a>. This will significantly reduce the issues that our users are experiencing with Telepresence and improve the overall performance. Moreover, since we are now in control of the entire stack, the development team of Unikube will finally be able to help out with all problems related to this operation. We’re looking forward to receiving feedback.
:::

:::BlogRelatedPosts{:url='["/blog/performance-comparison-gke-vs-eks", "/blog/local-kubernetes-development", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/evolution-of-application-development-to-cloud-native", "/blog/docker-desktop-and-kubernetes"]'}

:::
