---
src: '/blog/python-executables-linux-macos-windows'
img: '/img/blogs/python-executables-linux-macos-windows.jpg'
alt: 'Creating Python Executables for Windows, MacOS and Linux'
preTitle: 'PyInstaller vs. Nuitka vs. PyOxidizer'
title: "Creating Python Executables for Windows, MacOS and Linux"
description: 'Learn how to create convenient and fast executables for Windows, MacOS and Linux that are written in Python on the example of our CLI project.'
date: '05.07.2022'
author:
  - Michael Schilonka
technology:
  - Kubernetes
productUpdates: []
topic: []
---
Before going into more details about how to develop an executable for a Python project, get some background information on our CLI tool Gefyra, a tool for local application development directly with Kubernetes. This is an Open Source Python project, that we are trying to wrap into convenient executables in this blog post.
<!--more-->

![Creating Python Executables for Windows, MacOS and Linux](/img/blogs/python-executables-linux-macos-windows.jpg){.object-cover .max-w-full .mb-5}

:::BlogNavigationCard{:title="Table of contents"}

:::

:::globalParagraph
The aim was to develop an executable with (almost) the startup performance of kubectl. kubectl is the executable to control a Kubernetes cluster. That means, fast startup times and ideally just one file (which is statically-linked) are crucial for an easy distribution. In addition, executables for Windows, MacOS and Linux shall be provided. For those requirements people would usually opt for Go . However we built a prototype that was written in Python and it evolved over time. Therefore a solution for Python should be developed.
:::
:::globalParagraph
Approach:
:::

:::GlobalBlock{.ol-decimal .mb-5}
1. [PyInstaller](https://pyinstaller.readthedocs.io/en/stable/){.bs-link-blue}
2. [Nuitka](https://nuitka.net/){.bs-link-blue}
3. [PyOxidizer](https://pyoxidizer.readthedocs.io/en/stable/){.bs-link-blue}
:::


:::globalTitle{:size="lg" .mb-5}
PyInstaller
:::
:::globalParagraph
PyInstaller was quite easy to set up. However, the resulting executable was complained about by [Virustotal](https://www.virustotal.com/gui/home/upload){.bs-link-blue} because of PyInstaller's bootloader. Somehow the code signature was also found in viruses. The compilation of a bootloader removed the virus issues.
:::
:::globalParagraph
Facing startup times of more than 10 seconds with internet connection and about 3 seconds without internet connection showed that the concept of PyInstaller will potentially always be a problem for fast startup times. Mac users complained about this issue before in the context of the former docker-compose command being created from [PyInstaller](https://github.com/docker/compose/issues/6956){.bs-link-blue}.
:::
:::globalParagraph
This makes it unsuitable for CLI applications.
:::

:::globalTitle{:size="lg" .mb-5}
Nuitka
:::
:::globalParagraph
Using Nuitka very large binaries of about 150 Mb were generated. The startup performance was already much better than PyInstaller for Mac and Linux. However, very long compile times (about 10 min) left room for improvement.
:::

:::globalTitle{:size="lg" .mb-5}
PyOxidizer
:::
:::globalParagraph
PyOxidizer turned out to be the best approach. This well-crafted toolkit compiles Python to Rust code and also includes all dependencies into one handy binary executable. With no special optimizations startup times of about 700 ms were possible. Those times being almost acceptable this was the basis for further development.
:::
:::globalParagraph
The examination of the output of python -X importtime -m gefyra 2> import.log was the starting point to check the imports. There is an awesome tool to analyze the Python imports: [tuna](https://github.com/nschloe/tuna){.bs-link-blue}. tuna allows analyzing the import times from the log. Run it like this tuna import.log. It opens a browser window and visualizes the import times.
:::
:::globalParagraph
Thus it is possible to manually move all imports to the functions in which they are needed (and bring in some other optimizations). This greatly violates [PEP 8](https://peps.python.org/pep-0008/#imports){.bs-link-blue} but leads to very fast startup times.
:::
:::globalParagraph
These are the startup values finally reached with gefyra under average modern Ubuntu:
:::

:::BlogCode{.mb-5}
```json
> python -m timeit "__import__('os').system(gefyra)"
10 loops, best of 5: 33.5 msec per loop
```
:::

:::globalParagraph
Pretty neat, isn’t it?
:::
:::globalParagraph
In comparison the kubectl executable:
:::

:::BlogCode{.mb-5}
```json
> python -m timeit "__import__('os').system('kubectl')"
10 loops, best of 5: 24.9 msec per loop
```
:::

:::globalParagraph
In addition, [GitHub actions](https://github.com/gefyrahq/gefyra/blob/main/.github/workflows/dist-build-linux.yaml){.bs-link-blue} were created to run the PyOxidizer builds once a new version is released. Only Windows is missing at the moment.
:::
:::globalParagraph
Although PyInstaller and Nuitka did not deliver the best startup times, the intent of this article is not to speak them ill. They probably shine at other aspects.
:::

:::GlobalPodcastSection{:videoId="KapP6ouEL3E" :videoPosition="left" .mb-6}
::::GlobalPreTitle{:color="text-bs-green" .mb-3}
OUR KUBERNETES PODCAST
::::
::::GlobalTitle{:tag="h3" .mb-6}
Tools for the Craft: Navigating the Kubernetes ecosystem
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

:::BlogRelatedPosts{:tag='h2' :url='["/blog/django-development-for-kubernetes", "/blog/php-vs-python", "/blog/new-features-django-hurricane", "/blog/local-kubernetes-development", "/blog/minikube-vs-k3d-vs-kind-vs-getdeck-beiboot"]'}

:::
