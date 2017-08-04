---
layout: post
title: "Tilemap Canvas Boundaries - RPG Tutorial 6"
date: 2017-08-02 19:52:59 -0500
excerpt: Phaser tilemap canvas boundaries fix, creating a RPG Tutorial 6
comments: true
categories: phaser
tags: phaser tutorial code howto javascript
---

Wow, you actually tuned in, I am impressed! As promised, I said we would set our sprite to take into account our canvas boundaries, so here is how we do it!

<br>

Pop the following code within our `create()` function:

{% highlight javascript %}
// enable game physics on sprite
game.physics.enable(sprite, Phaser.Physics.ARCADE);
// set sprite to hit boundaries of our world bounds
sprite.body.collideWorldBounds = true;
{% endhighlight %}

That's really it, super simple. We set our game physics on our sprite (SS Goku) and then tell the sprite to respect our canvas map boundaries and bounce off.. (ARCADE setting).

<br>

So next, we will talk about updating our sprite's image depending on which direction it is moving (* looks left, looks right *) whoa.

### Demo the thing..
<a href="{{ "/tutorial/phaser/tilemap-canvas-boundaries.html" | relative_url }}" class="btn btn-default" target="_blank" rel="nofollow">Open Demo</a>  

### Download Source Files
If you would like the source files for this tutorial: <a href="/assets/downloads/phaser/tilemap-canvas-boundaries-tutorial_blog.calebnance.com.zip" class="btn btn-default" download>Download source files</a>
