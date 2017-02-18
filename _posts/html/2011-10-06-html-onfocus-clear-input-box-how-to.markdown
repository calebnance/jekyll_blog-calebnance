---
layout: post
title: "HTML OnFocus Clear Input Box How To"
date: 2011-10-06 20:03:14 -0500
excerpt: Onfocus and onblur events within an input html element
comments: true
categories: html
tags: html javascript howto
---
This line of code is an example of a inputbox that has a default text in it, until the user clicks on it and then it sets itself to nothing. This is very useful if you want to have default text in your inputbox.  

{% highlight html %}
<input type="text" value="Email Address" onfocus="if(this.value==this.defaultValue) this.value='';">
{% endhighlight %}

Also if they click out of the box, and they did not fill anything out then click away to another box or area, you can put this in, and it will put whatever you want back in there.  

{% highlight html %}
<input type="text" value="Email Address" onblur="if(this.value=='') this.value='Email Address';">
{% endhighlight %}
