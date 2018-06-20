---
layout: post
title: "Speeding Up Jekyll Builds"
date: 2018-06-18 21:15:12 -0500
excerpt: speeding up your jekyll build with this quick tutorial
comments: true
categories: jekyll
tags: code development jekyll howto tutorial
---
Last night I started to get annoyed with how long I was having to wait for Jekyll to rebuild my blog. It's been a gradual thing here in the past couple months, as I started to add more articles... it would get slower. So I decided to get to the bottom of it. Finally.

I was waiting around 300 seconds for each new build (larger structural change) and that wait was driving me insane, especially with my current drive to blog more. So I started to wonder if the reasoning could have to do with how old my Jekyll version was (v.3.4.0), so I upgraded to the latest (3.8.3). Following [this post](https://jekyllrb.com/docs/upgrading/) on jekyll's site and some [stackoverflow](https://stackoverflow.com/questions/26855552/jekyll-compiling-seems-way-too-slow)-ing. That was nice to do, but did't solve the load time for me. I did learn a lot and saw that the new versions opened up the use for the `--watch` and `--livereload` support for jekyll builds.

***Side note*** with the update of jekyll, the `config.yml` naming of *gems* needed to be changed to the more descriptive naming: *plugins*.

Then I dug a little deeper and wonder if it were a ruby versioning thing, maybe parsing got better with a newer version. No, not noticeably that much different, but I updated anyway.

So then I kept getting more and more results/answers mentioning removing the minification of html (i'm using [octopress/minify-html](https://github.com/octopress/minify-html))
