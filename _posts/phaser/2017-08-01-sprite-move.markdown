---
layout: post
title: "Sprite Move - RPG Tutorial 5"
date: 2017-08-01 21:12:19 -0500
excerpt: Phaser how to make the sprite move and camera follows it, creating a RPG Tutorial 5
comments: true
categories: phaser
tags: phaser tutorial code howto javascript
---

Picking up where we left off in the <a href="{{ "/phaser/adding-a-sprite.html" | relative_url }}">last tutorial</a>. We now want to move that sprite and have our camera follow it along the painted canvas.

First we need to do a few things in our `create()` function, add the following 2 lines to the bottom of our function:

{% highlight javascript %}
// set the anchor for sprite to middle of the view
sprite.anchor.setTo(0.5);
// tell camera to follow sprite now
game.camera.follow(sprite);
{% endhighlight %}

The comments should be self explanatory, but basically we are anchoring our sprite (SS Goku) and then telling our game camera to follow said sprite. Doing only this breaks our movement of the camera in our `update()` function. So let's fix that next.

The reason it breaks whenever we try to use our arrows to move is because we can no longer move the camera, since it is following our stationary sprite. *The fix*... move the sprite! Let's jump over to our `update()` function and change the logic from game camera movement to sprite movement, by updating the if/else statement to be these lines:

{% highlight javascript %}
// only move one direction at a time
if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
  sprite.x -= movementRate;
} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
  sprite.x += movementRate;
} else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
  sprite.y -= movementRate;
} else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
  sprite.y += movementRate;
}
{% endhighlight %}

So if you are following a long, our first if statment for the `Left` arrow went from:  
`game.camera.x -= movementRate;` to `sprite.x -= movementRate;`

Boom! That is all she wrote, we now have a sprite that moves around the painted canvas and our camera follows it!

*But wait?! our sprite goes off the canvas... where he go??** Tune in next time, kids.. or just go to my next blog post for setting boundaries.. whatever.

### Demo the thing..
<a href="{{ "/tutorial/phaser/sprite-move.html" | relative_url }}" class="btn btn-default" target="_blank" rel="nofollow">Open Demo</a>  

### Download Source Files
If you would like the source files for this tutorial: <a href="/assets/downloads/phaser/sprite-move-tutorial_blog.calebnance.com.zip" class="btn btn-default" download>Download source files</a>
