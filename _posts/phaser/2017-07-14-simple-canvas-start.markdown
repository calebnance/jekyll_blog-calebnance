---
layout: post
title: "Simple Canvas Start - RPG Tutorial 1"
date: 2017-07-14 22:49:18 -0500
excerpt: Phaser Simple Canvas Start, creating a RPG Tutorial 1
comments: true
categories: phaser
tags: phaser tutorial code howto javascript
---

Welcome to my first Phaser tutorial and the road to a very large RPG game. I will be documenting my process here. With what works, what doesn't and everything in between as I try to create this game.  

First off, let's start by getting a game canvas "map" displayed on your page. Below you will see the contents of a simple `html` file.

{% highlight html %}
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Phaser Simple Canvas Start | RPG Tutorial 1</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.2/phaser.min.js"></script>
  </head>
  <body>
    <!-- Canvas Map Container -->
    <div id="start-1"></div>

    <!-- main.js for your Phaser game -->
    <script src="js/main.js"></script>
  </body>
</html>
{% endhighlight %}

Now let's create the referenced `main.js` file from above:  

{% highlight javascript %}
window.onload = function() {
  // config
  var config = {
    preload: preload,
    create: create,
    render: render,
    update: update,
    resize: resize
  };

  // create game
  var game = new Phaser.Game(200, 200, Phaser.CANVAS, 'start-1', config);

  // preload() happens here
  function preload() {
    console.log('call::preload()');
  }

  // create() happens here
  function create() {
    console.log('call::create()');

    // set background color
    game.stage.backgroundColor = '#787878';
  }

  function render() {
    // console.log('call::render()');
  }

  function update() {
    // console.log('call::update()');
  }

  function resize() {
    // console.log('call::resize()');
  }
};
{% endhighlight %}

Now let's talk about the above js, there is a lot there and a lot that we aren't really using yet, but thought I would go ahead and add the barebones set up. We will be getting into all of it in the up coming tutorials.

First, if you run this file, what it should produce on screen is a 200px by 200px grey (#787878) canvas block. If you don't see that, open your dev console and make sure everything is connected properly. Here is this tutorial demoed live: <a href="{{ "/tutorial/phaser/simple-canvas-start.html" | relative_url }}" target="_blank" rel="nofollow">Demo Simple Canvas Start</a>

{% highlight javascript %}
var game = new Phaser.Game(200, 200, Phaser.CANVAS, 'start-1', config);
{% endhighlight %}
