---
layout: post
title: "Using Twitter Bootstrap - Internet Explorer 6, 7 & 8 Support"
date: 2013-01-27 01:01:59 -0500
excerpt: Bootstrap html5 support for Internet Explorer 6/7/8 and up
comments: true
categories: html
tags: bootstrap html css howto
---
With the implementation of Bootstrap, there are HTML5 elements being used, we need to add support for this...  

I hate the use of Internet Explorer as much as the other developer, but we still need to code for it for our clients and users who don't know what is going on :)  

The following is a javascript file that will help support HTML5 elements in Internet Explorer 6, 7 and 8 that are used by Twitter Bootstrap.  

{% highlight html %}
<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
{% endhighlight %}

That is it, just add that right before your end head tag `</head>`.  
