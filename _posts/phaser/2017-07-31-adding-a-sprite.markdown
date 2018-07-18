---
layout: post
title: "Adding a Sprite - RPG Tutorial 4"
date: 2017-07-31 18:05:18 -0500
excerpt: Phaser how to add a sprite, creating a RPG Tutorial 4
comments: true
categories: phaser
tags: phaser tutorial code howto javascript
---

This blog post is going to speak on adding a sprite to our Phaser game and how easy it really is.

First, let's look at the sprite that we want to load in. I am going to use this Super Saiyan Goku 32px by 32px block (remember our blocks within our map are 32px by 32px, see <a href="{{ "/phaser/tilemap.html" | relative_url }}">tutorial 2</a> for more information).

<div class="img-wrapper">
  <img class="img" src="/assets/img/phaser/sprite/sprite-goku-single.png" alt="Super Saiyan Goku sprite">
</div>

Again, dealing with an asset, we want to preload that in our `preload()` function, like so:

{% highlight javascript %}
// load in a new sprite
game.load.image('goku-single', 'img/sprite-goku-single.png');
{% endhighlight %}

That's all there is to it! Now let's add the sprite to our canvas within our `create()` function:
{% highlight javascript %}
// paint the sprite to the canvas (centered)
sprite = game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'goku-single');
{% endhighlight %}

What this does is wherever the camera is set on the painted map, we want to paint the sprite to the exact middle of said camera center. View the demo below and use the keyboard arrows to move around. As you can see, the sprite stays in place...

**Also note,** our global variables are now as follows:
{% highlight javascript %}
// global vars
var map, layer, cursors, sprite;
{% endhighlight %}

Our <a href="{{ "/phaser/sprite-move.html" | relative_url }}">next tutorial</a> will switch focus from moving the camera only, to following our sprite as it moves along the map!

### Demo the thing...
<a href="{{ "/tutorial/phaser/adding-a-sprite.html" | relative_url }}" class="btn btn-default" target="_blank" rel="nofollow">Open Demo</a>  

### Download Source Files
If you would like the source files for this tutorial: <a href="/assets/downloads/phaser/adding-a-sprite-tutorial_blog.calebnance.com.zip" class="btn btn-default" download>Download source files</a>

### View Files on Github
<a href="https://github.com/calebnance/blog-calebnance_phaser-tutorials/tree/master/4-sprite" class="btn btn-default">Github Folder</a>
