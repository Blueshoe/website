---
src: '/blog/service-availability-using-kubernetes-probes'
img: '/img/blogs/kubernetes.jpg'
alt: 'kubernetes'
preTitle: 'Enhancing service availability'
title: "Service availability using Kubernetes probes"
description: 'Maximize service availability with Kubernetes probes. Enhance user satisfaction and transform your application into a resilient service.'
date: '20.07.2023'
author:
  - Christian Busch
technology: []
productUpdates: []
topic: []
---
Within this blog post, I discuss the benefits and necessity of using application feedback to tackle basic aspects of service availability. The framework used to elaborate the concepts is Kubernetes. However, the underlying ideas are transferable and not limited to Kubernetes. Furthermore, while the use of probes (health check) allows us to tackle basic availability aspects, there are many more aspects of (high) availability which are not mentioned within this article.
<!--more-->

![my image](/img/blogs/kubernetes.jpg){.object-cover .max-w-full .mb-6}

:::BlogNavigationCard{:title="In this blog post we will cover"}

:::

:::GlobalTitle{:size="lg" .mb-5}
How to damage user satisfaction and destroy value?
:::
:::GlobalParagraph
What a simple question… offer a service that isn't always available. How do you feel when you sit down after a long exhausting day to listen to a podcast or watch a movie with your friends/family and you see an error message? Or, the homepage doesn't load at all? You are certainly not happy. Worse yet, you have to finish work for an important customer within the next hour and the services required for that are temporarily not responding? Well, you might lose an order, recurring customer, or long standing business relationship. It doesn't matter that the services were available all week long. The moment you needed them, they were not.
:::
:::GlobalParagraph
Clearly, availability matters because it directly impacts user satisfaction. Moreover it ensures business continuity, reliability, strengthens trust, and is the foundation for compliance topics, scalability and growth, as well as operational efficiency. But how do you check if your service is available?
:::

:::GlobalTitle{:size="lg" .mb-5}
Without feedback you know nothing
:::
:::GlobalParagraph
Even if you have to interact with a single instance of an application, it can be quite difficult to correctly infer its availability status. Has the application started? Is it ready to process my next request? Is it still alive after not using it for weeks? Without feedback, your only option is to send your request and hope that everything goes well. This is clearly no way to use or run a serious application.
:::
:::GlobalParagraph
However, it is rarely the case that an application provides no feedback at all. For web applications, HTTP requests are answered by corresponding responses that contain information provided by the application or other infrastructure components in between. So we know something! But is this information enough to make valuable statements about availability? I would argue that this depends to a large extent on the application itself and even more on your quality requirements. At one point, HTTP status codes do not cut in anymore.
:::

:::GlobalTitle{:size="lg" .mb-5}
From Application to Service Availability
:::
:::GlobalParagraph
At the latest when you start scaling your application into a full fledged service, it makes sense to leverage the monitoring concepts provided by your orchestration framework to gain insights into the health and readiness of your application. Kubernetes uses probes to ensure the liveness and readiness of containers in pods. Depending on the status of the probes, pods are replaced or restarted, traffic is routed to endpoints capable of handling requests, and more. All you have to do is to add some lines of yaml to your resource definitions.
:::
:::GlobalParagraph
Wait a second! We just jumped from scaling an application to writing yaml files. Welcome to kubernetes :D . Noone said Kubernetes doesn’t have a (steep) learning curve, however, it makes life easier. Especially from the perspective of a developer or infrastructure point of view. Most people with a more technical background can see that it's not a trivial task to implement (and maintain!) the availability functionalities provided by Kubernetes out of the box. And even as a non technical person, it is possible to understand the concepts - which is often sufficient. For probes, one might even argue that everyone can understand the code. It is quite verbose and self explanatory:
:::

:::BlogCode{.mb-5}
```bash
...
   livenessProbe:
      exec:
        command:
        - cat
        - /tmp/healthy
      initialDelaySeconds: 5
      periodSeconds: 5
...
```
:::

:::GlobalParagraph
Yes, this is the definition of a liveness probe which executes a command - something with “cat” and “/tmp/healthy” - after an initial delay of 5 seconds every 5 seconds (By the way, this example comes directly out of the official kubernetes documentation).
:::
:::GlobalParagraph
So how do I transform my application into a service with basic availability mechanisms using probes? Summarised in [Kubernetes](/blog/kubernetes-explained-for-non-developers/){.bs-link-blue} terms, you have to do the following: Containerize your application - which you should have done anyway. Create a deployment based on the applications container. Add the corresponding probe types to the container (see next section). And finally, expose the deployment using a service.
:::

:::GlobalTitle{:size="lg" .mb-5}
Different probes provide different feedback
:::
:::GlobalParagraph
There are three different types of probes in Kubernetes, which provide different kinds of feedback from the application. Thus, they serve different use cases.
:::

:::GlobalTitle{:size="md" :tag="h3" .mb-5}
Liveness probe
:::
:::GlobalParagraph
The liveness probe determines whether a container is running properly or not. It periodically checks the state of the container and restarts it if it is unresponsive or in a faulty state. This ensures that the application continues to run even if it may have crashed or encountered a temporary error.
:::

:::GlobalTitle{:size="md" :tag="h3" .mb-5}
Readiness probe
:::
:::GlobalParagraph
The readiness probe checks if a container has completed its initialization and is ready to serve requests. By doing so, it enables Kubernetes to ensure that only healthy containers receive traffic.
:::

:::GlobalTitle{:size="md" :tag="h3" .mb-5}
Startup probe
:::
:::GlobalParagraph
Startup probes determine whether a container has started successfully and is ready to handle requests. In contrast to the liveness probe, it only runs during the startup phase of a container, where the liveness probe is not active yet.
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
Probes use case example
:::
:::GlobalParagraph
Let us assume that you have got a legacy Java application (built as a rather huge monolith), which has been containerized into a single container for you, in order to migrate it into the cloud (which is using Kubernetes). Your task is to provide this application as a service within your regional branch of the organisation. As you are somehow responsible for the service now, you want to ensure high user satisfaction and thus care about availability. Based on the sections above, you certainly know how to approach the problem.
:::
:::GlobalParagraph
First, the containerized application has to be transformed into a deployment which is exposed by a service. As a bigger monolithic Java application might not start instantly, a startup probe is added to the Java application container in order to get feedback about the application startup process. Furthermore, you want to add a readiness probe so that the service can distribute traffic accordingly to application instances which are ready to process it. Lasty, you definitely want a liveness probe, too, in order to continuously validate the state of your application. Yes, you most likely want all three types of probes in this case.
:::
:::GlobalParagraph
As you experience more and more usage of your service, you scale up the replications of your application using the replication count of the deployment. However, in order to keep costs lower, you think about applying autoscaling, which you have read about in another blog post. Luckily, Kubernetes autoscaling can utilise the existing probes to determine the scaling behaviour of the application. At this point, we definitely left the scope of this blog article. But as I mentioned in the beginning, availability is more than just probes.
:::

:::GlobalTitle{:size="lg" .mb-5}
Unlocking application availability: harnessing Kubernetes probes for enhanced user satisfaction
:::
:::GlobalParagraph
The concept of probes within Kubernetes provides us with a comfortable way to gain feedback from applications which allows us to tackle basic availability issues. While I did not comment on technical details on how probes communicate with the application (commands, HTTP, TCP, or gRPC), by now you should have understood the overall concept and importance of probes and be able to start using them to achieve higher availability. Certainly there will be additional technical challenges in order to provide the endpoints used by the probes within your application. These, however, highly depend on the application and may even not be required to be handled by yourself. And if you are confronted with them, there is no lack of documentation. Therefore, I encourage you to start using kubernetes probes to tackle basic availability issues in order to increase user satisfaction.
:::

:::BlogRelatedPosts{:url='["/blog/kubernetes-explained-for-non-developers", "/blog/local-kubernetes-development", "/blog/managed-vs-unmanaged-kubernetes", "/blog/container-orchestration-options-comparison", "/blog/kubernetes-community-days-munich-2023"]'}

:::
