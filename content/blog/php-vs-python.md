---
src: '/blog/php-vs-python'
img: '/img/blogs/php-vs-python.jpg'
alt: 'PHP or Python'
preTitle: 'Peeking under the hood'
title: "PHP or Python? Let's compare!"
description: 'Why does Blueshoe trust in Django and Python even though PHP is much more widespread? In this article, we’ll compare Python and Django with PHP.'
date: '30.01.2017'
author:
  - Robert Stein
technology:
  - Django
  - Python
productUpdates: []
topic:
  - Development
---
Why does Blueshoe trust in Django and Python even though PHP is much more widespread? We’ve certainly got our reasons and don’t want to keep them from you.

In this article, we’ll compare Python and Django with PHP.
<!--more-->

![PHP or Python](/img/blogs/php-vs-python.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalTitle{:size="lg" .mb-5}
Why does Blueshoe trust in django?
:::
:::globalParagraph
We use Django for many of our projects. During the first introduction with a potential new client, we’re often asked: ‘Why does Blueshoe use Django? Most of your competitors primarily trust in PHP systems like Wordpress, Drupal/Magento, Shopware or WooCommerce.’
:::
:::globalParagraph
This is the moment where we usually have to explain that a comparison between PHP systems like those above and Django isn’t really fair.
:::
:::globalParagraph
PHP is a programming language, Django is a web framework, Wordpress and Drupal are content management systems, and Magento and WooCommerce are e-commerce systems.
:::

:::globalTitle{:size="lg" .mb-5}
PHP is a burden
:::
:::globalParagraph
PHP is a popular programming language used by many sources and many projects. Having said that, the modern world of web applications is slowly but steadily moving away from PHP:
:::
:::globalParagraph
Search queries for PHP:
:::

![php_blog_graph](/img/blogs/php-blog-graph.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
Search queries for Zend, the widespread framework (PHP-based):
:::

![zend](/img/blogs/zend.jpg){.object-cover .max-w-full .mb-5}

:::globalParagraph
In his article ‘The PHP Singularity’\[1], Jeff Atwood describes PHP as follows: ‘PHP isn't so much a language as a random collection of arbitrary stuff, a virtual explosion at the keyword and function factory.’
:::
:::globalParagraph
Reading Jeff Atwood’s article, you’ll quickly realise that PHP is a badly designed programming language. But then, why are there so many projects based on PHP? There could be a number of reasons:
:::
:::GlobalBlock{.ul-disk .mb-5}
- In its early days (PHP 1 was released in 1995), PHP offered the possibility to implement server-side logic.
- PHP is cheap. Almost every web hosting provider allows PHP to be run. The deployment is simple – it couldn’t be easier. Simply load the data to the server and it’s ready to go.
- Due to the early growing demand, naturally a lot of jobs surrounding PHP were developed. Consequently, a lot of projects are implemented using PHP.
:::
:::globalParagraph
Systems built on this basis appear cheap and easy to use at first glance. Things can get out of hand just as easily, however, with security gaps, poor maintainability and bad code quality\[3]. Poor maintainability is notoriously expensive as it usually takes more time for developers to familiarise themselves with the code or they require such specific knowledge of the system that they request more and more money as time goes by. The result is often a dependency on the client, a vendor lock-in.
:::

:::globalTitle{:size="lg" .mb-5}
PYTHON as foundation
:::
:::globalParagraph
Clean structures, a solid code quality and easy maintainability are second nature to Python. Unlike other programming languages, Python bases its structure on indentations. This not only forces the developer to use a consistent structure when indenting and structuring their code but it also makes it much easier for other developers to familiarise themselves with a new project.
:::
:::globalParagraph
A quick example:
:::
:::globalTitle{:size="md" .mb-5}
PHP
:::
:::BlogCode{.mb-5}
```php
for ($i = 1; $i < 10; $i++) {
  if $($i % 2 == 0) {
    echo $I;
  }
}
```
:::
:::globalTitle{:size="md" .mb-5}
Python
:::
:::BlogCode{.mb-5}
```javascript
for i in range(0, 10, 2):
   print i
```
:::
:::globalParagraph
Obviously, this example isn’t a comprehensive comparison of both languages. It’s simply meant to give you a rough idea of both languages’ readability.
:::
:::globalParagraph
Furthermore, PEP8\[4] provides clear guidelines on how to format Python code. At Blueshoe, our development environments are configured in such a way that they check for conformity with PEP8.
:::
:::globalParagraph
Alright, so we’ve shown that Python ‘trains’ its developers to use a fair bit of structuring. But aren’t professional PHP developers able to do the same?
:::
:::globalParagraph
Of course, there are PHP developers who manage to structure their code in a clear and readable manner. In reality, though, we still see the so-called spaghetti code used too often in PHP projects. Therefore, in the long term, Python shouldn’t be much more expensive than PHP as the maintenance costs can generally be minimised.
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

:::globalTitle{:size="lg" .mb-5}
Django - Our Web Applications Framework
:::
:::globalParagraph
So why does Blueshoe trust in Django and what exactly is Django, anyway?
:::
:::globalParagraph
Django is a framework for the development of web applications. This means Django specifies a certain workflow – a structure in the development of web applications. If you comply with this structure, it’s subsequently easier for new developers to familiarise themselves with the code of a new project. This results not only in the project being structured better, but also in time saved, which in turn is reflected in the costs.
:::
:::globalParagraph
Django automatically comes with a number of different security mechanisms, which are obligatory by default during implementation. For example, cross-site request forgery (CSRF) is prevented by the use of CSRF tokens. Cross-site scripting is also automatically prevented by the Django template Engine. A developer will have to make the active choice to do without this protection and deactivate it manually. Other attack vectors, which Django limits as much as possible, include SQL Injection. In 2013, the Open Web Application Security Project (OWASP) categorised SLQ Injection as the number one weak point and also as potentially the biggest attack vector\[5].
:::
:::globalParagraph
Django describes itself as ‘the web framework for perfectionists with deadlines’\[6]. Django’s development team decided on fundamental philosophies for the development of the framework\[7]. Naturally, these aren’t total reinventions in the world of tech – they also apply to other projects and software systems. It’s worth noting, however, these are being adhered to much more strictly in Django projects. This is generally perceived very positively and at Blueshoe, too, we feel very passionately about this. The results are the dream of every (software) client:
:::
:::GlobalBlock{.ul-disk .mb-5}
- Reusable components = less time, lower costs
- Easy system extensibility = project as the foundation of further development
- Simplicity, readability = no dependency on contractor
- Up-to-date security mechanisms (for web applications)
:::
:::globalParagraph
Okay, so Django is secure, it’s well-structured, has very good maintainability and allows for many functionalities to be implemented within a short timeframe. But who uses Django? Are there examples of other well-known websites that count on Python/Django?
:::

:::globalTitle{:size="md" .mb-5}
Who else puts their faith in Python/Django?
:::

![platforms](/img/blogs/platforms.jpg){.object-cover .max-w-full .mb-5}

:::globalTitle{:size="md" :tag="h3" .mb-5}
Dropbox:
:::
:::globalParagraph
Many instances of the Dropbox infrastructure run Python code. Dropbox’s main goal was the fast development of their features – Python made this possible.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
YouTube\[8]:
:::
:::globalParagraph
In 2009, YouTube smashed the limit of one billion views per day. YouTube uses an application server which was written in Python. In order to allow for different levels of usage, YouTube can simply add or turn off machines. During intense usage of the YT infrastructure, Python usually isn’t the bottleneck. What’s more, YouTube also primarily uses Python because it enables you to develop in a fast and flexible manner.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Pinterest\[9]:
:::
:::globalParagraph
During its peak times, Pinterest pays $52 per hour for their servers. Most of the traffic occurs in the afternoon and evening. At night, the overall number of instances can be reduced to 40% which results in a cost reduction of up to $15 per hour. For the delivery of content, Pinterest mostly uses Django and Tornado (a Python framework and Asynchronous Network Library)\[10].
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Spotify\[11]:
:::
:::globalParagraph
Spotify’s back end consists of many different services. 80% of these services are written in Python. One of the main reasons is the fast development Python offers. They also use Python to work through asynchronous tasks as well as (about 90% of) the MapReduce tasks in Spotify’s Hadoop cluster.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Instagram\[12]:
:::
:::globalParagraph
With several million requests per second, Instagram successfully shows how perfect Django is for the building of web applications. The entire architecture is, of course, complex but the core of the Instagram server is Django as the application server.
:::

:::globalTitle{:size="md" :tag="h3" .mb-5}
Disqus\[13]:
:::
:::globalParagraph
Disqus is used as a comment plug-in on numerous different websites. With 45,000 connections per second (in 2013), Disqus is a web application that does an extreme amount of scaling. Django is almost exclusively used to work on all these connections on Disqus. There are obviously other technologies which are used to ‘make life easier’ for Django (caches, f. ex.). But here, too, a solid foundation like Django is needed to develop stable, secure and scalable web applications.
:::

:::globalTitle{:size="lg" .mb-5}
BLUESHOE <3 PYTHON/DJANGO
:::
:::globalParagraph
Python and Django have active communities, they are constantly being developed further and enable us to write high-quality software in no time. That’s why we love Python and Django. Shorter implementation periods following change requests, higher security standards and lower costs when it comes to maintenance – that’s what our clients love too. At Blueshoe, it’s important to us that our clients and partners understand why we have chosen to use this technology as the foundation for many of our projects.
:::
:::globalParagraph
To cut a long story short: Python/Django are a terrific basis for various different projects. We trust in them and our experience speaks for itself. We encounter new challenges on a daily basis and have never been let down by Django. It simply matches the core of our mentality – after all, we are perfectionists with deadlines.
:::

:::BlogRelatedPosts{:url='["/blog/django-development-for-kubernetes", "/blog/new-features-django-hurricane", "/blog/python-executables-linux-macos-windows", "/blog/local-kubernetes-development", "/blog/strategies-for-slim-docker-images"]' .mb-5}

:::

<hr class='mb-5'>

:::globalParagraph
\[1][http://blog.codinghorror.com/the-php-singularity/](http://blog.codinghorror.com/the-php-singularity/){.bs-link-blue}<br>

\[2][http://php.net/manual/de/history.php.php](http://php.net/manual/de/history.php.php){.bs-link-blue}<br>

\[3][https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/#stance](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/#stance){.bs-link-blue}<br>

\[4][https://www.python.org/dev/peps/pep-0008](https://www.python.org/dev/peps/pep-0008){.bs-link-blue}<br>

\[5][https://www.owasp.org/index.php/Top_10_2013-Top_10](https://www.owasp.org/index.php/Top_10_2013-Top_10){.bs-link-blue}<br>

\[6][https://www.djangoproject.com/](https://www.djangoproject.com/){.bs-link-blue}<br>

\[7][https://docs.djangoproject.com/en/stable/misc/design-philosophies/](https://docs.djangoproject.com/en/stable/misc/design-philosophies/){.bs-link-blue}<br>

\[8][http://highscalability.com/youtube-architecture](http://highscalability.com/youtube-architecture){.bs-link-blue}<br>

\[9][http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html](http://highscalability.com/blog/2012/5/21/pinterest-architecture-update-18-million-visitors-10x-growth.html){.bs-link-blue}<br>

\[10][http://www.tornadoweb.org/en/stable/](http://www.tornadoweb.org/en/stable/){.bs-link-blue}<br>

\[11][https://labs.spotify.com/2013/03/20/how-we-use-python-at-spotify/](https://labs.spotify.com/2013/03/20/how-we-use-python-at-spotify/){.bs-link-blue}<br>

\[12][http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances](http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances){.bs-link-blue}<br>

\[13][http://blog.disqus.com/post/62187806135/scaling-django-to-8-billion-page-views](http://blog.disqus.com/post/62187806135/scaling-django-to-8-billion-page-views){.bs-link-blue}<br>
:::

