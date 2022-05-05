---
layout: post
title: "Sprite Change - RPG Tutorial 7"
date: 2017-08-02 19:55:59 -0500
excerpt: Phaser sprite change, creating a RPG Tutorial 7
categories: phaser
tags: phaser tutorial code howto javascript
---

In this post I want to talk about changing the image of a sprite from an interaction with the game by updating our position on the `spritesheet` to reflect that interaction. Fun!

So basically I want this game to look like the character is moving in the direction it actually is, we don't want the static SS Goku (as cool as it is) to be facing down always, we need more, **we demand more**. So let's take a look at the image below, this image is a *spritesheet*. It's a two by two block and each block is 32px by 32px.

<div class="img-wrapper">
  <img class="img" src="/assets/img/phaser/sprite/sprite-goku-4-panel.png" alt="Super Saiyan Goku spritesheet">
</div>

As you can see, the *spritesheet* has our SS Goku facing down, left, right and then up. We now can replace our old single sprite, with this new four paneled sheet. Head on over to our `preload()` function and remove the line that loaded our single image sprite and replace it with the following:

{% highlight javascript %}
// load in a new spritesheet
game.load.spritesheet('goku-4-panel', 'img/sprite-goku-4-panel.png', 32, 32, 4);
{% endhighlight %}

***Notice:*** We changed our sprite variable name to reflect the change and be a little more descriptive (`goku-4-panel`). The image path changed, but the big variable that could be different to your needs are the following three arguments passed. The third and fourth arguments are the height and width of a single block within our sprite sheet, and the fifth argument is how many panels are in our *spritesheet*. Okay cool!

Now let's head over to the `create()` function and update our sprite definition here. Remove the old definition and add the following 2 lines:

{% highlight javascript %}
// paint the sprite to the canvas (centered)
sprite = game.add.sprite(game.camera.width / 2, game.camera.height / 2, 'goku-4-panel');
// set to first frame (0 = top left block)
sprite.animations.frame = 0;
{% endhighlight %}

We now have a new sprite! But what is that second line?! `sprite.animations.frame = 0;` This tells the initial state of our *spritesheet*, which block to use. If you have questions on which number to place here, take a look at the breakdown below. Keep in mind, the render always starts from top left, move right then to the next row, left to right again.

#### Goku SS Spritesheet
* Frame 0 = Top Left Block
* Frame 1 = Top Right Block
* Frame 2 = Bottom Left Block
* Frame 3 = Bottom Right Block

We are so close to being done, we have to do one more thing... accounting for *user interaction* and updating our sprite to reflect that interaction. Let's head on over to the `update()` function. Our `if` statement should now look like this:

{% highlight javascript %}
// only move one direction at a time
if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
  sprite.animations.frame = 1;
  sprite.x -= movementRate;
} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
  sprite.animations.frame = 2;
  sprite.x += movementRate;
} else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
  sprite.animations.frame = 3;
  sprite.y -= movementRate;
} else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
  sprite.animations.frame = 0;
  sprite.y += movementRate;
}
{% endhighlight %}

What did you notice that changed?! Yep, the `sprite.animations.frame` references. This is mapping the new frame depending on which direction we are going! Perfect, now we have a character that faces the direction it is moving, done.

Up next... <a href="{{ "/phaser/sprite-visual-debug.html" | relative_url }}">a sprite debugging helper</a>.

### Demo the thing...
<a href="{{ "/tutorial/phaser/sprite-change.html" | relative_url }}" class="btn btn-outline-dark" target="_blank" rel="nofollow">Open Demo</a>  

### Download Source Files
If you would like the source files for this tutorial: <a href="/assets/downloads/phaser/sprite-change-tutorial_blog.calebnance.com.zip" class="btn btn-outline-dark" download>Download source files</a>

### View Files on Github
<a href="https://github.com/calebnance/blog-calebnance_phaser-tutorials/tree/master/7-sprite-change" class="btn btn-outline-dark">Github Folder</a>
