---
layout: post
title: "Sprite Visual Debug - RPG Tutorial 8"
date: 2017-08-03 16:35:11 -0500
excerpt: Phaser sprite visual debug, creating a RPG Tutorial 8
comments: true
categories: phaser
tags: phaser tutorial code howto javascript
---

Today I wanted to share a super simple code snippet for adding a green transparent overlay to your sprite(s) to help with debugging of positioning and how much space it actually takes up. This is very helpful whenever you are working with transparent sprites.

This will be our first interaction with the `render()` function! It's also a one liner, take a look below:

{% highlight javascript %}
// add a transparent green fill to sprite
game.debug.spriteBounds(sprite);
{% endhighlight %}

So that's it, super simple. Please remember to change the sprite variable to whatever you have your sprite named.

The next blog post I will be talking about taking into account **touch events on mobile devices**. This is one solution I want to explore, to help make it easy for users to play the game from a mobile device, <a href="{{ "/phaser/sprite-touch-move.html" | relative_url }}">Sprite Touch Move</a>.

### Demo the thing..
<a href="{{ "/tutorial/phaser/sprite-visual-debug.html" | relative_url }}" class="btn btn-default" target="_blank" rel="nofollow">Open Demo</a>  

### Download Source Files
If you would like the source files for this tutorial: <a href="/assets/downloads/phaser/sprite-visual-debug-tutorial_blog.calebnance.com.zip" class="btn btn-default" download>Download source files</a>

### View Files on Github
<a href="https://github.com/calebnance/blog-calebnance_phaser-tutorials/tree/master/8-sprite-visual-debug" class="btn btn-default">Github Folder</a>
