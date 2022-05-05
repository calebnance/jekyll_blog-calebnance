---
layout: post
title: "Using jQuery's No Conflict"
date: 2011-07-28 01:01:52 -0500
excerpt: Why should I use no conflict with jquery
categories: jquery
tags: jquery code howto
---
There are several different reasons to use this practice in your code whenever working with jQuery. I write a lot of components and modules for Joomla! and when working with any CMS, you need to think of any possible way something could break. With the jQuery library, a custom js file or another library like Mootools could break it because of the common use of the `$` designated function starter. So to avoid this from happening jQuery has provided a function called noConflict(). There are many ways to go about using it, and you can find those different ways at [http://api.jquery.com/jQuery.noConflict/](http://api.jquery.com/jQuery.noConflict/).

I tend to use this form of noConflict() 9 out of 10 times. It has never given me problems and whenever I do get some conflict in libraries I pop this code in and it works like a charm.

{% highlight javascript %}
<script type="text/javascript">
  var cn_blog = jQuery.noConflict();
  cn_blog(document).ready(function() {
  	cn_blog("div p").hide();
  });
</script>
{% endhighlight %}

So what we are doing is setting the noConflict to the variable `cn_blog` this takes the place of the `$`. So anywhere in your jQuery function that is being used with this noConflict, you need to replace the `$` with the variable you set to noConflict(), in this example it would be `cn_blog`.  

Another library can be called before or/and after this and it will have no effect.  

Hope this helps!  
