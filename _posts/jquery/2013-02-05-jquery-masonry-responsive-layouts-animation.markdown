---
layout: post
title: "jQuery Masonry - Responsive Layouts Animation"
date: 2013-02-05 10:22:12 -0500
excerpt: How to implement jquery masonry easy step by step
comments: true
categories: jquery
tags: javascript jquery responsive layouts howto
---
I recently used this really cool jQuery library for a site and just loved how easy it was to use. Here is the <a href="http://masonry.desandro.com/" target="_blank">project homepage</a>.

I was working with a lot of different sized images, and wanted to have a **"Pinterest" brick laying look** to the display, so I did a little Google searching and found this.  

#### What It Does

It basically looks at the div's or images you have in a list (all with the same class) and takes the layout to it's minimal space required to lay them all out. Much like a brick or stone house... hence the name... Masonry)

#### How To Implement
Like I said, it is very easy to get this working on your site. I had it up and running in about 5 minutes, and tweaking it to make  it even display better doesn't take much more time either.  

You first need to have jQuery v1.4.0< - the most recent version at this posting is <a href="https://code.jquery.com/jquery-1.9.1.min.js" class="btn btn-default" target="_blank">jQuery v1.9.1</a>

Then you need to download <a href="https://github.com/desandro/masonry" class="btn btn-default" target="_blank">Masonry</a>

We are ready to code... The following is the simplest example to get this to work on your site.  

{% highlight javascript %}
<script src="/js/jquery-1.9.1.min.js"></script>
<script src="/js/jquery.masonry.min.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $('#container').masonry({
      itemSelector: '.box'
    });
  });
</script>
{% endhighlight %}

This will have all the div's or images with the class="box" inside the element with an id="container" displayed using masonry! That is how easy it is.  

#### Animating with jQuery Masonry
Now let's get into the cooler parts of this already impressive library. Let's say you want the images to float and transition to the new layout whenever the screen is resized, this will do just that!  

By adding the following code, you will see the animation come to life.  

{% highlight javascript %}
<script type="text/javascript">
  $('#container').masonry({
    itemSelector: '.box',
    isAnimated: true
  });
</script>
{% endhighlight %}

#### Animation Options with jQuery Masonry
Here are even more options you can play around with. The transitions and how long it takes to animate! Linear easing just makes for a lot smoother transition in my opinion.  

{% highlight javascript %}
<script type="text/javascript">
  $('#container').masonry({
    itemSelector: '.box',
    isAnimated: true,
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
</script>
{% endhighlight %}

That it about it. There are a few more options and a lot of functionality with this library I didn't cover, but check out his site! I covered the helpful and most practical parts, but please visit his project. Very impressed! Hope this helps.  
