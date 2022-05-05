---
layout: post
title: "How to stop event actions from firing on an element with jQuery"
date: 2013-08-08 01:25:22 -0500
excerpt: Stopping the browser default events from firing with javascript
categories: jquery
tags: javascript jquery code howto
---
Today, I want to talk about stopping the browser default **events from firing** whenever an element is clicked or caused to fire by the browser. With just a couple easy lines of code to add to your jQuery/javascript function.  

This is also how you can get rid of the **hash tag showing up in the url** whenever you click on an `<a>` link with a href hash tag `#`.  

#### jQuery Example to Prevent Default

{% highlight javascript %}
<script type="text/javascript">
  // click event example
  $('#mybutton').click(function(event){
    event.preventDefault();
    // continue on with event
  });
</script>
{% endhighlight %}

And of course Internet Explorer (IE) does not like this way, so for people who want it to work on IE (I am sadly one of those people), we need to add just a few more lines. Check if event.preventDefault is set, and if not (it's IE), so let's use something it likes...  

{% highlight javascript %}
<script type="text/javascript">
  // click event example
  $('#mybutton').click(function(event){
    if(event.preventDefault){
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
    // continue on with event
  });
</script>
{% endhighlight %}

Make sure your function has the event function var in it's params, such as function(e){, so if it is e instead of event, then it would be **e.preventDefault()**. It can be named whatever, just make sure you take a look at it.  
