---
layout: post
title: "How To Have A Fixed Div On Footer Of Website"
date: 2013-01-26 23:56:19 -0500
excerpt: Fixed footer div on website with css
categories: css
tags: html css howto
---
I recently added Bootstrap to my blog. I placed two ads on the blog, one for desktop and one for mobile. Whenever the mobile view was active, I wanted the ad to just stick to the bottom, so I added the following to the div around the mobile ad, into my css.  

{% highlight css %}
#footer {
  position:fixed;
  left:0px;
  bottom:0px;
  height:30px;
  width:100%;
  background:#999;
}
{% endhighlight %}

The markup would look something like this:  

{% highlight html %}
<div id="footer">
  Content for this div here.
</div>
{% endhighlight %}

Source: [CSS-Tricks](https://css-tricks.com/snippets/css/fixed-footer/)
