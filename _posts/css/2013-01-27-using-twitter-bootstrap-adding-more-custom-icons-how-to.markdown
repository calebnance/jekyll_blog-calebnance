---
layout: post
title: "Using Twitter Bootstrap - Adding More Custom Icons - How To"
date: 2013-01-27 21:26:39 -0500
excerpt: Adding more custom icons to glyphicons bootstrap twitter
comments: true
categories: css
tags: bootstrap html css howto
---
Lets say you like the icons used for Twitter Bootstrap but you bought the Glyphicons Pro Version (which I have and highly recommend it, he sends you each new version that comes out for free!) or have an icon that you want to be able to add to your content, then this is how you would go about adding more icons to your Twitter Bootstrap framework!  

First you want to make sure your icon is 14px by 14px. Then you will want to place these lines into your CSS file.  

{% highlight css %}
.icon-car {
  background-image: url('../path/to/icons/icon.png');
  background-position: center center;
  height: 14px;
  width: 14px;
}
{% endhighlight %}

The class **"icon-car"** is to be replaced by whatever you want to call your new icon class.  

Now an implementation of this is as follows!  

{% highlight html %}
<i class="icon icon-car"></i>
{% endhighlight %}

You want to make sure the icon is a **transparent png**, and if you are exporting it from Photoshop, make sure you save it for web devices.  
