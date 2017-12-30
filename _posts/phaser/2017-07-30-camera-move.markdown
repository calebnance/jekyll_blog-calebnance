---
layout: post
title: "Camera Move - RPG Tutorial 3"
date: 2017-07-30 20:25:28 -0500
excerpt: Phaser how to move the camera around the map, creating a RPG Tutorial 3
comments: true
categories: phaser
tags: phaser tutorial code howto javascript
---

Today I am picking up right where I left off from our <a href="{{ "/phaser/tilemap.html" | relative_url }}">last tutorial</a> and showing you how to move your tilemap with your keyboard arrows!

We don't need to do anything in our `preload()` function, so we will skip on down to the `create()` function. Two lines need to be added with this function as shown below:

{% highlight javascript %}
// set bounds to tilemap size
game.world.setBounds(0, 0, 800, 800);

// set keyboard input listeners
cursors = game.input.keyboard.createCursorKeys();
{% endhighlight %}

The first line is setting our world boundaries. Since our tilemap that we created in <a href="{{ "/phaser/tilemap.html" | relative_url }}">tutorial 2</a> is 800px by 800px, that is what we will set as our last two arguments passed. The first two are the x and y of the starting top left corner of the paint, so we want these to be `0, 0,`. Explore changing these numbers up and see how it effects the start position and how far past the painted canvas it will go.. (you'll see the grey background if it's more than 800px).

The next line is pretty self explanatory, we want the game to know and listen for/accept keyboard events.

That's it for the `create()` function, now on to our first interaction with the `update()` function! This gets called very very frequently, hence the commented out console.log(). We are going to want to pop these lines into this function:

{% highlight javascript %}
// console.log('call::update()');

// speed of movement
var movementRate = 3;

// only move one direction at a time
if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
  game.camera.x -= movementRate;
} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
  game.camera.x += movementRate;
} else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
  game.camera.y -= movementRate;
} else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
  game.camera.y += movementRate;
}
{% endhighlight %}

Our first line is the movement rate of a single arrow click, controlling the literal movement speed/distance.

Our next if/else statement is handling which direction the camera should go depending on what key was pressed. Notice the built in functions Phaser provides, this makes things very easy to tap into but also very easy to understand what is going on!

That's it for this tutorial! Check out my next tutorial, <a href="{{ "/phaser/adding-a-sprite.html" | relative_url }}">Adding a Sprite</a>.

### Demo the thing..
<a href="{{ "/tutorial/phaser/camera-move.html" | relative_url }}" class="btn btn-default" target="_blank" rel="nofollow">Open Demo</a>  

### Download Source Files
If you would like the source files for this tutorial: <a href="/assets/downloads/phaser/camera-move-tutorial_blog.calebnance.com.zip" class="btn btn-default" download>Download source files</a>
