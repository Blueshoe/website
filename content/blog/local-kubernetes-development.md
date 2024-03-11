---
head:
  title: 'How does local Kubernetes development work?'
  meta:
    - property: 'og:locale'
      content: 'en_US'
    - name: 'description'
      content: 'You want to know more about local Kubernetes development? We explain key facts with code examples.
✔ Local Kubernetes ✔ Helm ✔ Telepresence ✔ Cloud Native'
    - property: 'og:type'
      content: 'website'
    - property: 'og:title'
      content: 'How does local Kubernetes development work?'
    - property: 'og:description'
      content: 'You want to know more about local Kubernetes development? We explain key facts with code examples.
✔ Local Kubernetes ✔ Helm ✔ Telepresence ✔ Cloud Native'
    - property: 'og:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - property: 'og:image:secure_url'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
    - name: 'twitter:card'
      content: 'summary'
    - name: 'twitter:title'
      content: 'How does local Kubernetes development work?'
    - name: 'twitter:description'
      content: 'You want to know more about local Kubernetes development? We explain key facts with code examples.
✔ Local Kubernetes ✔ Helm ✔ Telepresence ✔ Cloud Native'
    - name: 'twitter:image'
      content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/local-kubernetes-development'
img: '/img/blogs/local-kubernetes-development.jpg'
alt: 'How does local Kubernetes development work?'
preTitle: "Let's go Cloud Native!"
title: "How does local Kubernetes development work?"
description: 'You want to know more about local Kubernetes development? We explain key facts with code examples.
✔ Local Kubernetes ✔ Helm ✔ Telepresence ✔ Cloud Native'
date: '07.07.2021'
author:
  - Robert Gutschale
technology:
  - Kubernetes
  - K3D
productUpdates:
  - Gefyra
  - Unikube
topic:
  - Development
---
‘Local Kubernetes development’ aka ‘development of containerised microservices in a local Kubernetes cluster’ means that applications are designed and developed for a Kubernetes architecture – i. e. a developer works with a Kubernetes architecture locally. In this blog post, we’ll show you how local Kubernetes development works.
<!--more-->

![How does local Kubernetes development work?](/img/blogs/local-kubernetes-development.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalTitle{:size="lg" .mb-5}
Prerequisites
:::
:::globalParagraph
‘Local Kubernetes development’ – or rather, ‘How can I stuff as **many tech buzzwords** into a short blog article as possible?’ One might also want to pop in the term ‘K8s’ somewhere, which is used as an abbreviation for ‘Kubernetes’ … but let’s not go crazy here. In order to understand this blog post, we’ll assume you have a **basic understanding of Kubernetes**. If that’s not the case, we can recommend this <a href="https://cloud.google.com/kubernetes-engine/kubernetes-comic" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Comic</a> by Google:
:::

![bildschirmfoto_3](/img/blogs/bildschirmfoto_3.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Let’s assume you’re developing a new project. You’ve identified a few independent services along the way and have now decided that it would make sense to deploy these in **separate containers** and have them **orchestrated by Kubernetes**. As it’s a bigger project, several programmers are working on it – and they’re only working on one of the services each, either individually or in small teams.
:::

:::globalTitle{:size="lg" .font-normal .mb-5}
Status Quo
:::
:::globalParagraph
The **project example** described above has now become a pretty common scenario. How can we now ensure that our programmers are also able to use their own laptops to develop as closely to the Kubernetes architecture as possible? A common method of running Docker containers locally is **_docker-compose_**. While this one’s especially easy to manage, it does have one major drawback: a docker-compose set-up doesn’t display the eventual production environment, i.e. the Kubernetes set-up. The worst-case scenario would be that you’ve programmed something which functions locally in your docker-compose set-up but not in the production system due to the image being run differently here.
:::
:::globalParagraph
As an alternative, technologies have been developed which simulate Kubernetes clusters on local computers. **_Minikube_** is a pretty widespread solution, but there are also more and more other alternatives which have been gaining ground in recent times. Some of those worth mentioning are **_microk8s_** by Canonical, for example, or **_k3s_** and **_<a href="https://github.com/k3d-io/k3d" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">k3d</a>_** by Rancher which are more resource-efficient. K3d uses k3s to simulate more **_<a href="https://kubernetes.io/docs/concepts/architecture/nodes/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Worker Nodes</a>_** in the local Kubernetes cluster. Usually, **_kubectl_** is then used for the interaction with the cluster.
:::
:::globalParagraph
As a developer, you now simply have to build a Docker image of your service and make it available to your colleagues. They can deploy the image in their local cluster and will then have local access to the most up-to-date status of your service.
:::

:::globalTitle{:size="sm" :tag="h4" .font-normal .mb-5}
Two exciting challenges still remain at this point, however:
:::
:::GlobalBlock{.ol-decimal .mb-5}
1. How can I work on my service and always have the up-to-date status available in my cluster without having to build and deploy a new image?
2. How can I use the debugger locally?
:::

:::globalTitle{:size="md" .font-normal .mb-5}
How does local Kubernetes development work?
:::
:::globalParagraph
In the upcoming sections, we will have a look at how we overcome these challenges concerning local Kubernetes development. For this, we’ll be using **_<a href="https://github.com/k3d-io/k3d" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">k3d</a>_** as a **local Kubernetes cluster** as well as **_PyCharm_** as our **_development environment_**. We’ll also be using **_<a href="https://helm.sh/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Helm</a>_** for the **cluster management** as well as **_<a href="https://www.telepresence.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Telepresence</a>_** to manage the **live code reloading**. The following installation examples were all carried out on an up-to-date Ubuntu system.
:::

::GlobalPodcastSection{:videoId="FazRUwBWPUI" :videoPosition="left" :bg="bg-bs-gray" .mb-5}
:::GlobalTitle{:tag="h3" .mb-6}
Local Kubernetes Development using Gefyra
:::
:::globalParagraph{:font-size="lg" .mb-4}
Gefyra is an Open Source intiative that aims to make local Kubernetes Development super fast and rock solid while providing you with all the Kubernetes features you love locally. Check my talk at Conf42 about how I locally debug container with a sidecar using Gefyra.
:::
:::globalParagraph{:font-size="lg" .mb-4}
You can check out Gefyra here:
:::
::::GlobalButton{:url="https://gefyra.dev/" :label="Show me Gefyra" :color="green" target="_blank"}
::::
::

:::globalTitle{:size="sm" .font-normal .mb-5}
K3D/K3S – Lightweight Kubernetes in Docker
:::
:::globalParagraph
k3d can be installed very easily by using the installation script provided by Rancher:
:::
:::BlogCode{.mb-5}
```docker
wget -q -O - https://raw.githubusercontent.com/rancher/k3d/master/install.sh | bash
```
:::

:::globalParagraph
The installation of k3s is just as simple:
:::
:::BlogCode{.mb-5}
```docker
wget -q -O - https://raw.githubusercontent.com/rancher/k3d/master/install.sh | bash
```
:::

:::globalParagraph
A new cluster can be created with the following command (we use k3d version 4 here):
:::
:::BlogCode{.mb-5}
```docker
k3d cluster create buzzword-counter --agents 1 -p 8080:80@agent[0] -p 31820:31820/UDP@agent[0] --registry-create
```
:::
:::globalParagraph
Here we have created a cluster called **buzzword-counter** and, amongst other things, have mapped the local port 8080 on the cluster’s internal port 80 so that we can access our cluster in the web browser via port 8080. Additionally we mapped port 31820, which we later need for Gefyra. We also enable local Docker images to be deployed in the cluster using the flag **--registry-create**, which creates a <a href="https://docs.docker.com/registry/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">local registry</a> named _k3d-buzzword-counter-registry_. We need an entry in our **/etc/hosts** file for the local registry:
:::
:::BlogCode{.mb-5}
```docker
[...]
127.0.0.1     k3d-buzzword-counter-registry
[...]
```
:::
:::globalParagraph
The correct kubectl context has been set by k3d, which we can verify by running **_kubectl config current-context_**.
:::
:::globalParagraph
In order for us to be able to interact with our cluster using kubectl, we can either export the **KUBECONFIG environment variable** or integrate the content of the respective file in **_~/.kube/config:_**
:::
:::BlogCode{.mb-5}
```docker
export KUBECONFIG="$(k3d get-kubeconfig --name='buzzword-counter')"
```
:::

:::globalTitle{:size="lg" .font-normal .mb-5}
Helm – Kubernetes Package Manager
:::
:::globalParagraph
We often use Helm to manage our Kubernetes cluster. Helm describes itself as a package manager for Kubernetes and it also enables the **mapping of complex Kubernetes applications in templates**. Here, the buzzword is **‘infrastructure as code’**. Thanks to the templates, our application can be deployed into a new Kubernetes cluster at any time and without any major effort. To install Helm, you can simply download a binary file: <a href="https://get.helm.sh/helm-v2.16.5-linux-amd64.tar.gz" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">to the download</a>
:::

:::globalTitle{:size="sm" :tag="h4" .font-normal .mb-5}
Example deployment: Buzzword counter
:::
:::globalParagraph
To show you a practical example, we have created a simple deployment for this blog post and put it up on Github:
:::
:::globalParagraph
<a href="https://github.com/Blueshoe/buzzword-counter" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Buzzword counter</a>
:::
:::globalParagraph
<a href="https://github.com/Blueshoe/buzzword-charts" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Buzzword charts</a>
:::
:::globalParagraph
This deployment includes a simple Django application, a **_Celery distributed task queue_** with **_rabbitmq_** as message broker to **process asynchronous tasks** as well as a **PostgreSQL databank**. With our application, we can count buzzwords and add new ones, too. The adding of buzzwords is implemented as a Celery task – in this example, it’s pretty pointless, but it demonstrates the functionality of our Celery distributed task queue perfectly.
:::
:::globalParagraph
The first step of the deployment is to deploy the application as a **Docker image**. As we want to push it to our local registry, we need to find out its mapped port by running **_docker ps -f name=k3d-buzzword-counter-registry_**. In our case it is **port** **_45319_**. Now we build the Docker image (from the Django application’s directory) and push it into our local registry:
:::
:::BlogCode{.mb-5}
```docker
docker build -t k3d-buzzword-counter-registry:45319/buzzword-counter:0.1.0 .
docker push k3d-buzzword-counter-registry:45319/buzzword-counter:0.1.0
```
:::
:::globalParagraph
With the following commands (from the Helm charts’ directory), the application is installed and configured in the Kubernetes cluster with the PostgreSQL and RabbitMQ dependencies.
:::
:::BlogCode{.mb-5}
```docker
helm repo add bitnami https://charts.bitnami.com/bitnami
helm dep update buzzword-counter
helm install buzzword-counter buzzword-counter/
```
:::
:::globalParagraph
It **might take a couple of minutes** until everything is ready. Via kubectl, we can see whether the pods are available, for example, or we can have the log output displayed and verify that the runserver was started on the web pod and the celery worker on the worker pod:
:::
:::BlogCode{.mb-5}
```docker
kubectl get deployments
kubectl get pods
kubectl logs -f buzzword-counter-web-XXXXX-XXXXXXXX
kubectl logs -f buzzword-counter-worker-XXXXX-XXXXXXXX
```
:::
:::globalParagraph
As we use nip.io, we can simply access our service under _<a href="http://buzzword-counter.127.0.0.1.nip.io:8080/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">http://buzzword-counter.127.0.0.1.nip.io:8080</a>_. If DNS Rebinding doesn’t work or isn’t allowed on your local setup and therefore you can’t use nip.io, you need to add an entry to your /etc/hosts in order to access the url:
:::
:::BlogCode{.mb-5}
```docker
[...]
127.0.0.1       buzzword-counter.127.0.0.1.nip.io
[...]
```
:::
:::globalParagraph
If we start a task, we can check out its output in the worker pod’s log via kubectl.
:::
:::BlogCode{.mb-5}
```docker
kubectl logs -f buzzword-counter-worker-XXXXX-XXXXXXXX
```
:::

:::globalTitle{:size="lg" .mb-5}
Gefyra - Fast, local development for Kubernetes
:::
:::globalParagraph
In order to access live code reloading, i. e. to make code changes done in our IDE immediately available in the cluster, we use <a href="https://gefyra.dev/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Gefyra</a>. Without live code reloading, we have to build a new Docker image and deploy it in the cluster after every change – which is pretty inconvenient and can become very time-consuming. Please follow the <a href="https://gefyra.dev/docs/installation/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">instructions to install</a> Gefyra.
:::
:::globalParagraph
To make our local code available in the cluster we need to run following commands, you need to adapt the path in LOCAL_DIR to the directory of your local buzzword-counter copy:
:::
:::BlogCode{.mb-5}
```docker
docker build -t buzzword-counter:dev .
	gefyra up
	export LOCAL_DIR=/home/<...>/buzzword-counter
	gefyra run -i buzzword-counter:dev -N buzzword-dev -n default -v $LOCAL_DIR:/code --env-from buzzword-counter-web-69d98bb99d-62p4q/buzzword-counter -c "python manage.py serve --port 9000 --static --autoreload --debugger --debugger-port 5678"
gefyra bridge -N buzzword-dev -n default --deployment buzzword-counter-web --port 9000:9000 --container-name buzzword-counter -I buzzword-bridge
```
:::
:::globalParagraph
Let’s go over it in more detail. First, we built our development image.
:::
:::globalParagraph
Then we initialized gefyra in the cluster and executed our image with _gefyra run_, to make it part of the cluster. We can see it running with _docker ps_. Additionally we mounted the local source code directory into the container and specified that the new container should copy the environment from container _buzzword-counter of pod buzzword-counter-web-69d98bb99d-62p4q_. You need to change it appropriately to the name of the pod that’s running in your cluster, if you’re following these steps. We start the container with <a href="https://django-hurricane.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Hurricanes</a> serve command with the _autoreload_ flag and two flags for debugging, which we need later on.
:::
:::globalParagraph
Finally, we created a bridge with _gefyra_ bridge in order to intercept the traffic to the cluster application with the one running locally.
:::
:::globalParagraph
By visiting **http://buzzword-counter.127.0.0.1.nip.io:8080/**, we can now observe that code changes in our local IDE are available in the cluster. Keep in mind that only changes in a non-template file trigger the reload.
:::

:::globalTitle{:size="md" .mb-5}
Attaching a Debugger with Gefyra
:::
:::globalParagraph
Now that we have our local code running in the Kubernetes cluster, we only need one more essential thing for a convenient developer workflow: attaching a debugger to interactively debug our application. We can achieve this with Gefyra too, that’s why we’ve added the debug-flags to Hurricanes serve command. We’re using VSCode with the Python extension installed.
:::
:::globalParagraph
In order to set it up, we need to find out the local IP address of the container we started with _gefyra_ run:
:::
:::BlogCode{.mb-5}
```docker
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' buzzword-dev
```
:::
:::globalParagraph
This will be part of the CLI soon (as of April 2022, maybe it already is). The command shown tells the IP of the container which is needed for VSCode. Next we open the buzzword-counters source code in VSCode and select the Remote Attach option to connect to the running debugpy instance at the given IP. The port is 5678, which we specified in the _gefyra run_ command.
:::

![usecases_oauth](/img/blogs/usecases_oauth.jpg){.object-cover .w-full .mb-5}

:::globalParagraph
Upon starting the debugger, the output shows the following:
:::

:::BlogCode{.mb-5}
```docker
2022-04-29 06:26:34,683 hurricane.server.general INFO     Tornado-powered Django web	 server
2022-04-29 06:26:34,688 hurricane.server.general INFO     Autoreload was performed
2022-04-29 06:26:34,688 hurricane.server.general INFO     Starting probe application running on port 9001 with route liveness-probe: /alive, readiness-probe: /ready, startup-probe: /startup
2022-04-29 06:26:34,695 hurricane.server.general INFO     Starting HTTP Server on port 9000
2022-04-29 06:26:34,695 hurricane.server.general INFO     Serving static files under /static/ from /code/buzzword_counter/../static
2022-04-29 06:26:34,697 hurricane.server.general INFO     Startup time is 0.014339923858642578 seconds
```
:::

:::globalParagraph
We can now set breakpoints and start debugging our code. And with that we have achieved not only cloud native development but debugging too!
:::

![pasted_image](/img/blogs/pasted_image.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="lg" .mb-5}
Telepresence: Another option for local development
:::
:::globalParagraph
\[This section was originally written in March 2020 with Telepresence 1. In the meantime Telepresence 2 has been released. Please refer to their <a href="https://www.telepresence.io/docs/latest/quick-start/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">documentation</a> or check out our [comparison of Telepresence 2 and Gefyra](/blog/alternative-to-telepresence-2-gefyra/){.bs-link-blue}.]
:::
:::globalParagraph
Another solution for local Kubernetes development ist Telepresence. It is a so-called **sandbox project by the CNCF**, the <a href="https://www.cncf.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Cloud Native Computing Foundation</a>. With Telepresence (v1), you can run a locally built Docker image in a cluster by ‘swapping’ a deployment.
:::
:::globalParagraph
This is pretty spectacular from a technical point of view. However, for this post, it’ll be sufficient to use a command to swap the **buzzword counter web deployment** of our Kubernetes cluster and run the specified Docker image instead. First, though, we’ll have to create the Docker image. For both commands, we’ll have to be in the **directory of our Django application’s source code**:
:::
:::BlogCode{.mb-5}
```docker
docker build -t buzzword-counter:local .
telepresence --swap-deployment buzzword-counter-web --expose 8080 --docker-run --rm -it -v $(pwd):/code buzzword-counter:local python manage.py runserver 0.0.0.0:8080
```
:::

:::globalParagraph
What’s more, we have **mounted** the current directory in the Docker container using the flag **_‘-v $(pwd):/code’_** so that the code changes in _PyCharm_ are also available in the Kubernetes cluster. However, as we’re using the Django runserver, the live reloading will only work if the **_DEBUG=True_** has been set up. We can either **deploy this via the Helm charts or simply export it in our swapped deployment**. Afterwards, we’ll run the run script:
:::
:::BlogCode{.mb-5}
```docker
export DJANGO_DEBUG=True
/usr/src/run_app.sh
```
:::
:::globalParagraph
If we swap the container, we have to run the three above-mentioned commands again for the _port-forward_ of the pod. Afterwards, we can change the code in PyCharm and verify that the runserver was restarted – either in the log or by opening the page in a browser.
:::

![pasted_image](/img/blogs/pasted_image_0_1.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Have a closer look and you’ll find that **Telepresence** is not limited to a local Kubernetes cluster. You can also swap **deployments from remote clusters** as long as they can be accessed via kubectl. This can be very useful for the debugging and tracing of bugs on test systems, for example. Caution is advised, however, as every **deployment traffic** is directed to the local laptop after the swap. That means that this approach is only really suited to **test systems** and should be avoided at all costs in the case of **most production systems**.
:::

:::globalTitle{:size="md" .mb-5}
Python remote debug in PyCharm
:::

:::globalParagraph
So now we can deploy our application in the local Kubernetes cluster with live code reloading. We have accomplished our buzzword mission, the **production environment (i. e. Kubernetes development environment) has been replicated locally** and we can carry out **Cloud Native** developments on our service. The icing on the cake now is to configure the _PyCharm Debugger_ in a way that we can also debug our application directly in _PyCharm_. To do this, we first have to configure **_Python remote debug_** in _PyCharm_:
:::

![pasted_image](/img/blogs/pasted_image_0_2.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Do bear in mind that it’s crucial that an **absolute path** is specified in the path mapping (the ~ shortcut for the home directory doesn’t work). As you can see in the image above, the configuration also needs a specific version of the <b>Python package </b> _<a href="https://pypi.org/project/pydevd-pycharm/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">pydevd-pycharm</a>_.
:::
:::globalParagraph
In order to avoid this package being unnecessarily part of our production deployment, we’re creating a second Dockerfile which installs upgraded **_pip requirements_**. Furthermore, we’ve added a simple view to our application (in urls.py) so that we can conveniently establish a connection between our cluster and the _PyCharm Debugger_ via URL. What’s important here is that the IP address and the port match the configuration in _PyCharm_.
:::
:::BlogCode{.mb-5}
```docker
docker build -f Dockerfile.dev -t buzzword-counter:debug .
telepresence --swap-deployment buzzword-counter-web --expose 8080 --docker-run --rm -it -v $(pwd):/code buzzword-counter:debug bash
```
:::
:::globalParagraph
Afterwards, we browse the _Debug-URL_. Here, too, we have to remember that _DEBUG=True_ has been set up and that we have carried out the port-forward. Now we can already set up a **breakpoint** in _PyCharm_. If we browse the respective view, the application will be stopped by the debugger and we can then inspect why a reduction of the counter either resets it to 0 or why we even get an **_IntegrityError_**:
:::

![pasted_image](/img/blogs/debug_kubernetes.jpg){.object-cover .max-w-full .mb-5}

::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" :bg="bg-bs-gray" .mb-5}
:::GlobalTitle{:tag="h3" .mb-6}
Tools for the Craft - Edition 1: Kubernetes development environments
:::
:::globalParagraph{:font-size="lg" .mb-4}
You can also check out the first edition of our Kubernetes podcast "Tools for the Craft: Navigating the Kubernetes ecosystem" here. Michael and Robert are talking in depth about the ins and outs of local Kubernetes development and also provide some real coding examples.
:::
:::globalParagraph{:font-size="lg" .mb-4}
More editions of our podcast can be found here:
:::
::::GlobalButton{:url="/podcast" :label="More podcast editions!" :color="green"}
::::
::

:::globalTitle{:size="lg" .font-normal .mb-5}
Conclusion
:::
:::globalParagraph
Thanks to the tools **k3d/k3s, Helm, Gefyra** and additional debugging courtesy by **Hurricane**, we’ve conquered the mountain called ‘**Local Kubernetes development’**. Our developers can now develop in their **own local Kubernetes cluster**. A particularly practical solution to local Kubernetes development is Gefyra in combination with Hurricanes debugging support.
:::
:::globalParagraph
Still, it has to be noted that the **handling of the tools** isn’t quite that simple and that it does **take some time to get used to them**. The obstacle is particularly big in comparison with _docker-compose_. If you are looking for that kind of convenience and a team oriented workflow, check out Unikube, which combines all needed tools for effortless local kubernetes development.
:::
:::globalParagraph
And finally, let’s not forget the **buzzword counter:** I got to **23 unique buzzwords** in total. Did you count along and get to a different number? Go on then, let us know.
:::





:::BlogRelatedPosts{:url='["/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/docker-desktop-and-kubernetes", "/blog/docker-vs-podman", "/blog/alternative-to-telepresence-2-gefyra", "/blog/kubernetes-logging-with-promtail-loki-and-grafana"]'}

:::
