---
layout: post
title: "Using Twitter Bootstrap - Understanding Scaffolding"
date: 2013-01-26 03:18:29 -0500
excerpt: Twitter Bootstrap and scaffolding classes
comments: true
categories: css
tags: bootstrap html css howto
---
#### Requires HTML5 doctype
This needs to be at the start of every page with all of your projects.  

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

#### Using the Grid System - Basics
Think of everything in terms of 12. There are 12 blocks for the width of the website. Once you have the bootstrap and responsive files added to your project, you want to style it.  

Here is an example of a row with Bootstrap in your mark up. A basic left column and main content on the right. Once the site is viewed on a smaller device, the two blocks are stacked on top of each other, left on the top.  

{% highlight html %}
<div class="container">
  <div class="row">
    <div class="span4">...</div>
    <div class="span8">...</div>
  </div>
</div>
{% endhighlight %}

#### Using the Fluid Layout
This is easy to add and the example is actually this whole site, I have the fluid container on this site. This layout is the use of the whole screen, it stretches to the width of the screen. So to achieve this you want to add "-fluid" after the class="row" looks like this:  

{% highlight html %}
<div class="container-fluid">
  <div class="row-fluid">
{% endhighlight %}

Source: [Bootstrap Scaffolding](http://twitter.github.com/bootstrap/scaffolding.html)
