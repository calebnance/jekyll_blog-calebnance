---
layout: post
title: "HTML Code For Checking If the Browser Is Internet Explorer"
date: 2011-10-06 20:00:01 -0500
excerpt: Internet Explorer browser specific checkers with html comment code
categories: html
tags: html browser howto
---
Here are the examples on how to check if the user is using any Internet Explorer browser or a specific one with only HTML code.  

{% highlight html %}
<!--[if IE]>
   This checks for Internet Explorer
<![endif]-->

<!--[if lte IE 6]>    
  This checks for less than or equal to Internet Explorer 6
<![endif]-->

<!--[if IE 7]>
  This checks for Internet Explorer 7
<![endif]-->
{% endhighlight %}

Example of use:  

{% highlight html %}
<!--[if lte IE 6]>
    <link rel="stylesheet" type="text/css" href="/css/ie6-hacks.css" />
<![endif]-->
{% endhighlight %}
