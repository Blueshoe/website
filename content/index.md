---
title: 'Homepage'
description: 'What a lovely page.'
head:
  meta:
    - name: 'keywords'
      content: 'nuxt, vue, content'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'NuxtLabs'
    - name: 'copyright'
      content: '© 2022 NuxtLabs'
---
::GlobalWrapperMain

:::HomepageWeAreBlueshoe
::::GlobalPreTitle{.mb-3}
CLOUD NATIVE SOFTWARE DEVELOPMENT & CONSULTING
::::

::::GlobalTitle{.mb-6}
We are Blueshoe
::::

::::GlobalParagraph{.mb-6}
We are your reliable partner for the implementation of cloud native software, websites, platforms, apps, PWAs and online shops built on top of Kubernetes.
::::

::::GlobalParagraph
Precise. Pragmatic. Professional.
::::
:::


:::HomepageCyclicSlider
:::


:::GlobalSmallCardWithImageSection{data-title="Services" :bg="bg-bs-blue"}
::::GlobalTitle{:color="text-white" .text-center .mb-6}
Your cloud native software development agency
::::

::::GlobalParagraph{color="text-white" .mb-6}
Whether you need a hands-on partner for your cloud native development needs or are looking for consultation in the realm of cloud native development, we are happy to help you out.
::::

::::GlobalParagraph{color="text-white" .mb-6}
Here is what we do
::::

#cards
::GlobalSmallCardWithImage{:src="/img/global/icons/cloud-storage.svg" :href="/our-services/cloud-application-development"}
<p class='mb-3'>
Modern application development for the cloud
</p>
<p>
We build individual and potentially complex software products for you, that run in the cloud on top of Kubernetes.
</p>
#title
Cloud Development
::

::GlobalSmallCardWithImage{:src="/img/global/icons/consulting_1.svg" :href="/our-services/cloud-native-consulting"}
<p class='mb-3'>
We help you figure out solutions
</p>
<p>
We help you figure out how to approach cloud native development and all the complexity that can come with service architectures and Kubernetes.
</p>
#title
Cloud Consulting
::

::GlobalSmallCardWithImage{:src="/img/global/icons/software-development_1.svg" :href="/our-services/products"}
<p class='mb-3'>
Giving back to the community
</p>
<p>
We develop Open Source products to make cloud native development more approachable for developers.
</p>
#title
Open Source Products
::
:::


:::HomepageKubernetesEverywhere{data-title="Kubernetes"}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR SERVICES
::::

::::GlobalTitle{.mb-6}
Kubernetes everywhere
::::

::::GlobalParagraph{.mb-6}
Whether websites, apps, highly scalable web applications or complex interfaces, developing excellent software on top of Kubernetes is our passion.
::::

#cards
::GlobalListCardSlider{:numberCards=4}

#card1
:::GlobalListCardWithImage{:src="/img/global/icons/consulting-hannes.svg"}
We are happy to support and advise you on all topics related to software development. We develop the right architecture, analyze interfaces and help you choose the right framework. Our consulting is as individual as your business. Nothing with "one fits all".

#title
CONSULTING
:::

#card2
:::GlobalListCardWithImage{:src="/img/global/icons/conception-hannes.svg"}
It is often a long way from the idea to the implementation, which can be connected with many hurdles. We help you to put your idea into a concept, define requirements, create drafts and find weaknesses. So nothing can go wrong during the implementation.

#title
CLOUD NATIVE ARCHITECTURES
:::

#card3
:::GlobalListCardWithImage{:src="/img/global/icons/development-hannes.svg"}
We love writing code, always looking for the best solution where we can get to the goal as quickly as possible with high quality. We keep up with the times and program with the latest technologies. Challenge us - so far we have solved every task.

#title
DEVELOPMENT
:::

#card4
:::GlobalListCardWithImage{:src="/img/global/icons/maintenance.svg"}
We will gladly take over the maintenance of your software systems, take care of your hosting or manage your deployment with Kubernetes. We only use solutions that meet the data protection and security requirements of German companies.

#title
MAINTENANCE & OPERATION
:::
::
:::


:::HomepageCompaniesThatTrust
::::GlobalTitle{.mb-6 .text-center}
Companies that trust us
::::
:::


:::GlobalBrandsSlider

:::


:::GlobalCardWithBackgroundImage{data-title="Method" :src="/img/homepage/team3-klein-black.jpg"}
Individual tasks and complex requirements need precisely fitting software. We believe that in software development not every proverbial nail can be hammered with the same hammer. We analyze very precisely what your basic goal is and specify the planned result of your project together with you. We then design individual solutions according to your requirements, making efficient use of our resources and know-how. This also means that we use already existing solutions where it makes sense.

#preTitle
Cloud native software development

#title
As unique as your demands
:::


:::HomepageOurTechStack{data-title="Tech"}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
TOOLS, FRAMEWORKS AND TECHNOLOGIES WE WORK WITH
::::

::::GlobalTitle{.mb-6}
Our tech stack
::::

#tabs
::GlobalTabs{:labels='["Infrastructure", "Backend", "Frontend"]'  .bs-container}

#tab-0
:::GlobalTab{:image="/img/global/tabs/technogolies_panel_3.svg" :isIcons=true :icons='["/img/global/icons/docker.svg", "/img/global/icons/kubernetes-seeklogo.svg", "/img/global/icons/google-cloud-1.svg", "/img/global/icons/amazon_web_services_logo.svg"]'  }
<p class='mb-4'>
The foundation for any web project is a solid infrastructure. It ensures that the application runs stably and can process the requests that arise. A good infrastructure automatically scales the performance needed for the current task. What used to be a Herculean task is many times easier in times of cloud infrastructure.
</p>
<p class='mb-4'>
Own physical server facilities are no longer needed today. But simply cloud will not suffice as an answer. Modern services like Docker and Kubernetes are needed to control and develop applications efficiently.
</p>
<p>
We rely on cloud native development based on Kubernetes and Docker and are more than happy with it.
</p>
:::

#tab-1
:::GlobalTab{:image="/img/global/tabs/technogolies_panel_2.svg" :isIcons=true :icons='["/img/global/icons/python-seeklogo.svg", "/img/global/icons/django-logo.svg", "/img/global/icons/postgre_sql.svg", "/img/global/icons/graphql_logo.svg"]'  }
<p class='mb-4'>
Under the hood of every good web application beats backend technology that ensures that users can use the functions they see on the frontend. You could describe the backend as the engine room of an application. For us, it's important to rely on modern backend technologies that we really know our way around.
</p>
<p class='mb-4'>
For us, this means that we don't make any technological compromises. We rely on Python as a basic programming language and specifically on django, a Python framework, to develop functions.
</p>
<p>
The django framework makes it possible to develop complex backends without having to reinvent the wheel every time for basic functions.
</p>
:::

#tab-2
:::GlobalTab{:image="/img/global/tabs/technogolies_panel_1.svg" :isIcons=true :icons='["/img/global/icons/unofficial_javascript_logo_2.svg", "/img/global/icons/typescript_logo_2020.svg", "/img/global/icons/vuejs_logo_2.svg", "/img/global/icons/bootstrap_logo.svg"]'  }
<p class='mb-4'>
Front-end development has become extremely complex over the last 20 years. Whereas in the past you only developed for one or two browsers and only for the desktop, today frontends have to work in many different screen sizes and browsers, which are then also in circulation in different versions.
</p>
<p class='mb-4'>
To create a coherent user experience, we rely on a fixed technology stack that has proven itself over the last few years when it comes to creating modern interfaces that can then also be displayed flawlessly across the board.
</p>
:::
::
:::

::

