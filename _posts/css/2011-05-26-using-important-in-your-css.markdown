---
layout: post
title: "Using !Important In Your CSS"
date: 2011-05-26 17:11:31 -0500
excerpt: Important within your css files how to
comments: true
categories: css
tags: css howto code
---
Another very good CSS practice to know is the `!important` attribute. It can be very useful, especially if you are using a CMS or wanting to make sure that a certain attribute of a class or id does not get overwritten.  

How CSS works: Normally CSS will take the very last occurrence of a id or class and make that the style of the element. With using the !important attribute, it is the loophole to this rule. Basically what it does is make sure that no matter what, the color or padding or whatever you decide to use the !important attribute on does not get overwritten by another call of the same class or div later in the stylesheet or someone else's style sheet (if using a CMS with multiple stylesheets being called on a page).  

Example:

{% highlight css %}
p {
  color: #ff0!important;
}
p {
  color: #000;
}
{% endhighlight %}

The above example shows that the paragraphs being displayed should be the color black `#000` because it is the last p tag being called on the stylesheet, but since we have the !important attribute on the first p tag color then the paragraphs content will actually be yellow `#ff0`.  

There are a lot of ways that this attribute can be used, many examples to show but this is the easiest. It's more about knowing the tools that are available that you can use and then it will then be more evident on where you can use them. Hope this helped!  
