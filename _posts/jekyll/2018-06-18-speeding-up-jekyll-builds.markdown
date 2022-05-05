---
layout: post
title: "Speeding Up Jekyll Builds"
date: 2018-06-18 21:15:12 -0500
excerpt: speeding up your jekyll build with this quick tutorial
categories: jekyll
tags: code development optimization tutorial howto jekyll
---
Last night I started to get annoyed with how long I was having to wait for Jekyll to rebuild my blog. It's been a gradual thing here in the past couple months, as I started to add more articles... it would get slower. So I decided to get to the bottom of it. Finally.

I was waiting around 300 seconds for each new build (larger structural change) and that wait was driving me insane, especially with my current drive to blog more. So I started to wonder if the reasoning could have to do with how old my Jekyll version was (v.3.4.0), so I upgraded to the latest (3.8.3). Following [this post](https://jekyllrb.com/docs/upgrading/) on jekyll's site and some [stackoverflow](https://stackoverflow.com/questions/26855552/jekyll-compiling-seems-way-too-slow)-ing. That was nice to do, but didn't solve the load time for me. I did learn a lot and saw that the new versions opened up the use for the `--watch` and `--livereload` support for [jekyll builds](https://jekyllrb.com/docs/configuration/#build-command-options).

***Side note*** with the update of jekyll, the `config.yml` naming of *gems* needed to be changed to the more descriptive naming: *plugins*.

Then I dug a little deeper and wondered if it were a ruby versioning thing, maybe parsing got better with a newer version. No, not noticeably that much different, but I updated anyway.

I kept seeing more and more results/answers mentioning the removal of the minification of html (i'm using [octopress/minify-html](https://github.com/octopress/minify-html)) when working locally. I felt, this couldn't be the root issue... I was wrong, it was. In their documentation they have a flag you can add to your `_config.yml` file to turn this off:

{% highlight javascript %}
minify_html: false
{% endhighlight %}

Boom, that did it, my current local builds/live reloads are around 2 seconds... 2. Why have I been so lazy and okay with this **system** i had in place. Took me maybe 30 minutes to trace it down, and now i get 298 seconds back on each article change... lolz.

Please keep in mind I don't really have a solution for flagging this to play nicely whenever I do run the production build: `JEKYLL_ENV=production jekyll build`, but I am fine with how much time this saves. To have to remember to turn this minification back on for production builds, is a drop in the bucket. love.
