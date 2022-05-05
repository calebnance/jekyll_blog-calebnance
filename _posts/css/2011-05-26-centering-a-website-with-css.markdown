---
layout: post
title: "Centering A Website With CSS"
date: 2011-05-26 17:10:01 -0500
excerpt: Easiest way to center a div or image on a website with css
categories: css
tags: css html howto code
---
I just have been doing a lot of website layouts lately at work and thought I would go over some very basic but important stuff when it comes to CSS. I will be showing you how to center a website using only CSS to do so.  

First you want to make a "wrapper" div around everything that you would like centered. How I like to do it is right after the `<body>` tag, place a div called `<div id="wrapper">`. Once that is in place, in the heading of your document or CSS document, place the following:  

{% highlight css %}
#wrapper {
  margin: 0 auto;
  width: 999px;
}
{% endhighlight %}

Only have those two things inside that div and you will get the site to be centered. You can change the width to be whatever you need it to be. But the 999px is a standard width for a site. Now that the wrapper is in place, put all the content that you would like centered. Now no matter what you put inside the div, it will all be centered. Layouts with divs are where everything is going now, and this is a good step to know how to make div layouts of sites rather than HTML tables. Try the full code out below to see a pre-written example I did for you. Hope this helped :)  

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <style>
      #wrapper {
        margin: 0 auto;
        width: 999px;
      }
    </style>
  </head>
  <body>
    <div id="wrapper">
      This content will be centered.
    </div>
  </body>
</html>
{% endhighlight %}
