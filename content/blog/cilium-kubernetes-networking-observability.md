---
src: '/blog/cilium-kubernetes-networking-observability'
img: '/img/blogs/cilium-kubernetes.jpg'
alt: 'cilium kubernetes'
preTitle: 'EBPF-BASED NETWORKING, OBSERVABILITY, SECURITY'
title: "Using Cilium for Kubernetes networking and observability"
description: 'Unravel FaaS vs. Kubernetes in our in-depth guide. Understand their strengths, weaknesses, use cases, and costs to inform your cloud computing decisions.'
date: '19.04.2023'
author:
  - Tobias Frölich
technology: []
productUpdates: []
topic: []
---

In this article, we'll provide an introduction to Cilium, a networking solution for Kubernetes that uses eBPF for high-performance networking, security, and observability tasks. We cover the installation of Cilium, network policy configuration, and using Hubble for observability.
<!--more-->

![cilium_kubernetes](/img/blogs/cilium-kubernetes.jpg){.object-cover .max-w-full .mb-6}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::GlobalTitle{:size="lg" .mb-5}
Introduction to Cilium and its use in Kubernetes
:::
:::GlobalParagraph
Cilium is a networking solution for Kubernetes that provides advanced networking and security features. It uses eBPF to perform high-performance networking, security and observability tasks within Kubernetes.
:::
:::GlobalParagraph
In this article, we’ll explore how to use Cilium for Kubernetes networking. We will cover the basics of setting up Cilium in a cluster, configuring network policies and using Hubble for observability. We’ll also discuss best practices for using Cilium in production environments and troubleshooting common issues. Let’s get started by installing Cilium to our Kubernetes cluster!
:::
:::GlobalParagraph
Note: We recommend using [kind](https://github.com/kubernetes-sigs/kind){.bs-link-blue} to try this out on your local machine. K3d (which uses k3s under the hood) does not ship bash in its node images, causing the cilium installation to fail.
:::

:::GlobalTitle{:size="lg" .mb-5}
Installing Cilium
:::
:::GlobalParagraph
First of all, we need to install the Cilium CLI as described in the [documentation](https://docs.cilium.io/en/stable/gettingstarted/k8s-install-default/#install-the-cilium-cli){.bs-link-blue}.
:::
:::GlobalParagraph
Once the CLI installation is finished, we can install Cilium to our cluster by running:
:::

:::BlogCode{.mb-5}
```docker
$ cilium install
```
:::

:::GlobalParagraph
This will install Cilium to the cluster pointed to by our current kubectl context. To verify a working installation, we use:
:::

:::BlogCode{.mb-5}
```docker
$ cilium status --wait
```
:::

:::GlobalParagraph
The output should look something like this:
:::

:::BlogCode{.mb-5}
```docker
/¯¯\
 /¯¯\__/¯¯\    Cilium:         OK
 \__/¯¯\__/    Operator:       OK
 /¯¯\__/¯¯\    Hubble:         disabled
 \__/¯¯\__/    ClusterMesh:    disabled
    \__/

DaemonSet         cilium             Desired: 1, Ready: 1/1, Available: 1/1
Deployment        cilium-operator    Desired: 1, Ready: 1/1, Available: 1/1
Containers:       cilium             Running: 1
                  cilium-operator    Running: 1
Cluster Pods:     0/3 managed by Cilium
Image versions    cilium             quay.io/cilium/cilium:v1.12.5@sha256:06ce2b0a0a472e73334a7504ee5c5d8b2e2d7b72ef728ad94e564740dd505be5: 1
                  cilium-operator    quay.io/cilium/operator-generic:v1.12.5@sha256:b296eb7f0f7656a5cc19724f40a8a7121b7fd725278b7d61dc91fe0b7ffd7c0e: 1
```
:::

:::GlobalParagraph
If everything looks good, we can verify proper network connectivity by running
:::

:::BlogCode{.mb-5}
```docker
$ cilium connectivity test
```
:::

:::GlobalParagraph
This will create a dedicated namespace and run some tests on predefined workloads in order to test the cluster network connection.
:::
:::GlobalParagraph
The successful output looks like this:
:::

:::BlogCode{.mb-5}
```docker
All 31 tests (151 actions) successful, 0 tests skipped, 1 scenarios skipped.
```
:::

:::GlobalParagraph
If all the tests ran successfully, congratulations! We have successfully installed Cilium to our Kubernetes cluster!
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

:::GlobalTitle{:size="lg" .mb-5}
Configuring network policies with Cilium
:::
:::GlobalParagraph
Network policies in Kubernetes are used to control and filter traffic. By default, any pod running in a cluster can communicate with any other pod, which might be insecure depending on the setup. Using network policies, we can implement rules that only allow traffic that we explicitly want to allow. Cilium allows us to set rules on the HTTP level, which decouples network rules from our application code.
:::
:::GlobalParagraph
Now that Cilium runs in our cluster, let’s put it to the test by applying some network policies to specify what traffic is allowed inside the cluster as well as ingressing/egressing.
:::
:::GlobalParagraph
The commonly used “default-deny-ingress” policy can be implemented with Cilium like this:
:::

:::BlogCode{.mb-5}
```docker
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: "deny-all-ingress"
spec:
  endpointSelector:
    matchLabels:
  ingress:
  - {}
```
:::

:::GlobalParagraph
Since the matchLabels key is empty, this will be applied to every endpoint, effectively locking down any ingress traffic within the cluster.
:::
:::GlobalParagraph
We need our services to communicate with one another, therefore we add a policy that specifically allows ingress traffic between two services.
:::
:::GlobalParagraph
A simple “ingress-allow” policy could look something like this:
:::

:::BlogCode{.mb-5}
```docker
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: "ingress-allow"
spec:
  endpointSelector:
    matchLabels:
      role: backend-api
  ingress:
  - fromEndpoints:
    - matchLabels:
        role: client
```
:::

:::GlobalParagraph
This network policy will allow all ingress traffic from endpoints with the label ```role: client``` and that connect to endpoints with the label ```role: backend-api```.
:::
:::GlobalParagraph
Moving up the [OSI model layers](https://en.wikipedia.org/wiki/OSI_model){.bs-link-blue}, we can also lock down HTTP methods and paths like this:
:::

:::BlogCode{.mb-5}
```docker
apiVersion: "cilium.io/v2"
kind: CiliumNetworkPolicy
metadata:
  name: "rule1"
spec:
  description: "Allow HTTP GET /api from app=client to app=api"
  endpointSelector:
    matchLabels:
      app: api
  ingress:
  - fromEndpoints:
    - matchLabels:
        app: client
    toPorts:
    - ports:
      - port: "80"
        protocol: TCP
      rules:
        http:
        - method: "GET"
          path: "/api"
```
:::

:::GlobalParagraph
This will allow incoming HTTP traffic from endpoints labeled with ```app: client``` to endpoints labeled with ```app: api```, as long as the HTTP method is GET, and the path is “/public”. Requests to ports other than 80 will be dropped, while other HTTP verbs and other paths will be rejected.
:::

:::GlobalTitle{:size="lg" .mb-5}
Using Cilium for observability
:::
:::GlobalParagraph
Cilium Hubble is a powerful observability tool that provides deep insights into the network traffic and security of a Kubernetes cluster. In this section, we will explore how to set up and use Hubble for observability.
:::

:::GlobalTitle{:size="md" :tag="h3" .mb-5}
Setting up Hubble
:::
:::GlobalParagraph
To use Hubble, we need to deploy it in our Kubernetes cluster as follows:
:::

:::BlogCode{.mb-5}
```docker
$ cilium hubble enable --ui
```
:::

:::GlobalParagraph
If we run “cilium status” again, we’ll see that Hubble is enabled and running.
:::
:::GlobalParagraph
To make use of the data that’s being collected, we install the Hubble CLI as described in the [documentation](https://docs.cilium.io/en/stable/gettingstarted/hubble_setup/#install-the-hubble-client){.bs-link-blue}. Once the installation is complete, we can verify Hubble API access by first creating a port forward for hubble and then using the Hubble CLI to inspect Hubble status and to query the API, like this:
:::

:::BlogCode{.mb-5}
```docker
$ cilium hubble port-forward&
$ hubble status
$ hubble observe
Apr  4 07:14:29.119: 10.244.0.166:37906 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK)
Apr  4 07:14:29.120: 10.244.0.166:41980 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, PSH)
Apr  4 07:14:29.121: 10.244.0.166:41980 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK, FIN)
Apr  4 07:14:29.121: 10.244.0.166:41980 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, FIN)
Apr  4 07:14:29.121: 10.244.0.166:41980 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK)
Apr  4 07:14:30.119: 10.244.0.166:41986 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: SYN)
Apr  4 07:14:30.119: 10.244.0.166:41986 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-stack FORWARDED (TCP Flags: SYN, ACK)
Apr  4 07:14:30.119: 10.244.0.166:41986 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK)
Apr  4 07:14:30.119: 10.244.0.166:37912 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: SYN)
Apr  4 07:14:30.119: 10.244.0.166:37912 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-stack FORWARDED (TCP Flags: SYN, ACK)
Apr  4 07:14:30.119: 10.244.0.166:37912 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK)
Apr  4 07:14:30.119: 10.244.0.166:37912 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK, PSH)
Apr  4 07:14:30.119: 10.244.0.166:41986 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK, PSH)
Apr  4 07:14:30.120: 10.244.0.166:37912 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, PSH)
Apr  4 07:14:30.120: 10.244.0.166:37912 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, FIN)
Apr  4 07:14:30.120: 10.244.0.166:37912 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK, FIN)
Apr  4 07:14:30.120: 10.244.0.166:37912 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8181 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK)
Apr  4 07:14:30.121: 10.244.0.166:41986 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, PSH)
Apr  4 07:14:30.121: 10.244.0.166:41986 (host) -> cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-endpoint FORWARDED (TCP Flags: ACK, FIN)
Apr  4 07:14:30.121: 10.244.0.166:41986 (host) <- cilium-test/echo-same-node-9f8754876-ns7tx:8080 (ID:2357) to-stack FORWARDED (TCP Flags: ACK, FIN)
```
:::

:::GlobalParagraph
If you like graphical user interfaces, you can also deploy [Hubble UI](https://docs.cilium.io/en/stable/gettingstarted/hubble_setup/#install-the-hubble-client){.bs-link-blue} to your cluster. Hubble UI gives you access to a graphical service map that can be used to visually inspect traffic within the cluster. For our example setup, Hubble UI looks like this:
:::

![hubble_ui](/img/blogs/hubble-ui.jpg){.object-cover .max-w-full .mb-6}

:::GlobalTitle{:size="lg" .mb-5}
Conclusion
:::
:::GlobalParagraph
In conclusion, Cilium offers a robust networking solution for Kubernetes, allowing users to enforce precise network policies and keep track of network activity in real-time. Its cloud native design and eBPF-based architecture make Cilium a top pick for users seeking advanced networking functionalities in their Kubernetes setups.
:::

:::GlobalTitle{:size="lg" .mb-5}
Going further
:::
:::GlobalParagraph
Cilium offers way more features than we can cover in this post, so here’s a short writeup of what else Cilium is capable of.
:::

:::GlobalTitle{:size="md" .mb-5}
Cluster Mesh
:::
:::GlobalParagraph
With [cluster mesh](https://docs.cilium.io/en/stable/network/clustermesh/){.bs-link-blue}, we can extend networking paths across multiple Kubernetes clusters, allowing endpoints in connected clusters to communicate with each other while also enforcing network policies.
:::

:::GlobalTitle{:size="md" .mb-5}
Service Mesh
:::
:::GlobalParagraph
Cilium [service mesh](https://docs.cilium.io/en/stable/network/servicemesh/){.bs-link-blue} aims to replace more traditional service mesh solutions like Linkerd. It has one key difference, though: While Linkerd relies on sidecar proxies to manage traffic between pods, Cilium service mesh uses eBPF on the node level to manage traffic, improving performance, reducing load and further decoupling the service mesh from the actual workloads.
:::

:::BlogRelatedPosts

:::
