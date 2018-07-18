---
layout: post
title: "Sprite Move Face Tracking - RPG Tutorial 10"
date: 2018-06-10 22:22:22 -0500
excerpt: Phaser how to make the sprite move with face tracking, creating a RPG Tutorial 10
comments: true
categories: phaser
tags: phaser tutorial code howto javascript
---

This post was inspired by [this tweet from @chordbug](https://twitter.com/chordbug/status/1005701513719754752), I loved it and wanted to add it to this tutorial series.

**TLDR;** Below I will show you how to track your users face and allow them to move goku (with arrow keys or canvas touch) only when they are looking at their screen, using [trackingjs](https://trackingjs.com/).

First off, download [trackingjs](https://trackingjs.com/) if you haven't already and include them into your project. We are only using **tracking-min.js** and **face-min.js** right now.

<div class="video-wrapper">
  <video class="video" autoplay loop muted playsinline>
    <source src="/assets/videos/phaser/face-tracking/goku-moves.mp4" type="video/mp4">
  </video>
</div>

Below is the code you'll need to add to <a href="{{ "/phaser/sprite-touch-move.html" | relative_url }}">the previous tutorial</a> to allow for a simple `allowMovement` state (looking or not looking) toggle accessible within our simple game.

{% highlight javascript %}
// add this with our global variables
var allowMovement = false;

// add face tracking support
var tracker = new tracking.ObjectTracker('face');
tracker.setInitialScale(4);
tracker.setStepSize(2);
tracker.setEdgesDensity(0.1);


// or whatever your video tag's id is, within your markup
tracking.track('#video', tracker, { camera: true });

tracker.on('track', function(event) {
  // face recognized within camera?
  if (event.data.length) {
    allowMovement = true;
  } else {
    allowMovement = false;
  }
});
{% endhighlight %}

Now with that simple state toggle happening, we can add support for it at the start of our `update()` function, as shown below:

{% highlight javascript %}
// is the user not looking at the screen?
if (allowMovement === false) {
  return false;
}
{% endhighlight %}

Now let's say we want a visual representation of the movement state, add the following to the above code:

{% highlight javascript %}
// is the user not looking at the screen?
if (allowMovement === false) {
  canMoveText[0].innerText = "can't move";
  return false;
}
canMoveText[0].innerText = "can move";
{% endhighlight %}

**NOTE:** add `var canMoveText = document.getElementsByClassName('movement-state');` to the global variables area. Replacing the classname for your needs.

<div class="video-wrapper">
  <video class="video" autoplay loop muted playsinline>
    <source src="/assets/videos/phaser/face-tracking/goku-moves-2.mp4" type="video/mp4">
  </video>
</div>
**music in headphones when recording this:** *Kids See Ghosts by Kid Cudi*

Now let's say you want to take a look at what is actually being recognized as a face, add the code below within `tracker.on('track', function(event) {})`

{% highlight javascript %}
context.clearRect(0, 0, canvas.width, canvas.height);
event.data.forEach(function(rect) {
  context.strokeStyle = '#a64ceb';
  context.strokeRect(rect.x, rect.y, rect.width, rect.height);
  context.font = '11px Helvetica';
  context.fillStyle = "#fff";
  context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
  context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
});
{% endhighlight %}

<div class="video-wrapper">
  <video class="video" autoplay loop muted playsinline>
    <source src="/assets/videos/phaser/face-tracking/goku-moves-3.mp4" type="video/mp4">
  </video>
</div>


That's about it for this tutorial, take a look at the live demo below and you can also download all of the files for tutorial... have fun!

### Demo the thing...
<a href="{{ "/tutorial/phaser/sprite-move-face-tracking.html" | relative_url }}" class="btn btn-default" target="_blank" rel="nofollow">Open Demo</a>  

### Download Source Files
If you would like the source files for this tutorial: <a href="/assets/downloads/phaser/sprite-move-face-tracking-tutorial_blog.calebnance.com.zip" class="btn btn-default" download>Download source files</a>

### View Files on Github
<a href="https://github.com/calebnance/blog-calebnance_phaser-tutorials/tree/master/10-sprite-move-face-tracking" class="btn btn-default">Github Folder</a>
