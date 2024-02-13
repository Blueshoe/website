---
title: 'Migration to Kubernetes with our expert help'
description: 'We help you plan and implement your Kubernetes migrations and moving your legacy applications into the cloud native sphere.'
---

::GlobalWrapperSections

:::GlobalSectionWithBackgroundImage{:src="/img/services/cloud_native_development_header.svg"}
::::GlobalPageTitle{.mb-6}
Migration to Kubernetes
::::
::::globalParagraph
Setup your architecture for the future with microservices
::::
:::

:::GlobalServicesNavigationCard

:::

:::GlobalCardWithBackgroundImageSection{data-title="Get help with your Kubernetes migration" :src="/img/services/blue_shoes-32.jpg" :isButton=true  :width="md:w-2/3"}
::::GlobalPreTitle{.mb-4}
GO THE CLOUD NATIVE WAY WITH KUBERNETES AND OUR HELP
::::
::::GlobalTitle{.mb-6}
We help with your Kubernetes migration
::::
::::GlobalParagraph
Getting your legacy applications and monoliths ready for a cloud native future can seem like a daunting task. But don't worry, we have done this a lot in the past and know the ins and outs. Let us help you planning and implementing your migration strategy and embrace a cloud native future.
::::
#button
::GlobalButton{:url="/contact" :label="Contact us"}
::
:::

:::GlobalListCardSliderSection{:bg="bg-bs-gray" :dotColor="black" :numberCards=5 :isButton=true data-title="Why should you migrate to Kubernetes?"}
::::GlobalPreTitle{:color="text-bs-green" .mb-4}
REAP WHAT YOU SOW
::::
::::GlobalTitle{.mb-6}
Why should you migrate to Kubernetes?
::::
::::GlobalParagraph{.mb-6}
Kubernetes is an open-source container-orchestration system for automating deployment, scaling, and management of containerized applications. Companies migrate to Kubernetes for a number of reasons, including:
::::
#card1
::GlobalListCardWithImage{:src="/img/global/icons/cube.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Scalability
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
Improved scalability and availability: Kubernetes makes it easy to scale applications up or down as needed. It also provides high availability by automatically restarting failed containers and scheduling new ones on different nodes in the cluster.
:::
::
#card2
::GlobalListCardWithImage{:src="/img/global/icons/workflow.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Streamlining
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
Streamlined deployment process: With Kubernetes, you can deploy applications quickly and reliably by using pre-defined configurations stored in YAML files. This eliminates the need for manual configuration changes each time you need to deploy a new version of your application.
:::
::
#card3
::GlobalListCardWithImage{:src="/img/global/icons/cyber-security.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Security
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
Increased security: Kubernetes provides built-in security features such as role-based access control (RBAC) and network policy enforcement that help protect your applications from malicious attacks and unauthorized access.
:::
::
#card4
::GlobalListCardWithImage{:src="/img/global/icons/cost_1.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Costs
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
By running multiple applications on the same host with Kubernetes, companies can reduce their infrastructure costs by eliminating the need for dedicated hardware for each application.
:::
::
#card5
::GlobalListCardWithImage{:src="/img/global/icons/handschellen.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Vendor dependence
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
No vendor lock-in: a well set up Kubernetes implementation puts you in the position to switch between vendors with relative ease and therefore minimizes your risk exposure with regards to the dependence on your vendor.
:::
::
#button
::GlobalButton{:url="https://meetings.hubspot.com/hannes/kubernetes-discussion" :label="Book a free video consultation" :target="_blank"}
::
:::

:::GlobalSimpleSection{:bg="bg-white" :isButton=true data-title="Types of migrations"}
::::GlobalPreTitle{.mb-3 .sm:px-8 .md:px-20 .xl:px-0}
LOOKING AT THE EMERGENCE OF DEVELOPMENT PLATFORMS
::::
::::GlobalTitle{.mb-6 .sm:px-8 .md:px-20 .xl:px-0}
Types of Kubernetes Migrations
::::
::::GlobalParagraph{.mb-4 .sm:px-8 .md:px-20 .xl:px-0}
We want to migrate our production and staging/testing systems to Kubernetes (K8s) and have developers develop with private or individual Kubernetes clusters. Check out this blog post for an [example of local development with Kubernetes.](/blog/local-kubernetes-development){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} Depending on the development process, existing projects may need to be prepared before migration. We'll look at three example projects that differ in development procedure and hosting: one developed locally using Vagrant, two using Docker images, and hosted with either Docker Compose or Kubernetes. The goal is for all three projects to appear both in development and operating under the stage ‘Container-Orchestrated’.
::::
::::GlobalParagraph{.mb-4 .sm:px-8 .md:px-20 .xl:px-0}
The following graphic illustrates the temporal development of development and hosting systems, we can clearly assign our example projects but will ignore the first stage, "Bare Metal".
::::
![unikube dpope Infographic](/img/services/unikube_dpope-Infographic.jpg){.w-full .mb-6 .sm:px-8 .md:px-20 .xl:px-0}
::::GlobalTitle{:size="lg" :tag="h3" .mb-6 .sm:px-8 .md:px-20 .xl:px-0}
Example 1: Local development using Vagrant
::::
::::GlobalParagraph{.mb-4 .sm:px-8 .md:px-20 .xl:px-0}
Vagrant was developed to simulate the production environment in a virtual machine. Now, with Cloud Native, applications and their environment variables are put into containers. To migrate to Docker, a Dockerfile must be created. It's important to consider which parts of the application can be subdivided into individual services. This prevents the application from becoming a monolith. For example systems like a databank or a cache should not end up in the Dockerfile but should instead be configured as individual services.
::::
::::GlobalParagraph{.mb-6 .sm:px-8 .md:px-20 .xl:px-0}
Helm charts should be created for all required services, which generate K8s resources. Finally, the development process must transition to Kubernetes. Developers can use local clusters simulated by k3d, microk8s or minikube, or remote clusters only used by one developer.
::::
::::GlobalTitle{:size="lg" :tag="h3" .mb-6 .sm:px-8 .md:px-20 .xl:px-0}
Example 2: Local development and hosting with Docker Compose
::::
::::GlobalParagraph{.mb-6 .sm:px-8 .md:px-20 .xl:px-0}
Our second project uses Docker Compose for development and hosting of the production system. We have already thought thoroughly about the different services the application will need and have Dockerfiles and a Docker-Compose.yaml to define the services needed. The main part of the migration consists of the creation of the Kubernetes configuration files. To create Kubernetes configs, we use Helm charts for easier maintenance in larger projects. Alternatively, we can use the kompose command to convert the Docker-Compose.yaml into manifest files. Finally, we transition the local development process to Kubernetes.
::::
::::GlobalTitle{:size="lg" :tag="h3" .mb-6 .sm:px-8 .md:px-20 .xl:px-0}
Example 3: Local development via Docker Compose, hosting via Kubernetes
::::
::::GlobalParagraph{.mb-6 .sm:px-8 .md:px-20 .xl:px-0}
With this project, we have already subdivided our services and have one or several Dockerfiles. For local development, Docker Compose is used while hosting takes place via Kubernetes. The only migration step is transitioning the local development process to Kubernetes. The production environment for the local development has to be simulated in the Docker-Compose.yaml. This does require a certain amount of extra effort and creates the problem that the local environment doesn’t quite match the production environment. This means that unexpected problems or side effects can occur during deployment."
::::
::::GlobalTitle{:size="lg" :tag="h3" .mb-6 .sm:px-8 .md:px-20 .xl:px-0}
Challenges during migration
::::
::::GlobalParagraph{.mb-6 .sm:px-8 .md:px-20 .xl:px-0}
For the migration, a few challenges need to be overcome. These include the transition to local development processes and any additional tools that developers must master. An operations specialist with Kubernetes knowledge is needed to develop Helm charts.
::::
::::GlobalTitle{:size="md" :tag="h4" .mb-6 .sm:px-8 .md:px-20 .xl:px-0}
Obstacles from a developers point of view:
::::
::::GlobalBlock{.ol-decimal .mb-4 .ml-4 .sm:px-8 .md:px-20 .xl:px-0}
1. Learning how to use <a href="https://kubernetes.io/docs/reference/kubectl/" target="_blank" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid">kubectl</a> in order to enable the direct interaction with the cluster.
2. Live code-reloading: when the code is changed, it should be possible to test the alterations as quickly as possible – without having to first build a new Docker image and deploy it in the local cluster. This is possible via <a href="https://gefyra.dev/" target="_blank" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid">Gefyra</a>, for example
3. For most developers, the debugger is undoubtedly an important part of an optimal development process. With a local Kubernetes cluster, this debugger has to be explicitly configured again. In a Python environment, for example, you do this using python remote debug.
::::
::::GlobalParagraph{.mb-6 .sm:px-8 .md:px-20 .xl:px-0}
Developers may have to learn at least the basics of three further tools in order to utilise the whole scope of features which the Docker Compose setup has made available. We can help you figuring out the right [toolchain](/our-services/cloud-native-tools){.text-bs-blue .hover:underline .hover:decoration-bs-blue .hover:decoration-solid} for your business, help you with the implementation of tools and train your developers on the usage of your new toolset.
::::
#button
::GlobalButton{:url="/contact" :label="Contact us"}
::
:::

:::GlobalPodcastSection{:videoId="KapP6ouEL3E"}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR PODCAST: TOOLS FOR THE CRAFT
::::
::::GlobalTitle{.mb-6}
E2: Remote Kubernetes development environments
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael and Robert take a closer look at the different options for remote Kubernetes development and give some real life examples.
::::
::::globalParagraph{:font-size="lg" .mb-4}
More of our podcasts can be found here:
::::
::::GlobalButton{:url="/podcast" :label="Show more" :color="green"}
::::
:::

:::GlobalSectionWithImage{:image="/img/services/data_1.svg" :alt="data" :imagePosition="left" :isButton=true data-title="Migrating from from docker compose"}
::::GlobalTitle{.mb-6}
Migrating from from docker compose
::::
::::GlobalParagraph{.mb-4}
Many companies still use Docker Compose legacy setups to manage their containerized applications. Docker Compose is a tool that allows developers to define and run multi-container applications using a YAML file. This makes it easy to deploy and manage complex applications on any platform.
::::
::::GlobalParagraph{.mb-4}
Docker Compose is especially useful for companies that have existing applications written in different languages and frameworks, as it allows them to quickly deploy and manage these applications without having to rewrite them from scratch. Additionally, Docker Compose can be used to quickly scale up or down the number of containers running an application, making it ideal for companies with fluctuating workloads.
::::
::::GlobalParagraph{.mb-4}
Despite its advantages, Docker Compose has some drawbacks that make it less suitable for modern cloud-native deployments. For example, it lacks support for Kubernetes, which is the de facto standard for container orchestration today. Additionally, its YAML files can become complex and difficult to maintain over time.
::::
::::GlobalParagraph
Despite these drawbacks, many companies still use Docker Compose legacy setups due to its ease of use and familiarity. This is especially true for smaller organizations that don't have the resources or expertise needed to migrate their existing applications to more modern solutions such as Kubernetes.
::::
#button
::GlobalButton{:url="https://app.hubspot.com/meetings/hannes/anfrage" :label="Book a meeting" :target="_blank"}
::
:::

:::GlobalSimpleSection{:bg="bg-bs-gray" :isButton=true data-title="Get started with kompose.io"}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
A LITTLE HELPER FOR MOVING AWAY FROM DOCKER COMPOSE
::::
::::GlobalTitle{.mb-6}
Get started with kompose.io
::::
::::GlobalParagraph{.mb-4}
Kompose.io is a great solution for companies that are looking to migrate from Docker Compose to Kubernetes. Kompose is a tool that allows developers to convert their existing Docker Compose files into Kubernetes YAML files, making it easy to migrate existing applications without having to rewrite them from scratch.
::::
::::GlobalParagraph{.mb-4}
Kompose also provides additional features that make it easier to manage and deploy applications on Kubernetes. For example, it can automatically generate Kubernetes manifests for services, deployments, and ingresses, as well as generate Helm charts for deploying applications on Kubernetes clusters. Additionally, Kompose can be used to quickly scale up or down the number of containers running an application, making it ideal for companies with fluctuating workloads.
::::
::::GlobalParagraph{.mb-4}
Overall, Kompose is a great solution for companies that are looking to migrate from Docker Compose to Kubernetes. It makes the process of migrating existing applications much simpler and faster than having to rewrite them from scratch. Additionally, its additional features make it easier to manage and deploy applications on Kubernetes clusters.
::::
::::GlobalParagraph
Our experts can help you with your migration using kompose.io. Let's talk about it.
::::
#button
::GlobalButton{:url="https://app.hubspot.com/meetings/hannes/anfrage" :label="Talk to us" :target="_blank"}
::
:::

:::GlobalListCardSliderSection{:bg="bg-white" :dotColor="black" :numberCards=3 :isButton=true data-title="Possible problems when migrating to Kubernetes"}
::::GlobalTitle{.mb-6}
Possible problems when migrating to Kubernetes
::::
#card1
::GlobalListCardWithImage{:src="/img/global/icons/arrows.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Complexity
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
Kubernetes is a complex system with many moving parts, and migrating to it can be difficult and time consuming. It requires a deep understanding of the system in order to make sure that everything is configured correctly and runs smoothly.
:::
::
#card2
::GlobalListCardWithImage{:src="/img/global/icons/cyber-security.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Security risks
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
Kubernetes can be vulnerable to security threats if not properly configured. Misconfigured settings can lead to unauthorized access or data leakage, so it’s important to take the necessary steps to ensure that your cluster is secure.
:::
::
#card3
::GlobalListCardWithImage{:src="/img/global/icons/fast.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Poor performance
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
If your application is not well-suited for running in containers, or if you don’t have enough resources allocated for your cluster, performance may suffer as a result of using Kubernetes.
:::
::
#button
::GlobalButton{:url="/contact" :label="We help you avoid these issues. Contact us today."}
::
:::

:::GlobalListCardSliderSection{:bg="bg-bs-gray" :dotColor="black" :numberCards=4 :isButton=false data-title="Factors to consider before migrating to Kubernetes"}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
WHAT YOU NEED TO THINK ABOUT
::::
::::GlobalTitle{.mb-6}
Important factors to consider before migrating to Kubernetes
::::
#card1
::GlobalListCardWithImage{:src="/img/global/icons/check-list.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Assess your application
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
Before migrating to Kubernetes, it’s important to assess your application and determine if it is suitable for running in containers. Not all applications can be easily containerized, so you need to make sure that yours is compatible with Kubernetes before investing time and resources into the migration process.
:::
::
#card2
::GlobalListCardWithImage{:src="/img/global/icons/strategy_1.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Plan ahead
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
It’s important to plan ahead and consider the resources that will be needed to run your application on Kubernetes. This includes things like CPU, memory, storage, and networking requirements.
:::
::
#card3
::GlobalListCardWithImage{:src="/img/global/icons/cyber-security.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Security considerations
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
Make sure that you understand the security implications of using Kubernetes and take the necessary steps to ensure that your cluster is secure. This includes setting up role-based access control (RBAC) and network policy enforcement for your cluster.
:::
::
#card4
::GlobalListCardWithImage{:src="/img/global/icons/fast.svg"}
:::GlobalTitle{:size="sm" :tag="h4" .mb-4}
Performance monitoring
:::
:::GlobalParagraph{:fontSize="lg" .mb-3}
Once your application is running on Kubernetes, it’s important to monitor its performance closely in order to identify any potential issues or areas for improvement.
:::
::
:::

:::GlobalAccordionSection{bg="bg-white" :color="text-bs-text" :iconColor="text-bs-text" :hoverColor="gray" :borderColor="gray" :numberItems=7 data-title="Prepare your application(s) for the migration"}
::::GlobalTitle{.mb-6}
Prepare your application(s) for the migration
::::
#label-1
::GlobalTitle{:size="sm" :tag="h4"}
Containerize your application
::
#text-1
::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
The first step is to containerize your application by packaging it into an image. This will enable you to easily deploy and manage your application on Kubernetes.
::
::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
One tool that is currently all the rage when it comes to containerizing your applications is buildpacks.io
::
::GlobalParagraph{:fontSize="lg" .leading-6}
<a href="https://buildpacks.io/" target="_blank" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid">Buildpacks.io</a> is a platform that provides developers with a set of tools to easily build and deploy applications in any language on any cloud. It provides a unified workflow for building, testing, and deploying applications across multiple clouds, including AWS, Google Cloud Platform, Microsoft Azure, and more. Buildpacks.io also offers an intuitive UI to manage your application's infrastructure and configuration, as well as an API to automate the process.
::
#label-2
::GlobalTitle{:size="sm" :tag="h4"}
Create a Continuous Integration (CI) Pipeline
::
#text-2
::GlobalParagraph{:fontSize="lg" .leading-6}
The first step in setting up CI/CD with Kubernetes is to create a CI pipeline. This pipeline should be designed to automatically build, test, and deploy your application code whenever changes are made.
::
#label-3
::GlobalTitle{:size="sm" :tag="h4"}
Set up a container registry
::
#text-3
::GlobalParagraph{:fontSize="lg" .leading-6}
The next step is to set up a container registry such as Docker Hub or Google Container Registry (GCR). This will allow you to store and manage your container images for easy deployment.
::
#label-4
::GlobalTitle{:size="sm" :tag="h4"}
Create Kubernetes manifests
::
#text-4
::GlobalParagraph{:fontSize="lg" .leading-6}
Once your application is containerized, you need to create Kubernetes manifests that define how the containers should be deployed and managed on the cluster. This includes things like replica sets, services, and ingress rules. There are a few different options available for this, for example:
::
::GlobalBlock{.ul-disk .mb-4}
- Helm or Kustomize
- Plain YAML
- Kompose.io (if you know docker compose)
::
#label-5
::GlobalTitle{:size="sm" :tag="h4"}
Create Continuous Delivery (CD) Pipeline
::
#text-5
::GlobalParagraph{:fontSize="lg" .leading-6}
After configuring the Kubernetes deployment, you can create a CD pipeline that will automate the process of deploying new versions of your application to the cluster whenever changes are made in the source code repository.
::
#label-6
::GlobalTitle{:size="sm" :tag="h4"}
Test locally
::
#text-6
::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
Once you have created the necessary manifests, it’s important to test them locally before deploying them to the cluster. This will ensure that everything works as expected before going live. To make this as easy as possible, we can provide you with perfectly fitted open source tools that help you abstract most of the complexity that comes with this. Check out:
::
::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
[https://getdeck.dev/](https://getdeck.dev/){.bs-link-blue :target="_blank"}
::
::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
Easily create Kubernetes environments. A simple CLI that helps you to easily provision reproducible K8s environments with all dependencies managed.
::
::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
[https://getdeck.dev/beiboot/](https://getdeck.dev/beiboot/){.bs-link-blue :target="_blank"}
::
::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
A Kubernetes-in-Kubernetes solution that was born from the idea to provide Getdeck users a simple yet flexible solution to spin up hybrid cloud development infrastructure. This is useful for development workloads which grew too large to run on a development machine
::
::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
<a href="https://gefyra.dev/" target="_blank" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid">Gefyra</a>
::
::GlobalParagraph{:fontSize="lg" .leading-6 .mb-4}
Gefyra runs local code in any Kubernetes cluster without the build and push cycle. It overlays containers in the cluster making code changes immediately available.
::
#label-7
::GlobalTitle{:size="sm" :tag="h4"}
Deploy and monitor
::
#text-7
::GlobalParagraph{:fontSize="lg" .leading-6}
Deploy and monitor: Finally, deploy your application to the cluster and monitor its performance closely in order to identify any potential issues or areas for improvement.
::
:::

:::GlobalSimpleSection{:bg="bg-bs-blue" :isButton=false data-title="What's next?: Development and testing"}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
WHAT COMES AFTER YOUR MIGRATION?
::::
::::GlobalTitle{:color="text-white" .mb-6}
What's next: Development & Testing
::::
::::GlobalParagraph{:color="text-white" .mb-4}
Once you have migrated to Kubernetes, it is important to ensure that your development and testing workflows are optimized for the new environment. Kubernetes provides a powerful platform for running applications, but it also requires a different approach to development and testing than traditional environments.
::::
::::GlobalParagraph{:color="text-white" .mb-4}
For example, when developing applications on Kubernetes, it is important to ensure that all code changes are tested in an environment that works like your production environment before being deployed to production. This helps to ensure that any bugs or performance issues are identified and fixed before they can affect the end user. This however can be tricky and is once again the point where our open source tools will come in handy for you.
::::
::::GlobalParagraph{:color="text-white" .mb-4}
We help you easily roll out pre-confirgured Kubernetes environments to your devs that make development and fast testing really easy while also providing you with the technical means to quickly see what results code changes bring while not needing to resort to a slow build-push cycle.
::::
::::GlobalParagraph{:color="text-white" .mb-4}
Overall, good development and testing workflows are essential when migrating to Kubernetes. By following best practices such as using staging environments, automated testing tools, and CI/CD pipelines, companies can ensure that their applications run smoothly on the platform.
::::
::::GlobalParagraph{:color="text-white" .mb-4}
At Blueshoe, we are committed to providing the highest quality of service when it comes to migrating applications to Kubernetes. Our team of experienced engineers will work closely with you to ensure that your applications are migrated in a timely and efficient manner, while taking into account any security and reliability concerns.
::::
::::GlobalParagraph{:color="text-white"}
We will provide comprehensive support throughout the entire process, from initial planning and design to deployment and post-migration maintenance. With our expertise in Kubernetes, you can be sure that your applications will be migrated successfully and securely.
::::
:::

:::GlobalSliderSection{:numberCards=3 data-title="Cloud-native projects"}
::::GlobalTitle{.mb-6}
Cloud-native projects
::::
::::GlobalParagraph
Setting up our customer projects according to the cloud-native approach helps us to develop complex systems quickly and efficiently and to implement short, efficient release cycles. The following projects are a small excerpt from our past cloudnative projects.
::::
#card1
::GlobalSliderCard{:logo='{"src": "/img/global/slide/fondsfinanz.jpg", "alt": "fonds finanz"}' :desktopImage='{"src": "/img/global/slide/bildschirmfoto.jpg", "alt": "fonds finanz"}' :tags='["Django CMS", "Redis", "Bootstrap", "VueJS", "Docker", "Kubernetes"]'}
:::GlobalParagraph{:fontSize="lg"}
Infrastructure for automated seminar and webinar management. Including consent management, connection to existing systems and interfaces to external applications such as Go2Webinar.
:::
#title
:::GlobalTitle
Fondsfinanz - Automation Hub
:::
#button
:::GlobalButton{:url="https://www.fondsfinanz.de/weiterbildung/online-angebot" :label="Find out more" :target="_blank"}
:::
::
#card2
::GlobalSliderCard{:logo='{"src": "/img/global/slide/winter-company.jpg", "alt": "winter&company"}' :desktopImage='{"src": "/img/global/slide/wintercompany.jpg", "alt": "winter&company"}' :mobileImage='{"src": "/img/global/slide/wintercompany_mobile.jpg", "alt": "winter&company"}' :tags='["Django", "Python", "Hubspot"]'}
:::GlobalParagraph{:fontSize="lg"}
We developed a digital strategy with a focus on search engine optimisation for the Swiss designer of covering materials Winter & Company. Furthermore, we positioned the brand with potential new customers not having known the company so far.
:::
#title
:::GlobalTitle
Digitalisation and strengthening of the brand
:::
#button
:::GlobalButton{:url="https://www.winter-company.com" :label="Find out more" :target="_blank"}
:::
::
#card3
::GlobalSliderCard{:desktopImage='{"src": "/img/global/slide/nick-fewings.jpg", "alt": "nick fewings"}' :tags='["Cloud-native development"]'}
:::GlobalParagraph{:fontSize="lg"}
Pssst! We have already worked in the field of cloud-native for a well-known car manufacturer. For some other clients as well. If you want to know more, just give us a call!
:::
#title
:::GlobalTitle
Secret Projects
:::
#button
:::GlobalButton{:url="/contact" :label="Contact us"}
:::
::
:::

:::GlobalRelatedArticles{:title="Some of our articles that may also interest you"}

:::

::