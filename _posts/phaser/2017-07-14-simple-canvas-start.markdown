---
layout: post
title: "Simple Canvas Start - RPG Tutorial 1"
date: 2017-07-14 22:49:18 -0500
updated: 2017-07-29 20:10:20 -0500
excerpt: Phaser Simple Canvas Start, creating a RPG Tutorial 1
comments: true
categories: phaser
tags: phaser tutorial code howto javascript
---

Welcome to my first <a href="https://phaser.io/" target="_blank" rel="noopener">Phaser</a> tutorial and the road to a very large RPG game. I will be documenting my process here, writing about what works, what doesn't and everything in between... as I try to create this game.  

First off, let's start by getting a game canvas "map" displayed on your page. Below you will see the contents of a simple `html` file.

<div class="highlight-wrapper">
<div class="highlight-file-label"><strong>file:</strong> index.html</div>
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
    <div id="tutorial-1"></div>

    <!-- main.js for your Phaser game -->
    <script src="js/main.js"></script>
  </body>
</html>
{% endhighlight %}
</div>

Now let's create the referenced `main.js` file from above:  

<div class="highlight-wrapper">
<div class="highlight-file-label"><strong>file:</strong> main.js</div>
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
  var game = new Phaser.Game(200, 200, Phaser.CANVAS, 'tutorial-1', config);

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
</div>

Now let's talk about the above js. There is a lot there and a lot that we aren't really using yet, but I thought I would go ahead and add the barebones setup. We will be getting into all of it in the up coming tutorials.  

First, if you run this file, what it should produce on screen is a 200px by 200px grey (#787878) canvas block. If you don't see that, open your dev console and make sure everything is connected properly.  

Here is this tutorial demoed live: <a href="{{ "/tutorial/phaser/simple-canvas-start.html" | relative_url }}" class="btn btn-default" target="_blank" rel="nofollow">Open Demo</a>  

{% highlight javascript %}
var game = new Phaser.Game(200, 200, Phaser.CANVAS, 'tutorial-1', config);
{% endhighlight %}

Here is a portion of the above js file, this is where we are initiating the <a href="https://phaser.io/docs/2.6.2/Phaser.Game.html" target="_blank" rel="nofollow">game constructor</a> and setting some parameters. The first argument, 200, is the width of the canvas block (in px), the second is the height. Then we tell it to render as Canvas with `Phaser.CANVAS`, then we throw an id on it (tutorial-1), and this tells phaser to inject our game canvas within our div in our html markup: `<div id="tutorial-1"></div>`, acting as a container for our entire game canvas! Next we have the config object which is for state, we will dive more deeply into this in the coming blog posts.

Hopefully all is well! Everything else in the js file should be self explanatory. <a href="{{ "/phaser/tilemap.html" | relative_url }}">The next tutorial in this series is tilemapping</a>.

### View Files on Github
<a href="https://github.com/calebnance/blog-calebnance_phaser-tutorials/tree/master/1-simple-canvas-start" class="btn btn-default">Github Folder</a>
