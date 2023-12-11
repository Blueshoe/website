---
src: '/blog/django-development-for-kubernetes'
img: '/img/blogs/django-development-for-kubernetes.jpg'
alt: 'Django development for Kubernetes'
preTitle: 'News from the open source factory'
title: "Django development for Kubernetes"
description: 'Check out our open source project Django-Hurricane - ideal for developing more Cloud Native and ready for Kubernetes. ✔ Django Development ✔ Kubernetes ✔ Cloud Native'
date: '21.07.2022'
author:
  - Robert Gutschale
technology:
  - Kubernetes
productUpdates: []
topic: []
---
We’ve had another think about how to make the running of Django applications more Cloud Native and ready for Kubernetes. The result was Django-Hurricane which we’d like to introduce in this blog post and which we will make available as an open-source project.
<!--more-->

![Django development for Kubernetes](/img/blogs/django-development-for-kubernetes.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalParagraph
We’ve always been fans of **open source** and we use it in many of our projects. Amongst other things, we use the **Django framework** a lot and also make an effort to support open-source projects when working on maintenance and further development. On top of this, **Kubernetes** has also been a regular presence for some time now – which is why we’re increasingly striving to face the challenge of developing in a **Cloud Native** environment as much as possible. We’ve already written a few blog posts about this – check out [Cloud Native Kubernetes development](https://www.blueshoe.io/blog/local-kubernetes-development/){.bs-link-blue}, for example.
:::
:::globalParagraph
The logical consequence was to think about how to make the running of Django applications more Cloud Native. The result was **[Django-Hurricane](https://django-hurricane.io/){.bs-link-blue}** which we’d like to introduce in this blog post and will make available as an open-source tool.
:::

:::globalTitle{:size="lg" .mb-5}
"Classic" deployment
:::
:::globalParagraph
First, let’s have a quick look at how Django is often run on a server or a VM. To do this, we usually use a stack with Nginx as a web server as well as uWSGI as an application server which runs the Django code. App servers like [uWSGI](https://uwsgi-docs.readthedocs.io/en/latest/){.bs-link-blue} have a **highly optimised** process model for this type of deployment, with many CPUs, several threads etc. With enough knowledge of the application and sufficient experience in the execution of Django applications, the application server can be configured in the most optimal way possible – also because there are typically enough options available.
:::

:::globalTitle{:size="lg" .mb-5}
Kubernetes deployment of Django applications
:::
![Kubernetes deployment of Django](/img/blogs/django-development-for-kubernetes-1.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
In Kubernetes, however, things look a little different. You can still run our Django application in a **container** using uWSGI; however, an **optimisation** of the application server that is tailored to the hardware is out of place here – for starters, you can’t directly influence which node of the cluster the container is actually run on. In Kubernetes, the **horizontal** scaling of the application can still be configured using the **replication value**. On top of this, the Horizontal Pod Autoscaler can be used to specify a minimum and maximum number of pods. If the app was unable to cope with the requests, for example, Kubernetes could simply start a **new, parallel** container.
:::
:::globalParagraph
There are some other points in our Django application which we have to keep in mind when running it via Kubernetes – the **liveness, readiness** and **startup** probes, for example. Our application has to provide endpoints for the probes which will be regularly checked by Kubernetes in order to judge whether a container needs to be restarted, for example, or whether **traffic** can be received at that given moment. This could then lead to some **boilerplate code** or even to the Django application simply just having to provide functionality to the **hosting**.
:::
:::globalParagraph
We don’t really want any of this – we want an **application server which is more directly linked with Kubernetes**.
:::

:::globalTitle{:size="lg" .mb-5}
Django-Hurricane
:::
![Django Hurricane](/img/blogs/django-development-for-kubernetes-2.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
That’s why we’ve developed **[Django Hurricane](https://django-hurricane.io/){.bs-link-blue}** which we are building on the [Tornado web server](https://github.com/tornadoweb/tornado){.bs-link-blue}. Hurricane can be run as a simple Django **management command** and can also be configured using **flags**. No further configuration files are required.
:::
:::globalParagraph
The installation can simply take place using *pip*:
:::
:::BlogCode{.mb-5}
```docker
pip install hurricane
```
:::

:::globalParagraph
After that, Hurricane has to be added to the INSTALLED_APPS of the Django project. A logger should also be configured so that logging information will be displayed:
:::
:::BlogCode{.mb-5}
```json
INSTALLED_APPS += (
  'hurricane',
)

LOGGING = {
    # [...]
    “loggers”: {
        # [...]
        “hurricane:”: {
          "handlers": ["console"],
          "level": os.getenv("HURRICANE_LOG_LEVEL", "INFO"),
          "propagate": False,
        },  
    },
    # [...]
}
```
:::

:::globalParagraph
Hurricane can be started with the management command:
:::
:::BlogCode{.mb-5}
```docker
python manage.py serve
```
:::

:::globalParagraph
The configuration also takes place entirely via management command options. Here’s a list of the options that currently exist:
:::
:::GlobalBlock{.ul-disk .mb-5}
- static: serve static files
- media: serve media files
- autoreload: load code changes dynamically  
- debug: set a Tornado debug flag (not to be confused with Django’s DEBUG=True)
- port: the port on which Tornado should run (default: 8000)
- probe: the path for the liveliness and readiness probes (default: /alive)
- probe-port: the port under which the probes can be reached (default: a port after –port)
- no-probe: deactivate a probe endpoint
:::

:::globalParagraph
These basic configuration options already cover a fair few scenarios and we can already use it to apply Hurricane to **production systems**.
:::
:::globalParagraph
In order for the probes to do their job, they actually have to be able to make a statement with regard to the **accessibility** and **availability** of the application; they mustn’t just be an endpoint which can be reached independently of the application. And while the Django code and the probe endpoint are served on two different ports with Hurricane, as the entire code basis is run in the same **asyncio loop**, a conclusion can still implicitly be drawn about the accessibility and availability of the application.
:::
:::globalParagraph
More logic might well be necessary in order to establish the liveness or readiness of an application rather than just an endpoint which sends back a 200. Hurricane’s probe endpoint runs Django’s check framework. This makes it possible for the **additional logic** required for the application to be displayed in Django’s checks.
:::

:::GlobalPodcastSection{:videoId="KapP6ouEL3E" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR PODCAST: TOOLS FOR THE CRAFT
::::
::::GlobalTitle{:tag="h3" .mb-6}
E2: Remote Kubernetes development environments
::::
::::globalParagraph{:font-size="lg" .mb-4}
Michael and Robert are talking about the various options developers have for running remote Kubernetes development environments.
::::
::::globalParagraph{:font-size="lg" }
More editions of our podcast can be found here:
::::
::::GlobalButton{:url="/podcast" :label="Show more" :color="green"}
::::
:::

:::globalTitle{:size="md" .mb-5}
Roadmap and further development
:::
![Roadmap](/img/blogs/django-development-for-kubernetes-3.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Even if Hurricane can already be used for production systems, the development is still in its **infancy**. We still have some **further features** in mind and the [to-do list in the GitHub Repository](https://github.com/Blueshoe/django-hurricane/){.bs-link-blue} has some remaining unticked boxes left. **Support** in the further development is always welcome, of course, just like in all open-source projects. Either way, we’ll keep the ball rolling and there’s surely going to be one or two blog posts in the future that deal with **[new Hurricane features](https://www.blueshoe.io/blog/new-features-django-hurricane/){.bs-link-blue}**, application scenarios and other related subjects.
:::

:::BlogRelatedPosts{:url='["/blog/python-executables-linux-macos-windows", "/blog/php-vs-python", "/blog/new-features-django-hurricane", "/blog/strategies-for-slim-docker-images", "/blog/local-kubernetes-development"]'}

:::
