---
src: '/blog/docker-vs-podman'
img: '/img/blogs/docker-vs-podman.jpg'
alt: 'Docker vs. Podman'
preTitle: 'A critical comprehension for Development and Production'
title: "Docker vs. Podman"
description: 'Read here an overview of what each tool is and why you might want to choose one over the other respectively which tool may be best for your individual needs.'
date: '13.02.2023'
author:
  - Michael Schilonka
technology:
  - Kubernetes
productUpdates: []
topic: []
---
In this article, we'll compare Podman and Docker to see how they stack up against each other. We'll start with an overview of what each tool is and why you might want to choose one over the other. Then, we'll dive into the details of what makes each tool unique before coming to our conclusion about which one is best for your needs: Podman or Docker!
<!--more-->

![Docker vs. Podman](/img/blogs/docker-vs-podman.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="What we are going to look at in this post:"}

:::

:::globalTitle{:size="lg" .mb-5}
What is Docker in 2023?
:::
:::globalParagraph
Docker is a long-time player in the container world, and it's been around since 2013. If you've been following the industry for some time, you surely have heard of Docker before, or even used it yourself!
:::
:::globalParagraph
For a few years now, the company has been focusing on developer experience and making sure that containers can be used effectively by developers at all stages of their application lifecycle. It comes with a rich feature set of operating containers in production, too. The company behind the technology, Docker Inc., also [made a fantastic business pivot and is now very profitable](https://twitter.com/romeensheth/status/1597808112135651329){.bs-link-blue} with its subscription-based model. Relying on Docker, as a commercially backed product, might be a robust decision for the future.
:::
:::globalParagraph
Given that Docker has been on the table for a long time, it also supports many features, such as the [rootless mode](https://docs.docker.com/engine/security/rootless/){.bs-link-blue} (more on this later). This ensures that users don't need to run the Docker daemon with root privileges on their servers anymore. That makes it easier for everyone, as you can use containers without having to worry about having privileged access or the security issues that you would otherwise encounter as a root user.
:::
:::globalParagraph
Docker provides very comprehensive documentation for virtually any topic that comes up when working with containers.
:::

:::globalTitle{:size="lg" .mb-5}
What is special about Podman?
:::
:::globalParagraph
Podman is a relatively new container runtime, but it has already become part of many Linux standard software repositories. You don’t need to add 3rd party sources to install it on your host. It is sometimes available on a fresh installation already.
:::
:::globalParagraph
Podman runs daemon-less and has a development experience that feels very close to Docker's, i.e., most of the commands in the Podman CLI are identical to the Docker CLI. Podman Desktop, a graphical user interface for Podman, also looks almost identical to Docker Desktop.
:::
:::globalParagraph
The documentation of Podman is, frankly, a bit awful and lacks certain topics entirely.
:::
:::globalParagraph
The following figure shows a graph from Google Trends which clearly shows the growing interest in Podman over the last few years.
:::
![docker-vs-podman](/img/blogs/docker-vs-podman-1.jpg){.object-cover .max-w-full .mb-5}
:::globalParagraph
Podman is a community-driven open-source project that is sponsored by Red Hat.
:::

:::globalTitle{:size="lg" .mb-5}
What sets Podman apart from Docker?
:::
:::globalParagraph
Podman and Docker share many similar characteristics. Both are tools for managing containers on Linux, built on the same kernel features (such as namespaces and cgroups) that enable them to run processes in isolation from one another (‘sandboxing’). The user interface is almost identical, which makes migrating between the two very simple and practical. You can even stick to most of the container images you already have (as long as they are compliant with the [OCI container image format](https://github.com/opencontainers/image-spec/blob/main/spec.md){.bs-link-blue}).
:::
:::globalParagraph
Let’s have a closer look at the differences between Podman and Docker.
:::

:::globalTitle{:size="lg" .mb-5}
Daemon – or no daemon
:::
:::globalParagraph
Docker runs a [daemon process](https://man7.org/linux/man-pages/man7/daemon.7.html){.bs-link-blue} (‘docked’) on the host system which is usually equipped with root privileges. What is the daemon process doing in the depths of the system? Well, basically everything that is needed to manage containers on the host: oversee running container instances, manage the container images, provide storage volumes and much more. It creates container networks on request and deals with all the low-level container stuff, especially [containerd](https://www.docker.com/blog/what-is-containerd-runtime/){.bs-link-blue} and [runc](https://github.com/opencontainers/runc){.bs-link-blue}. The daemon process creates an API-interface using an HTTP protocol to expose its functionality to all kinds of end-user interfaces, including the [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli/){.bs-link-blue}. Depending on the platform, the Docker interface is materialised through a Unix socket, named pipe or TCP port (with lots of options to make it secure). The Docker daemon runs with very low resource consumption.
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
No daemon with podman
:::
:::globalParagraph
Podman, on the other hand, does without the daemon process (‘daemonless container engine’). The container management happens from within the client itself. Hence, calling Podman with a user other than root will only allow operations that this user is authorised to perform. Naturally, this limits the possibilities for the user – but also for intruders that capsize a container from within.
:::
:::globalParagraph
So from a security perspective, the ‘rootless’ phenomenon is a pretty good idea. And yet, it might eventually come to a quick end. We will look at this more closely in the next section.
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
Podman for production - a little more tricky
:::
:::globalParagraph
A more crucial drawback of not running a daemon process becomes apparent when trying to run Podman for production workloads. For example, with Docker, you can simply specify a ‘[restart policy](https://docs.docker.com/config/containers/start-containers-automatically/#use-a-restart-policy){.bs-link-blue}’ for containers and be sure they are restarted in the case of a crash. Podman does not run a process monitor and thus must delegate this activity somewhere else: enter our good ol’ friend systemd. Although [systemd](https://en.wikipedia.org/wiki/Systemd){.bs-link-blue} is very common and probably well-understood by the majority of system administrators, it’s still a very complex additional solution that comes at its own costs. Podman supports the user by generating the systemd units (the configuration to let systemd know how to probe and manage a process), but this is a completely different ecosystem. Coming from Docker, this could mean a certain ramp-up time to get everything running with the desired behaviour. However, another plus for systemd is that a unit can be run with lowered user privileges just as well.
:::
:::globalParagraph
Be it Docker or Podman – if the production deployments are to be taken seriously, a daemon process will ultimately have to be involved somewhere in either case. And of course, if you want to use the Podman REST API, [there is a service process (daemon) for it](https://github.com/containers/podman/tree/main/pkg/bindings){.bs-link-blue}.
:::

:::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
::::GlobalTitle{:tag="h3" .mb-6}
Tools for the Craft - Edition 1: Kubernetes development environments
::::
::::globalParagraph{:font-size="lg" .mb-4}
Check out the first edition of our Kubernetes podcast "Tools for the Craft: Navigating the Kubernetes ecosystem" here. Michael and Robert are talking in depth about the ins and outs of local Kubernetes development and also provide some real coding examples.
::::
::::globalParagraph{:font-size="lg" }
More editions of our podcast can be found here:
::::
::::GlobalButton{:url="/podcast" :label="Show more podcast editions" :color="green"}
::::
:::

:::globalTitle{:size="lg" .mb-5}
Rootful and rootless
:::
:::globalParagraph
A highly useful (and sometimes underestimated) feature of Docker are overlay networks. These are like ‘real’ (virtual) networks on a host machine. Docker networks allow all kinds of complex connection topologies, with routes and NATs and IP pools etc. That is particularly useful in situations where it is desired to meet a certain production environment and to loosely couple different services that make up an application. In fact, each container runs within its own namespace in the Linux kernel, making it possible to create resource constraints for every container, network settings and so on. One of the basic ideas of segregating the Linux kernel into multiple spaces was process security. At the moment, most of this is only possible with root privileges. Yet, [sandboxing with namespaces is possible with unprivileged users](https://lwn.net/Articles/540087/){.bs-link-blue}, too.
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
How it looks in reality
:::
:::globalParagraph
Important features disappear when running [Docker in rootless mode](https://docs.docker.com/engine/security/rootless/#known-limitations){.bs-link-blue}, and it’s the same with Podman. I found out that there is an option to run Podman rootful in order to gain these capabilities, [especially proper networking](https://github.com/containers/podman/blob/main/docs/tutorials/basic_networking.md){.bs-link-blue}, too.
:::
:::globalParagraph
In practice, the Podman development team created a, in my humble opinion, questionable workaround for the missing networking by introducing the ‘pod’ concept as an alternative.
:::
:::globalParagraph
Using Podman, you can compile multiple containers in a pod. ‘Pod’ is the name for a higher-level organisation of kernel namespaces. All containers sharing the same pod are in fact in the same kernel namespace(s). Most importantly, they share the same [networking namespace](https://man7.org/linux/man-pages/man7/network_namespaces.7.html){.bs-link-blue}. That makes it possible for the container processes to talk to each other via TCP sockets. For example, you can run one process on port localhost:8000 and another process on localhost:8001. Both processes will be able to communicate with each other using the TCP socket on localhost. This would not be possible for two separate podman run … (or with docker run …), as they are separated from each other by default. Using the pod concept will ultimately remove the need for networking entirely, and thus the need for a rootful operation.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
The Podman "Infra Container"
:::
:::globalParagraph
By the way: each Podman pod gets a special container called ‘Infra container’. It does nothing but fall asleep once the pod is created. All attributes defining the pod are actually assigned to this special container, including port bindings, kernel namespaces, resource constraints and so on. Once the pod is created, you can never change these attributes again. Let’s say you create a new pod, and add a container later on that binds a new port with the host – Podman will not be able to do this. You have to recreate the entire pod with the new port binding (or other attributes, respectively).
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
Privileges vs. capabilities
:::
:::globalParagraph
Running any process with dropped privileges comes with considerable cuts in capabilities. That makes sense, especially to prevent exploited container processes to perform system modifications or access other processes. Dropping the execution privileges is generally preferable, and I am taking this topic very seriously. However, trading in the sandbox mechanism in favour of missing network capabilities introduces another class of system vulnerabilities ([we experienced this a lot in the past](https://en.wikipedia.org/wiki/Privilege_escalation){.bs-link-blue}).
:::

:::globalTitle{:size="lg" .mb-5}
Podman pods and Kubernetes
:::
:::globalParagraph
The Podman team claims working with Podman pods will make the transition to Kubernetes much easier. In fact, you can create a pod with Podman (putting in all containers you need; set certain attributes) and automatically generate a valid Kubernetes YAML file out of it. And yes, the technical foundation is the same. But still, who asked for that feature?
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
The monolithic pod
:::
:::globalParagraph
[I found this tutorial](https://developers.redhat.com/blog/2019/01/15/podman-managing-containers-pods){.bs-link-blue} that suggests putting a web server, an application server and the database into one Podman pod. It would be handy if I wanted to operate this with Podman on a server host. But here is the point. Who, with an experienced background in Kubernetes, would ever apply such a pod definition in a Kubernetes environment? I get one monolithic pod containing everything that makes up an application. What about scalability, resiliency and, of course, security? A serious Kubernetes deployment employs abstract workload definitions declared in ‘Deployments’, ‘StatefulSets’ and other higher-level Kubernetes objects. I never saw this pattern in the real world (which does not mean it doesn’t exist). Applying bare pods does not seem to be a practical approach for Kubernetes at all. If it is used to construct real Kubernetes structural deployment patterns, such as sidecars or adapters, I would be very happy, though.
:::

:::globalTitle{:size="sm" :tag="h3" .mb-5}
Unfulfilled promises
:::
:::globalParagraph
Hence, I find this feature misleading, especially with the communication and documentation of Podman. No, I cannot define a Podman pod on a local machine and migrate it that easily to production Kubernetes. On Kubernetes, we use strong networking mechanisms such as load balancers, IP routing, network policies and with it, loose coupling.
:::

:::globalTitle{:size="md" .mb-5}
Conclusion
:::
:::globalParagraph
I hope this article has given you a better understanding of the differences between Podman and Docker. As you can see, there are many similarities between the two tools, but they also have some key differences that could make one option more suitable than the other, depending on your use case. While Podman is still in its early stages of development, it has already shown signs of being a worthy alternative to Docker by providing a simpler user experience while still maintaining compatibility with existing images from other registries like Docker Hub or Google Container Registry (GCR). I look forward to seeing how these tools evolve over time as they both continue to add new features. Be sure to have a look at [Podman Desktop](https://podman-desktop.io/){.bs-link-blue}, too. I am not sure if Podman is also going the developer experience (‘DX’) path, just like Docker, or if are they trying to operate production servers. Let me know what you think.
:::
:::globalParagraph
Feel free to [follow me on LinkedIn](https://www.linkedin.com/in/michael-schilonka/){.bs-link-blue} or join our [discord](https://discord.gg/eQBkQwYAYy){.bs-link-blue}.
:::


:::BlogRelatedPosts{:url='["/blog/container-orchestration-options-comparison", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/strategies-for-slim-docker-images", "/blog/local-kubernetes-development", "/blog/evolution-of-application-development-to-cloud-native"]'}

:::
