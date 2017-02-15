---
layout: post

title: "Get Height or Width of Div With jQuery"

date: 2013-02-07 10:47:32 -0500

excerpt: How to get the current height and/or width of an element using jQuery

comments: true

categories: jquery
tags: help code howto javascript jquery
---
Today I want to show you how to get the current height and/or width of an element with jQuery and also how to constantly check the **height and width of an element** as the page is being resized!  

First I want to show you how easy it is to get the height and width of the element. The following code does just that.  

{% highlight javascript %}
<script>
  // get height
  var currentHeight = $('.element_class').height();

  // get width of image inside a div
  var currentWidth = $('.div_class img').width();
</script>
{% endhighlight %}

Now lets say you need to refresh your CSS positioning when the screen is being resize... this is how you check and update the value of that element everything the screen is resized, with the resize() function in jQuery.  

{% highlight javascript %}
<script>
  $(window).resize(function() {
    var currentWidth = $('.div_class img').width();
  });
</script>
{% endhighlight %}

That will do it! Hope this helped.
