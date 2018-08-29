---
layout: post
title: "Optimizing page weight with gif to video"
date: 2018-04-21 20:19:11 -0500
excerpt: help with transforming your gifs to videos
comments: true
categories: development
tags: code development optimization tooling command-line
---
Today I read this article on [Replace Animated GIFs with Video](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/), so having a couple gifs on this blog, I was intrigued and decided to follow along.

On my mac I installed [ffmpeg, via brew](https://trac.ffmpeg.org/wiki/CompilationGuide/macOS#ffmpegthroughHomebrew)

Running this command below:
{% highlight vim %}
ffmpeg -i input.gif output.mp4
{% endhighlight %}
It converts the `gif` to `mp4`, but I got an error: **The file isn’t compatible with QuickTime Player.**. After a little more digging, I found that you needed to pass a few more parameters.

Running this command worked for me:
{% highlight vim %}
ffmpeg -i input.gif -pix_fmt yuv420p output.mp4
{% endhighlight %}

From my blog post on [Phaser Tilemap](https://blog.calebnance.com/phaser/tilemap.html), size of the gif was **455kb** and the conversion to video (.mp4) bumped it down to **65kb**!!

From my blog post on [PWAs](https://blog.calebnance.com/progressive-web-app/simple-progressive-web-app-example.html), size of the gif was **901kb** and the conversion to video (.mp4) bumped it down to **86kb**!!

The article also talks about a lot of things and casing for video type, I just went with **.mp4**. Here is how you would include a video to your markup and have the same functionality that a .gif would (autoplay, loop, muted). So yes, you have to set a few more attributes but we ain't lazy so that is fine, considering how much file sizes differ!

{% highlight html %}
<video autoplay loop muted playsinline>
  <source src="/path/to/video/output.mp4" type="video/mp4">
</video>
{% endhighlight %}

All that to say, I lined them both up and I could hardly tell a difference in the visuals, but crazy on the optimization side of things, so I am hooked!
