---
layout: post
title: "jQuery Cycle - v.1.x"
date: 2011-05-26 01:25:22 -0500
excerpt: jquery cycle is a very useful plugin, that allows for image slide shows with effects
comments: true
categories: jquery
tags: code howto javascript jquery
---
I have recently been using a lot of jQuery and getting really comfortable writing my own stuff now, but I still use this jQuery plugin as much as I can. [jQuery Cycle](http://jquery.malsup.com/cycle/) is a very nicely done plugin that allows you to have a huge library of transitions at your disposal.  

#### Specs
There is a lot you can do with this plugin. The main thing is an image slide show. I have used this with several sites and even with several modules I have made for Joomla 1.5. The most basic demo for a slide show with this plugin is found [here](http://jquery.malsup.com/cycle/basic.html).  

The full animations list (fx) of all the effects you can set the slide show to do are as follows:  
- blindX
- blindY
- blindZ
- cover
- curtainX
- curtainY
- fade
- fadeZoom
- growX
- growY
- scrollUp
- scrollDown
- scrollLeft
- scrollRight
- scrollHorz
- scrollVert
- shuffle
- slideX
- slideY
- toss
- turnUp
- turnDown
- turnLeft
- turnRight
- uncover
- wipe
- zoom

#### First You Need To Download

The latest <a href="https://jquery.com/download/" class="btn btn-outline-dark" target="_blank" rel="noopener">jQuery Version</a>  

Then the latest <a href="http://jquery.malsup.com/cycle/download.html" class="btn btn-outline-dark" target="_blank" rel="noopener">jQuery Cycle v.1</a> javascript file.  
**(Include this file after you include the latest jQuery file)**  

#### Getting It To Work
{% highlight html %}
<!-- include jQuery library -->
<script type="text/javascript" src="path/to/latest/jquery"></script>

<!-- include Cycle plugin -->
<script type="text/javascript" src="path/to/latest/jquery/cycle/js"></script>
{% endhighlight %}

Then you are going to want to set the images that you would like to display. Place those images inside a div with an ID or Class.  

{% highlight html %}
<div class="slideshow">
  <img src="path/to/beach1.jpg" width="200" height="200" alt="" title="">
  <img src="path/to/beach2.jpg" width="200" height="200" alt="" title="">
  <img src="path/to/beach3.jpg" width="200" height="200" alt="" title="">
  <img src="path/to/beach4.jpg" width="200" height="200" alt="" title="">
  <img src="path/to/beach5.jpg" width="200" height="200" alt="" title="">
</div>
{% endhighlight %}

Then you are going to want to go back to the header, and place this right after the include line of the jQuery Cycle js file.

{% highlight javascript %}
<script type="text/javascript">
$(document).ready(function() {
  // init cycle library
  $('.slideshow').cycle({
    fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
  });
});
</script>
{% endhighlight %}

If you do everything above correctly, then you will get an image slide show that fades in and out. A very basic one :)  
