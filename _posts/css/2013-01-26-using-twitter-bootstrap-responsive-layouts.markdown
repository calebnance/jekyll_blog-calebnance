---
layout: post
title: "Using Twitter Bootstrap - Responsive Layouts"
date: 2013-01-26 02:49:21 -0500
excerpt: Responsive css file of bootstrap easy step how to make it work
comments: true
categories: css
tags: html css responsive bootstrap howto
---
We will now talk about including the **responsive css file of bootstrap**, this is a pretty easy step, but still a good reminder of the things you need to add to make it all work.  

#### Adding bootstrap-responsive.css
This line will go right under the **bootstrap.min.css** file:  

{% highlight html %}
<link href="/css/bootstrap-responsive.min.css" rel="stylesheet">
{% endhighlight %}

Next we need to add one of the most important lines for the responsive layout to work properly on devices and desktops, place this anywhere inside the head tag `<head>`.  

{% highlight html %}
<meta name="viewport" content="width=device-width, initial-scale=1.0">
{% endhighlight %}

This line sets the page to scale to the actual dimensions of the screen size of the viewing device's width.  

Now you are fully responsive on your webpage, these are two easy steps, but also the biggest!  

**Scaffolding** is next, understanding it and implementing it properly.. [Understanding Scaffolding](/css/using-twitter-bootstrap-understanding-scaffolding.html).
