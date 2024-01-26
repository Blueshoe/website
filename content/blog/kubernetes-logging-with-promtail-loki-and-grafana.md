---
src: '/blog/kubernetes-logging-with-promtail-loki-and-grafana'
img: '/img/blogs/kubernetes-logging-with-promtail-loki-and-grafana.jpg'
alt: 'docker desktop and kubernetes'
preTitle: 'Collect logs from across the cluster'
title: "Kubernetes Logging with Promtail, Loki and Grafana"
description: 'Docker Desktop can make the life of a developer easier but it may come with a few caveats depending on what OS you may be using. Check out our article and see whether docker desktop may be for you.'
date: '24.08.2022'
author:
  - Tobias Frölich
technology:
  - Kubernetes
  - Grafana
  - Loki
  - Promtail
productUpdates: []
topic:
  - Operation
---
Reading logs from multiple Kubernetes Pods using kubectl can become cumbersome fast. What if there was a way to collect logs from across the cluster in a single place and make them easy to filter, query and analyze? Enter Promtail, Loki, and Grafana.
<!--more-->

![my image](/img/blogs/kubernetes-logging-with-promtail-loki-and-grafana.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalTitle{:size="lg" .mb-5}
Introduction (what is this, why do we need it)
:::
:::globalParagraph
By default, logs in Kubernetes only last a Pod’s lifetime. In order to keep logs for longer than a single Pod’s lifespan, we use log aggregation. This means we store logs from multiple sources in a single location, making it easy for us to analyze them even after something has gone wrong. While the ELK stack (short for Elasticsearch, Logstash, Kibana) is a popular solution for log aggregation, we opted for something a little more lightweight: Loki.
:::
:::globalParagraph
Developed by Grafana Labs, ‘Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus’. Loki allows for easy log collection from different sources with different formats, scalable persistence via object storage and some more cool features we’ll explain in detail later on. For now, let’s take a look at the setup we created.
:::

:::globalTitle{:size="lg" .mb-5}
Deck
:::
:::globalParagraph
If you just want to take a quick look around, you can use Deck to set up this stack on your machine with one command. After <a href="https://getdeck.dev/docs/deck/installation" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">installing Deck</a>, you can run:
:::
:::BlogCode{.mb-5}
```docker
$ deck get https://raw.githubusercontent.com/Getdeck/wharf/main/loki/deck.yaml
```
:::
:::globalParagraph
Follow the instructions that show up after the installation process is complete in order to log in to Grafana and start exploring.
:::

:::globalTitle{:size="lg" .mb-5}
Setup
:::
:::globalParagraph
In this article, we’ll focus on the Helm installation. Grafana Labs offers a bunch of <a href="https://grafana.com/docs/loki/latest/installation/?pg=get&plcmt=selfmanaged-box2-cta1" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">other installation methods</a>.
:::
:::globalParagraph
In <a href="https://github.com/grafana/helm-charts" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Grafana’s Helm chart repository</a>, you’ll find 5 charts related to Loki. *Loki-canary* allows you to install canary builds of Loki to your cluster. *Loki-distributed* installs the relevant components as microservices, giving you the usual advantages of microservices, like scalability, resilience etc. while allowing you to configure them independently of one another. *Loki-simple-scalable* is similar - however, some of the components are always on, taking away a number of the configuration possibilities. The chart named *Loki* will deploy a single StatefulSet to your cluster containing everything you need to run Loki. The last of the bunch is *loki-stack*, which deploys the same StatefulSet as the Loki chart in addition to Promtail, Grafana and some others. For our use case, we chose the Loki chart. In addition to Loki itself, our cluster also runs Promtail and Grafana. In the following section, we’ll show you how to install this log aggregation stack to your cluster!
:::

:::globalTitle{:size="lg" .mb-5}
Prerequisites
:::
:::globalParagraph
To follow along, you need a Kubernetes cluster that you have kubectl access to and Helm needs to be set up on your machine.
:::
:::globalParagraph
First of all, we need to add Grafana’s chart repository to our local helm installation and fetch the latest charts like so:
:::
:::BlogCode{.mb-5}
```docker
$ helm repo add grafana https://grafana.github.io/helm-charts
$ helm repo update
```
:::

:::globalParagraph
Once that’s done, we can start the actual installation process.
:::

:::globalTitle{:size="lg" .mb-5}
Loki Installation
:::
:::globalParagraph
Let’s start by getting Loki running in our cluster. To configure your installation, take a look at the values the Loki Chart accepts via the ‘helm show values’ command, and save that to a file.
:::
:::BlogCode{.mb-5}
```docker
$ helm show values grafana/loki > loki-values.yaml
```
:::
:::globalParagraph
We won’t go over the settings in detail, as most values can be left at their defaults. However, you should take a look at the persistence key in order to configure Loki to actually store your logs in a PersistentVolume.
:::
:::BlogCode{.mb-5}
```json
persistence:
    enabled: true
    accessModes:
    - ReadWriteOnce
    size: 10Gi
    annotations: {}
```
:::
:::globalParagraph
Once you’re done adapting the values to your preferences, go ahead and install Loki to your cluster via the following command:
:::
:::BlogCode{.mb-5}
```docker
$ helm upgrade --install loki grafana/loki -n loki -f loki-values.yaml
```
:::
:::globalParagraph
After that’s done, you can check whether everything worked using kubectl:
:::
:::BlogCode{.mb-5}
```docker
$ kubectl get pods -n loki
NAME                            READY   STATUS    RESTARTS   AGE
loki-0                          1/1     Running   0          1h
```
:::
:::globalParagraph
If the output looks similar to this, congratulations! That’s one out of three components up and running.
:::

:::globalTitle{:size="lg" .mb-5}
Promtail Installation
:::
:::globalParagraph
Next, let’s look at Promtail. Promtail has 3 main features that are important for our setup:
:::
:::GlobalBlock{.ol-decimal .mb-5}
1. It discovers targets (Pods running in our cluster)
2. It labels log streams (attaching metadata like pod/filenames etc. for easier identification later on)
3. It ships them to our Loki instance
:::

:::globalParagraph
To install it, we first need to get a values file, just like we did for Loki:
:::
:::BlogCode{.mb-5}
```docker
$ helm show values grafana/promtail > promtail-values.yaml
```
:::
:::globalParagraph
Like for Loki, most values can be left at their defaults to get Promtail working. However, we need to tell Promtail where it should push the logs it collects by doing the following:
:::
:::BlogCode{.mb-5}
```docker
$ kubectl get svc -n loki
NAME            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
loki            ClusterIP   10.101.163.181   <none>        3100/TCP   1h
```
:::
:::globalParagraph
We ask kubectl about services in the Loki namespace, and we’re told that there is a service called Loki, exposing port 3100. To get Promtail to ship our logs to the correct destination, we point it to the Loki service via the ‘config’ key in our values file.
:::
:::BlogCode{.mb-5}
```json
config:
 logLevel: info
 serverPort: 3101
 lokiAddress: http://loki:3100/loki/api/v1/push
```
:::
:::globalParagraph
Under ‘lokiAddress’, we specify that we want Promtail to send logs to ‘[http://loki:3100/loki/api/v1/push](http://loki:3100/loki/api/v1/push){.bs-link-blue :target="_blank"}’. Note that if Loki is not running in the same namespace as Promtail, you’ll have to use the full service address notation like so: ‘<service-name>.<namespace>.svc.cluster.local:<service-port>'. Promtail runs as a DaemonSet and has the following Tolerations in order to run on master and worker nodes.
:::
:::BlogCode{.mb-5}
```json
tolerations:
    - key: node-role.kubernetes.io/master
    operator: Exists
    effect: NoSchedule
    - key: node-role.kubernetes.io/control-plane
    operator: Exists
    effect: NoSchedule
```
:::
:::globalParagraph
If you don’t want Promtail to run on your master/control plane nodes, you can change that here.
:::
:::globalParagraph
Now that we set the most important values, let’s get this thing installed!
:::

:::BlogCode{.mb-5}
```
$ helm upgrade --install promtail grafana/promtail --namespace=loki -f promtail-values.yaml
```
:::
:::globalParagraph
Verify that everything worked as expected:
:::
:::BlogCode{.mb-5}
```
$ kubectl get ds -n loki
NAME       DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
promtail   8         8         8       8            8           <none>          1h
```
:::
:::globalParagraph
You can also take a look at the Pods with the ‘-o wide’ flag to see what node they’re running on:
:::
:::BlogCode{.mb-5}
```
$ kubectl get pods -n loki -o wide
NAME                            READY   STATUS    RESTARTS   AGE    IP         NODE                     NOMINATED NODE   READINESS GATES
promtail-2j9dj                  1/1     Running   0          1h    1.1.1.1     control-plane-3          <none>           <none>
promtail-5wjxl                  1/1     Running   0          1h    1.1.1.1     control-plane-1          <none>           <none>
promtail-9nvps                  1/1     Running   0          1h    1.1.1.1     worker-1                 <none>           <none>
promtail-brgj2                  1/1     Running   0          1h    1.1.1.1     worker-2                 <none>           <none>
promtail-cfnff                  1/1     Running   0          1h    1.1.1.1     control-plane-2          <none>           <none>
promtail-gtt6m                  1/1     Running   0          1h    1.1.1.1     worker-3                 <none>           <none>
promtail-hnh4z                  1/1     Running   0          1h    1.1.1.1     worker-4                 <none>           <none>
promtail-r4xsz                  1/1     Running   0          1h    1.1.1.1     worker-5                 <none>           <none>
```
:::

:::globalTitle{:size="lg" .mb-5}
Grafana Installation
:::
:::globalParagraph
Last but not least, let’s get an instance of Grafana running in our cluster.
:::
:::globalParagraph
The following values will enable persistence. If you want your Grafana instance to be able to send emails, you can configure SMTP as shown below. Just add your SMTP host and ‘from_address’ to create a secret containing your credentials.
:::

:::BlogCode{.mb-5}
```json
persistence:
 type: pvc
 enabled: true
 # storageClassName: default
 accessModes:
   - ReadWriteOnce
 size: 10Gi
grafana.ini:
 smtp:
   enabled: true
   host: smtp.smtpserver.io:465
   from_address: grafana@collectallthelogs.io
   skip_verify: true
smtp:
 # `existingSecret` is a reference to an existing secret containing the smtp configuration
 # for Grafana.
 existingSecret: "grafana-smtp"
 userKey: "user"
 passwordKey: "password"
```
:::
:::globalParagraph
Once you’re done configuring your values, you can go ahead and install Grafana to your cluster like so:
:::

:::BlogCode{.mb-5}
```json
helm upgrade --install loki-grafana grafana/grafana --namespace=loki -f grafana-values.yaml
```
:::
:::globalParagraph
Verify everything went smoothly:
:::
:::BlogCode{.mb-5}
```json
$ kubectl get pods -n loki
NAME                            READY   STATUS    RESTARTS   AGE
loki-grafana-64b4b79494-8bt7c   1/1     Running   0          1h
```
:::
:::globalParagraph
All three components are up and running, sweet! Now that we’re all set up, let’s look at how we can actually put this to use.
:::

:::GlobalPodcastSection{:videoId="tyvE9VlSWkE" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR KUBERNETES PODCAST
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
Usage
:::
:::globalParagraph
Connecting your newly created Loki instance to Grafana is simple. All you need to do is create a data source in Grafana. Under Configuration → Data Sources, click ‘Add data source’ and pick Loki from the list. You’ll be presented with this settings panel, where all you need to configure, in order to analyze your logs with Grafana, is the URL of your Loki instance. Since Grafana is running in the same namespace as Loki, specifying ‘[http://loki:3001](http://loki:3001){.bs-link-blue :target="_blank"}’ is sufficient.
:::
![Usage](/img/blogs/kubernetes-logging-with-promtail-loki-and-grafana-1.jpg){.object-cover .max-w-full .mb-5}
:::globalParagraph
When you’re done, hit ‘Save & test’ and voilà, you’re ready to run queries against Loki.
:::

:::globalTitle{:size="lg" .mb-5}
LogQL
:::
:::globalParagraph
‘LogQL is Grafana Loki’s PromQL-inspired query language. Queries act as if they are a distributed grep to aggregate log sources. LogQL uses labels and operators for filtering.’
:::
:::globalParagraph
With LogQL, you can easily run queries against your logs. You can either run log queries to get the contents of actual log lines, or you can use metric queries to calculate values based on results.
:::
:::globalParagraph
LogQL is <a href="https://grafana.com/docs/loki/latest/logql/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">well-documented</a>, so we won’t go into detail about every feature, but instead give you some queries you can run against your logs right now in order to get started. Go to the Explore panel in Grafana (${grafanaUrl}/explore), pick your Loki data source in the dropdown and check out what Loki collected for you so far.
:::

:::globalTitle{:size="md" .mb-5}
Simple Log Query
:::
:::globalParagraph
If you just want logs from a single Pod, it’s as simple as running a query like this:
:::
:::BlogCode{.mb-5}
```
{pod="loki-0"}
```
:::
:::globalParagraph
Grafana will automatically pick the correct panel for you and display whatever your Loki Pod logged.
:::

:::globalTitle{:size="md" .mb-5}
Errors across a namespace
:::
:::globalParagraph
This query will filter logs from a given namespace that contain the word ‘error’ It will count them over the range selected in the dashboard and return the sum, giving you a simple overview of what’s going on across your cluster.
:::
:::BlogCode{.mb-5}
```
sum(count_over_time({namespace="loki"} |= "error" [$__range]))
```
:::

:::globalTitle{:size="md" .mb-5}
Average response time in a namespace, by path and app
:::
:::globalParagraph
This query is as complex as it will get in this article. It collects logs from a namespace before applying multiple neat features LogQL offers, like pattern matching, regular expressions, line formatting and filtering. In the end, you’ll receive the average response time of apps running in the given namespace within the selected interval. You’ll effectively be filtering out the log lines that are generated by Kubernetes liveness and readiness probes, grouped by app label and path. Note: this exact query will work for <a href="https://django-hurricane.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Django Hurricane’s</a> log format, but you can tweak it by changing the pattern to match your log format.
:::
:::BlogCode{.mb-5}
```
avg_over_time({namespace="application"} | pattern "<date> <time> <access> <level>     <code> <method> <path> <ip> <latency>" | regexp "(?P<latencyDecimal>[0-9]+\\.[0-9]+ms)" | line_format "{{.latencyDecimal}}" | regexp "(?P<latencyClean>[0-9]+\\.[0-9])" | unwrap latencyClean | __error__="" | path!="/alive" | path!="/ready" [$__interval]) by (path, app)
```
:::

:::globalTitle{:size="lg" .mb-5}
Other Features/Further Reading/Caveats
:::
:::globalParagraph
If you don’t want to store your logs in your cluster, Loki allows you to send whatever it collects to S3-compatible storage solutions like Amazon S3 or MinIO. The log analysing/viewing process stays the same.
:::
:::globalParagraph
File system storage does not work when using the distributed chart, as it would require multiple Pods to do read/write operations to the same PV. This is documented in the <a href="https://github.com/kubernetes-sigs/kind" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">chart repo</a>, but it’s sadly not mentioned in Loki’s official documentation.
:::
:::globalParagraph
<a href="https://grafana.com/docs/loki/latest/tools/logcli/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">LogCLI</a> is Loki’s CLI tool, allowing you to easily browse your logs from the comfort of your terminal. This requires you to expose your Loki instance via http or use port forwarding from your cluster to your machine.
:::



:::BlogRelatedPosts{:url='["/blog/vuejs-error-tracking-with-sentry", "/blog/performance-comparison-gke-vs-eks", "/blog/local-kubernetes-development", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot", "/blog/evolution-of-application-development-to-cloud-native"]'}

:::
