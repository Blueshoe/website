---
src: '/blog/performance-comparison-gke-vs-eks'
img: '/img/blogs/performance-comparison-gke-vs-eks.jpg'
alt: 'Performance comparison: GKE vs. EKS'
preTitle: 'Container runtime performance'
title: "Performance comparison: GKE vs. EKS"
description: 'Why are we just assuming that managed K8s platforms perform solid over all important metrics? We benchmarked GKE vs EKS and here are the shocking results.'
date: '09.02.2023'
author:
  - Michael Schilonka
technology:
  - Kubernetes
productUpdates: []
topic:
  - Operation
---
The solid performance of managed Kubernetes platforms is generally regarded as a given and is hardly ever put into question. However, maybe there is a difference in how containers perform on different popular managed Kubernetes platforms. I wanted to take a deeper look and selected the two most popular Kubernetes services we use at Blueshoe for our clients: Amazon Elastic Kubernetes Service (EKS) and the Google Kubernetes Engine (GKE).
<!--more-->

![Performance comparison: GKE vs. EKS](/img/blogs/performance-comparison-gke-vs-eks.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalTitle{:size="lg" .mb-5}
EKS vs. GKE – and why does it matter?
:::
:::globalParagraph
According to [this statistic](https://www.statista.com/statistics/1230308/container-technology-orchestrator-use/){.bs-link-blue} from February 2020, 540 respondents answered the question ‘Which of the following container orchestrators do you use?’ with:
:::
:::GlobalBlock{.ul-disk .mb-5}
- 37% of all respondents use EKS
- 21% of the respondents use GKE
:::
:::globalParagraph
  Please bear in mind that the selection of multiple answers was possible, hence why the groups are not exclusive. The numbers have probably changed a bit since then, but it’s obvious that these two are very popular choices in the world of managed Kubernetes. The numbers also match the distribution of Kubernetes platforms that are under Blueshoe’s management to date.
:::
:::globalParagraph
  Naturally, we should start the container runtime performance analysis with these two solutions.
:::

:::globalTitle{:size="lg" .mb-5}
But why?
:::
:::globalParagraph
For one thing, it’s simply interesting to establish how these two big players perform against each other. On the one hand, you’ve got Amazon Web Services – the giant in the market of hyperscalers. And on the other hand, there is Google – the tech titan and pioneer of Kubernetes.
:::
:::globalParagraph
But more importantly, it always boils down to the costs. If you can get 10% more performance at comparable pricing, some might want to take advantage of Kubernetes’ portability. This is not about the ecosystem or potentially attached services (such as managed databases or storage), but rather the pure container runtime performance. I wanted to answer the question: ‘At which speed runs my code in a very standard Kubernetes cluster?’. And this is what I found:
:::

:::globalTitle{:size="lg" .mb-5}
The Benchmark Setup
:::
:::globalParagraph
On EKS, I created a Kubernetes cluster with the following specs:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Instance type: t3.xlarge
- Region: eu-west-1
- K8s version: 1.23
- OS: Amazon Linux 2
- Container runtime: docker
- Node VM pricing: 0.1824 USD per hour
:::
:::globalParagraph
  To match these parameters as accurately as possible, I created a Google Kubernetes Engine cluster with the following specs:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Instance type: e2-standard-4
- Region: europe-north1-a
- K8s version: 1.23.14-gke.401
- OS: Container-Optimized OS with containerd (cos_containerd)
- Container runtime: containerd
- Node VM pricing: 0.147552 USD per hour
:::
:::globalParagraph
  Both machine types incorporate a 4 vCPU machine with 16 GB of RAM based on an Intel processor. The Kubernetes node running the test was dedicated to the test pod and only filled with other ‘default’ pods of that managed Kubernetes offering. I did not use any special configurations, I simply ordered a cluster with the defaults set.
:::

:::globalTitle{:size="lg" .mb-5}
How to benchmark the container runtime
:::
:::globalParagraph
One of the main goals of running a performance analysis is to enable very easy replication. Luckily, we’re talking about Kubernetes, which means that it’s just a matter of writing Kubernetes configs and applying them to the cluster. Yet, a few things are still important:
:::
:::GlobalBlock{.ul-disk .mb-5}
- chose comparable Kubernetes node instance types, make the comparison as fair as possible
- do not deploy the benchmark workload next to other containers
- use the same Kubernetes version
- note down any important differences between the contestants
:::
:::globalParagraph
  Unfortunately, it wasn’t exactly easy to find a good benchmark tool that can serve the needs to benchmark the following parts:
:::
:::GlobalBlock{.ul-disk .mb-5}
- the CPU
- the memory (RAM)
- the container filesystem (not the attached volumes, this is about the native filesystem)
:::

:::globalParagraph
A quite commonly used tool with only a few known weaknesses is [sysbench](https://github.com/akopytov/sysbench){.bs-link-blue}. With about 5k stars on GitHub and a rather large and active community, it may be suitable for my requirements. A big plus is the extensibility and the many built-in complex benchmark types, such as database benchmarks etc.
:::
:::globalParagraph
Luckily, someone at [Severalnines](https://severalnines.com/blog/){.bs-link-blue} has created a container image for sysbench already and made it public. So the benchmarking tool is ready.
:::
:::globalParagraph
To simplify this process and make it easily reproducible, I started a little test runner for sysbench. This tool schedules the benchmark in the cluster (with a node selector), waits for the job to complete, parses the result and compiles a file with the test results.
:::
:::globalParagraph
[I made the code public here](https://github.com/Schille/k8s-perf){.bs-link-blue}. It is based on Python and Poetry. If you do have Poetry installed, you can simply run poetry run benchmark <node selector> and it will benchmark the capacity of the CPU, memory and file system.
:::

:::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR KUBERNETES PODCAST
::::
::::GlobalTitle{:tag="h3" .mb-6}
TftC E1: Kubernetes development environments
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
The Results
:::
:::globalParagraph
To start with the summary, it turned out that EKS provides higher performance across all metrics. The file IO performance in particular is, frankly, poor with GKE. We are talking about 10% less performance on the CPU, 9% less on memory and a huge gap in file operations for a default Kubernetes cluster. Let’s take a deeper look at the results.
:::

:::globalTitle{:size="md" .mb-5}
CPU Performance
:::
:::globalParagraph
The sysbench command for running the CPU test is: sysbench --test=cpu --time=60 run
:::
:::globalParagraph
This command executes the CPU benchmark for one minute.
:::

:::globalTitle{:size="md" .mb-5}
1\) GKE vs EKS: CPU events per second
:::
:::globalParagraph
   sysbench captures the executed loops (aka events) calculating all prime numbers up to a certain parameter in a given timeframe. It indicates how much CPU time was granted to the process and how fast the calculation was in general.
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-1.jpg){.object-cover .w-max-full .mb-5}
:::globalParagraph
   The result shows a shocking difference between EKS and GKE of about 11% more events on EKS. Since you do pay for the time of your Kubernetes node, getting more calculations done in that time is essential.
:::

:::globalTitle{:size="md" .mb-5}
2\) GKE vs. EKS: CPU latency
:::
:::globalParagraph
Sysbench records the CPU latency for a requested event. It aggregates the results and returns the minimum, maximum, average and 95th percentile values.
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-2.jpg){.object-cover .w-max-full .mb-5}

:::globalParagraph
As you can see, the performance of GKE’s containerd-based runtime is not significantly slower than the docker-based runtime of EKS. Yet, the difference in the 95th percentile is about 2%. This can be attributed to the rather short runtime of the benchmark and other factors.
:::

:::globalTitle{:size="md" .mb-5}
Memory Performance
:::
:::globalParagraph
The sysbench command for running the memory (RAM) test is: sysbench --test=memory --memory-total-size=500G run
:::
:::globalParagraph
This command writes 500 Gigabytes to the main memory and captures the speed of writing.
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-3.jpg){.object-cover .w-max-full .mb-5}

:::globalParagraph
Again, GKE is roughly 9% slower than the container runtime of EKS when it comes to writing a lot into the main memory. On an EKS cluster, your code can potentially write with 4.25 Gigabytes per second into RAM, while on GKE, your container can only shovel with 3.87 Gigabytes per second. However, compared to my laptop, which runs at about 6.36 Gigabytes per second, neither result is overwhelming
:::

:::globalTitle{:size="md" .mb-5}
GKE vs EKS: File I/O Performance
:::
:::globalParagraph
The filesystem performance results paint a particularly dramatic picture. The sysbench command for running the file test is:
:::

:::GlobalBlock{.ul-disk .mb-5}
- sysbench --test=fileio --file-num=5 --file-total-size=5G prepare
- sysbench --test=fileio --file-total-size=5G --file-num=5 --file-test-mode=rndrw --time=100 --max-requests=0 run
:::

:::globalTitle{:size="md" .mb-5}
1\) GKE vs EKS: File throughput
:::
:::globalParagraph
The file throughput benchmark simply writes a file to the filesystem and reads an artificial file from the filesystem.
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-4.jpg){.object-cover .w-max-full .mb-5}

:::globalParagraph
The write and read performance of a container running on EKS is about 95% better on read operations and 94% better on write operations. This metric could become relevant if an application writes and reads files from temporary storage in the container.
:::

:::globalTitle{:size="md" .mb-5}
2\) File input/output latency
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-5.jpg){.object-cover .w-max-full .mb-5}

:::globalParagraph
The file latency is almost on par for both platforms. Personally, I’d not put too much importance on the maximum latency (this can vary a lot per run), but rather look at the 95th percentile. With this metric, EKS outperforms GKE by an order of magnitude.
:::

:::globalTitle{:size="md" .mb-5}
3\) File operations per second
:::
![kubernetes](/img/blogs/performance-comparison-gke-vs-eks-6.jpg){.object-cover .w-max-full .mb-5}

:::globalParagraph
The poor file operations per second on GKE are just a consequence of the results before. Please keep in mind that these filesystem performance evaluations are executed on the container’s native filesystem. There is no additional storage class attached to the pod running the benchmark.
:::

:::globalTitle{:size="lg" .mb-5}
Closing Remarks
:::

:::globalParagraph
I was a bit shocked about the results after comparing these two managed Kubernetes platforms and their container runtime performance. As you can see, the price of the GKE node is about 22% lower (in these regions) than the counterpart at AWS EKS. It compensates at least a bit for the difference in performance, but having these facts at hand may influence the decision of where to place a containerized workload in the future.
:::
:::globalParagraph
When trying to comprehend the results, I found Amazon’s Nitro system, a hardware technology that Amazon Web Service developed for their own cloud computing. Are these results proof of the promised performance gains? Does the docker-based container runtime on AWS play a part in this?
:::
:::globalParagraph
At Blueshoe, we love to work with the Google Cloud Platform, as we generally consider it more user-friendly and clear compared with the AWS console. Performance considerations are indeed very important, but there are other essential criteria, too, when it comes to selecting a managed Kubernetes offering. Also, please read this benchmark with a grain of salt, as there are plenty of configurations one may choose that can have a huge impact on the overall system performance.
:::
:::globalParagraph
Feel free to [follow me on LinkedIn](https://www.linkedin.com/in/michael-schilonka/){.bs-link-blue} or join our [discord](https://discord.gg/eQBkQwYAYy){.bs-link-blue}.
:::




:::BlogRelatedPosts{:url='["/blog/managed-vs-unmanaged-kubernetes", "/blog/container-orchestration-options-comparison", "/blog/strategies-for-slim-docker-images", "/blog/local-kubernetes-development", "/blog/evolution-of-application-development-to-cloud-native"]'}

:::
