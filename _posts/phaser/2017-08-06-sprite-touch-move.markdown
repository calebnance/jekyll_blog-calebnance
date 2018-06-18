---
layout: post
title: "Sprite Touch Move - RPG Tutorial 9"
date: 2017-08-06 20:20:20 -0500
excerpt: Phaser how to make the sprite move with touch on mobile, creating a RPG Tutorial 9
comments: true
categories: phaser
tags: phaser tutorial code howto javascript
---

This post will show you have to implement touch events to make our sprite move.

First off let's add a touch handler function that will serve as our `update()` function for mobile touch. Let's place this function right after our function `resize()`.

{% highlight javascript %}
function touchHandler(e) {
  var movementRate = 3;
  if(e.touches) {
    e.preventDefault();

    var currentY = e.touches[0].clientY;
    var currentX = e.touches[0].clientX;
    if(currentY > lastY){
      sprite.y += movementRate;
      // alert('down');
    } else if(currentY < lastY) {
      // alert('up');
      sprite.y -= movementRate;
    }

    if(currentX > lastX){
      // alert('right');
       sprite.x += movementRate;
    } else if(currentX < lastX) {
      // alert('left');
      sprite.x -= movementRate;
    }
    lastY = currentY;
    lastX = currentX;
  }
}
{% endhighlight %}

Now we need to plug it up with some event listeners. One for **touchstart** and one for **touchmove**, see the code block below. Place this right above our `touchHandler()`. Along with two global variables: **lastY** & **lastX**.

{% highlight javascript %}
document.addEventListener("touchstart", touchHandler);
document.addEventListener("touchmove", touchHandler);
var lastY, lastX;
{% endhighlight %}

That should do it! Take a look at the demo below or download the source files for this tutorial that includes everything we've reviewed so far!

Check out my next blog post in this series, <a href="{{ "/phaser/sprite-move-face-tracking.html" | relative_url }}">sprite move with face tracking</a>.

### Demo the thing..
<a href="{{ "/tutorial/phaser/sprite-touch-move.html" | relative_url }}" class="btn btn-default" target="_blank" rel="nofollow">Open Demo</a>  

### Download Source Files
If you would like the source files for this tutorial: <a href="/assets/downloads/phaser/sprite-touch-move-tutorial_blog.calebnance.com.zip" class="btn btn-default" download>Download source files</a>

### View Files on Github
<a href="https://github.com/calebnance/blog-calebnance_phaser-tutorials/tree/master/9-sprite-touch-move" class="btn btn-default">Github Folder</a>
