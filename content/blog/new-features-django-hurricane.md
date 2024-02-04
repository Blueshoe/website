---
src: '/blog/new-features-django-hurricane'
img: '/img/blogs/new-features-django-hurricane.jpg'
alt: 'Cool new features for Django-Hurricane'
preTitle: "What's new"
title: "Cool new features for Django-Hurricane"
description: 'We have added some more features to our open source project, Django-Hurricane. Check them out here! ✔ Django ✔ Open Source ✔ New Features'
date: '24.06.2021'
author:
  - Viktor Studenyak
technology:
  - Kubernetes
  - Django
  - Python
productUpdates:
  - Hurricane
topic: []
---
We are pushing the development in the areas of Django and Kubernetes with our open-source project **Django-Hurricane**. Today, we’d like to show you some **new features**.
<!--more-->

![Cool new features for Django-Hurricane](/img/blogs/new-features-django-hurricane.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::


:::globalParagraph
Towards the end of 2020, we told you about our new **open-source** project Django-Hurricane. You can read our blog post about the launch here. With this project, we want to drive the **Django and Kubernetes** development forward and make our developers’ lives easier by eliminating a lot of routine jobs that pop up during the project set-up, transferring them to a robust framework.
:::
:::globalParagraph
We also worked on the to-do list in the <a href="https://github.com/django-hurricane/django-hurricane" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">GitHub Repository</a> and are now able to show you some new features of <a href="https://django-hurricane.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Django-Hurricane</a>.
:::

:::globalTitle{:size="lg" .mb-5}
Documentation
:::
:::globalParagraph
We have done extensive work on the <a href="https://django-hurricane.readthedocs.io/en/latest/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">documentation</a>. Apart from the **user guide**, there’s also a low-level API documentation. The user guide provides helpful information about the use of **Django-Hurricane**, such as the available command options, useful tips for the configuration as well as general information about the individual components of Django-Hurricane. In the API documentation, you’ll be able to look up the features of those individual components.
:::

:::globalTitle{:size="lg" .mb-5}
Running management commands
:::
:::globalParagraph
We have also implemented a feature which allows for the **management commands** to be specified and run directly in the ‘serve’ command. The new **command options** are:
:::
:::GlobalBlock{.ul-disk .mb-5}
- no-metrics: deactivate the collection of metrics.
- command: the repeatable instruction that defines the management commands. The commands are carried out before the HTTP server is started. As the command can be run more than once, it can be repeatedly defined with those different management commands that might also have further options. In this case, you have to specify both the options and the name of the command in a string.
:::
:::globalParagraph
A command using the management commands could look as follows:
:::

:::BlogCode{.mb-5}
```docker
python manage.py serve --command makemigrations --command “compilemessages --locale =de_DE”
```
:::

:::globalTitle{:size="lg" .mb-5}
Probe Endpoints
:::
:::globalParagraph
Probe endpoints can now be defined separately using the ‘serve’ command. The options for this are:
:::
:::GlobalBlock{.ul-disk .mb-5}
- startup-probe: the path for the startup endpoint (default: /startup).
- readiness-probe: the path for the readiness endpoint (default: /ready).
- liveness-probe: the path for the liveness endpoint (default: /alive).
- req-queue-len: the threshold for the request queue. If this threshold is exceeded, the readiness probe will trigger a request with the status code 400.
:::

:::globalTitle{:size="lg" .mb-5}
Webhooks for probe events
:::
:::globalParagraph
In addition to this, we have also implemented a new feature for <a href="https://django-hurricane.io/" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Django-Hurricane</a>: the ability to send **webhooks** to a specific address. By now, there are three webhooks which correspond to the three probes. The first one is the startup webhook. It is run after the start of the HTTP server and sent to the specified address. Should the application have failed to start, a startup webhook with the status ‘failed’ is initiated. After this, the application is stopped.
:::
:::globalParagraph
The liveness and readiness webhooks are initiated after the respective **probe requests**. The webhooks are only run following a change in state – i. e. when the first probe request occurs, which changes the state from ‘None’ to ‘Healthy/Unhealthy’, as well as when the state changes from ‘Healthy’ to ‘Unhealthy’ or from ‘Unhealthy’ to ‘Healthy’. In the case of a webhook with the status ‘failed’, a corresponding error traceback is also sent.
:::
:::globalParagraph
In order for the webhooks to be sent at all, the URL has to be provided along with the **webhook command**. The command option is called ‘webhook-url’ and is provided as a URL for webhooks. The entire command for running the application together with webhooks would look as follows:
:::
:::BlogCode{.mb-5}
```docker
python manage.py serve --webhook-url „http://<Adresse>“
```
:::

:::globalTitle{:size="lg" .mb-5}
Every one of the webhooks also contains certain data:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Status: _‘failed’_ or _‘succeeded’_ – this depends on whether the probe is run successfully or whether it fails.
- Type: _‘startup’_, _‘readiness’_ or _‘liveness’_.
- Timestamp: the moment when the webhook was initiated.
- Hostname: the name of the computer or server.
- Version: the Hurricane version.
- Error trace: if the webhook has the status _‘failed’_, the server will send the error message along with the error path.
:::

![cyclone](/img/blogs/cyclone.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Despite all our hard work on the <a href="https://django-hurricane.readthedocs.io/en/latest/todos.html" class="text-bs-blue hover:underline hover:decoration-bs-blue hover:decoration-solid" target="_blank">Django-Hurricane to-do list</a> in the last few months, we’ve still got some unchecked boxed left. We’d therefore be very grateful for any help with the further development of Django-Hurricane as well as any of our other **open-source projects**. We’re already excited about the new challenges of the development and are looking forward to ticking off some more boxes in our GitHub Repository to-do list.
:::

::GlobalPodcastSection{:videoId="KapP6ouEL3E" :videoPosition="left" :bg="bg-bs-gray" .mb-5}
:::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR KUBERNETES PODCAST
:::
:::GlobalTitle{:tag="h3" .mb-6}
Tools for the Craft: Navigating the Kubernetes ecosystem
:::
:::globalParagraph{:font-size="lg" .mb-4}
Michael and Robert are talking about the various options developers have for running remote Kubernetes development environments.
:::
:::globalParagraph{:font-size="lg" .mb-4}
More editions of our podcast can be found here:
:::
::::GlobalButton{:url="/podcast" :label="More podcasts!" :color="green"}
::::
::



:::BlogRelatedPosts{:url='["/blog/django-development-for-kubernetes", "/blog/python-executables-linux-macos-windows", "/blog/strategies-for-slim-docker-images", "/blog/container-orchestration-options-comparison", "/blog/docker-desktop-and-kubernetes"]'}

:::
