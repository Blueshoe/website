---
head:
   title: 'Requirements analysis in project management'
   meta:
      - property: 'og:locale'
        content: 'en_US'
      - name: 'description'
        content: "The magic triangle of project management! Find out how to align client's wishes, requirements and project planning."
      - property: 'og:type'
        content: 'website'
      - property: 'og:title'
        content: 'Requirements analysis in project management'
      - property: 'og:description'
        content: "The magic triangle of project management! Find out how to align client's wishes, requirements and project planning."
      - property: 'og:image'
        content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
      - property: 'og:image:secure_url'
        content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
      - name: 'twitter:card'
        content: 'summary'
      - name: 'twitter:title'
        content: 'Requirements analysis in project management'
      - name: 'twitter:description'
        content: "The magic triangle of project management! Find out how to align client's wishes, requirements and project planning."
      - name: 'twitter:image'
        content: 'https://www.blueshoe.io/img/meta/blueshoe-cloud-native-devlopment.png'
src: '/blog/requirements-analysis-in-project-management'
img: '/img/blogs/requirements-analysis-in-project-management.jpg'
alt: 'Requirements analysis in project management'
preTitle: 'The magic triangle of project management'
title: "Requirements analysis in project management"
description: "The magic triangle of project management! Find out how to align client's wishes, requirements and project planning."
date: '20.08.2020'
author:
  - Tina
technology: []
productUpdates: []
topic:
  - Project management
---
Whether a project runs like clockwork or drags on forever depends on how precisely the client requests were identified and implemented. In this article, we’d like to share the experiences we gained from various projects. We’ll show where the challenges lurk when analysing the client requirements and how this process can be integrated into the project schedule.
<!--more-->

![Requirements analysis in project management](/img/blogs/requirements-analysis-in-project-management.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::


:::globalParagraph
The identification of the client requests (the requirements analysis and elicitation) is often neglected as these conversations take up time before an order has even been placed – and time is money. However, this often comes back to haunt you later on during the implementation phase and even those ‘easy’ projects can suffer unexpected consequences. In this article, we’ll have a closer look at this part of the project implementation.
:::

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
The 'Magical Triangle'
:::
:::globalParagraph
The magical triangle is a widespread concept in theoretical project management. A project’s implementation is only well-balanced if the aspects of cost, time and quality form an equilateral triangle. We prefer to replace the term ‘quality’ with ‘scope’. That’s because the scope of the service provision can be defined much more clearly than its quality. This way, the scope can also be connected to the aspects of cost and time more effectively, while the quality aspect effectively becomes part of the scope.
:::

![grafik_blog_erfolgreichespm](/img/blogs/grafik_blog_erfolgreichespm.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="md" .mb-5}
Identifying client requests
:::
:::globalParagraph
This brings us to the question: how can the scope be ascertained in the most precise way?
That’s when you’ll usually hear the term ‘requirements analysis’. This means you’re analysing what the client wants and which client request is to be implemented in the respective project. The process is often called requirements analysis, but it technically consists of two separate steps: first, there’s the requirements elicitation and only during the second step will you do the actual analysis.
:::

:::globalTitle{:size="md" .mb-5}
Requirements Elicitation
:::
:::globalParagraph
With requirements elicitation, it’s really just about finding out what the client ‘really wants’.
The client’s requirements for the future project are usually expressed with the client’s own language and vocabulary. It’s therefore worth doing an extra round of discussing in order to ensure the client and contractor are both on the same page regarding their expectations of the future project.
:::

<hr class='mb-8'>

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
Functional and non-functional requirements
:::
:::globalParagraph
Functional requirements describe WHAT a system should be able to accomplish. Non-functional requirements describe HOW the system should function.
:::
:::globalParagraph
A clear distinction between both aspects isn’t always possible during the client meeting, because for the client, the two aspects are often one and the same. The challenge for the contractor is therefore to separate the two – and this might only happen after the client meeting. The distinction is extremely important for the scope: the functional requirements (i.e. the WHAT) have to shape the core of the requirements elicitation. If client and contractor don’t agree on this, the project cannot be successfully realised.
:::

:::globalTitle{:size="sm" :tag="h4" .mb-5}
Real-Life Example
:::

![nick-fewings](/img/blogs/nick-fewings.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Let’s use the example of a restaurant owner who needs a reservation system. The owner describes the functional requirements as follows: ‘The system should show how much seating space is still available in the restaurant’. This wording poses a high risk of causing misunderstandings: does the requirement solely refer to the free seats and how many potential guests could still be seated? Or does the allocation of seats to certain tables have to be taken into account?
:::
:::globalParagraph
Another example: a search function is to be integrated into a client’s database. The functional requirement has been discussed and the client and contractor have come to mutual understanding about the matter. A non-functional requirement is the subsequent representation of the search results. For example, should the search results be displayed in several pages or not – and how many search results should be displayed, anyway? Further points are the intended target group of the search and the question of how the search results should be displayed – e.g. should only the title be shown or further details, too?
:::
:::globalParagraph
Both examples show that while the functional requirements are the core of the scope, the non-functional aspects must still not be neglected and should be identified just as diligently. Even if all functional requirements are realised in a project, it’s ultimately still possible the result doesn’t meet the client’s expectations due to the non-functional requirements not having been discussed enough beforehand.
:::

<hr class='mb-8'>

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
Requirements elicitation = the service provider as detective
:::
:::globalParagraph
The focus of the requirements elicitation should be to uncover all possible eventualities in the client requirements. As such, the software service provider can regard themselves as a detective to avoid losing sight of the focus. They should also ask themselves two questions:
:::
:::GlobalBlock{.ol-decimal .mb-5}
1. Who is actually going to benefit from it?<br>
   Who is supposed to find the ultimate product useful? Who exactly is the target group – the client themselves or the client’s customer? The target group influences functional and non-functional requirements significantly. This question seems like an easy one but it often hides fundamental aspects, which are vital for a comprehensive requirements elicitation.
   What doesn’t fit in?
2. What doesn’t fit in?<br>
   Seemingly trivial functionalities often hide further functions that are indispensable for the implementation. The question is aimed at edge cases, i.e. exceptions. These edge cases have to be tracked down thoroughly. Many clients aren’t even aware of edge cases that have to be considered during the project implementation. In the later implementation, however, a previously created conception may have to be completely revised due to the sudden occurrence of edge cases.
:::
:::globalParagraph
Continuing the metaphor of a police investigator, the requirements elicitation essentially serves to identify the ‘true motives’ of the client.
:::

<hr class='mb-8'>

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
Requirements analysis as the second step
:::

![abi-ismail-zod](/img/blogs/abi-ismail-zod.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
The actual analysis of the requirements only takes place after the requirements elicitation. After the client requirements have been identified, you have to determine whether these can actually be implemented – ideally, together with the client.
:::
:::globalParagraph
This involves clarifying whether the technical requirements needed for the implementation of the client requirements are provided and whether the client requirements can be realised within the predetermined timeframe and budget.
:::
:::globalParagraph
If that isn’t the case, you first have to check whether it makes sense to first implement parts of the requirements in an initial implementation period. If this is possible, a prioritisation of requirements is helpful for both client and contractor as it’s a chance to clarify which elements are the most important to the client and whether these can be realised.
:::

:::globalTitle{:size="md" .mb-5}
Comparison with reality
:::
:::globalParagraph
One thing is often missing in books about successful project management: a comparison with reality. In an ideal world, both client and contractor have enough time to establish the requirements, to analyse them thoroughly and to prioritise the most important ones. The contractor would subsequently be able to create a well-calculated proposal.
:::
:::globalParagraph
As contractors, however, we have found reality doesn’t work like this in most cases. In other words, time is money and money first has to be earned. The client depends on the speed at which a proposal can be provided and they can then accept so the desired project is realised as quickly as possible. The contractor, too, is interested in the order being placed quickly to ensure planning security. Sometimes, an extensive requirements elicitation and analysis can even take place after the order has been placed.
:::


<hr class='mb-8'>

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
Four insights for a successful requirements phase
:::

![cow](/img/blogs/cow.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
In the following, we’ll outline four insights from our experience. They show how you can map the requirements elicitation and analysis in your project calculation and how the risks for both client and contractor can be minimised.
:::

:::globalTitle{:size="md" .mb-5}
Time tracking before the project even starts
:::
:::globalParagraph
As the contractor, you should continuously monitor how much time is needed for the clarification of the project – it’s the only way to gain experience. Later, you’ll also know how complex the process will be and you can determine the costs accordingly in a better way.
:::

:::globalTitle{:size="md" .mb-5}
Allow for conception phases
:::
:::globalParagraph
The quote should include an additional conception phase – depending on the cope, this may be anything from a few hours to entire days. This phase should not only factor in the time needed for the software architecture, but also time for essential consultations with the client.
:::
:::globalParagraph
Especially when a job spec isn’t clearly formulated, these types of conception phases should be considered.
:::

:::globalTitle{:size="md" .mb-5}
Define the boundaries
:::
:::globalParagraph
The proposal should define clear boundaries. For clients in particular, it’s not always clear what hides behind the different elements of the quote. It may even make sense to include an additional document in the proposal, which explains these points in further detail.
:::

:::globalTitle{:size="md" .mb-5}
Better distribution of project management costs
:::
:::globalParagraph
Project management is often regarded as ‘unproductive’ overhead. The higher the project management costs, the more difficult it is to explain to the client how important this part is.
:::
:::globalParagraph
When calculating the individual technical elements of the proposal, we therefore suggest increasing the time for project management by a certain amount. The quote for the client will then still include the final time and cost expenditure. This means the separate quote for the PM proportion won’t be too high in your proposal. The additional PM can be used for consultations with the client and should always be monitored separately from the technical implementation by the project controller.
:::
:::globalParagraph
And there’s an additional fifth insight for a successful implementation of projects: the definition of acceptance criteria. However, this insight is such a comprehensive subject that we shall dedicate a separate article to it.
:::

<hr class='mb-8'>

::GlobalPodcastSection{:videoId="KapP6ouEL3E" :videoPosition="left" :bg="bg-bs-gray" .mb-5}
:::GlobalPreTitle{:color="text-bs-green" .mb-3}
PODCAST: TOOLS FOR THE CRAFT
:::
:::GlobalTitle{:tag="h3" .mb-6}
Edition 2: Remote Kubernetes development environments
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

<hr class='mb-8'>

:::globalTitle{:size="lg" :color="text-bs-blue" .mb-5}
Conclusion: Blueshoe’s requirements process
:::
:::globalParagraph
At the beginning of our company history, the developers were still a big part of the requirements process and communicated personally with the clients. Sometimes, a demand was even made on the fly and implemented immediately. As the number of our clients and projects increased, we recognised that this approach becomes impossible at a certain project size. We have since begun to make the requirements process a central part of our project management and it is now carried out by our project managers.
:::
:::globalParagraph
For us, it’s always vital that we are able to react flexibly to changes in the requirements which may pop up during the project implementation. However, the thorough requirements elicitation still gives us (but primarily the client) a considerably higher planning security regarding the implementation period of a project.
:::




:::BlogRelatedPosts{:url='["/blog/evolution-of-application-development-to-cloud-native", "/blog/kubernetes-explained-for-non-developers", "/blog/managed-vs-unmanaged-kubernetes", "/blog/container-orchestration-options-comparison", "/blog/local-kubernetes-development"]'}

:::
