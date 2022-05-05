---
layout: post
title: "Using jQuery Mousetrap for Key Commands on Your Website"
date: 2013-07-16 11:41:33 -0500
excerpt: Library, Mousetrap. It allows you to add keyboard shortcuts to your website
categories: jquery
tags: javascript jquery html howto
---
Today I want to talk about this new (super small) jQuery Library, Mousetrap. It allows you to **add keyboard shortcuts to your website**!

First you want to download <a href="https://github.com/ccampbell/mousetrap" class="btn btn-outline-dark" target="_blank" rel="noopener">mousetrap.min.js</a>

Also, it is dependent on the jQuery library <a href="https://jquery.com/download/" class="btn btn-outline-dark" target="_blank" rel="noopener">Download jQuery</a>

Here is the simplest call for mousetrap, just a key stroke and it fires off a jQuery function or alert.

{% highlight JavaScript %}
<script type="text/javascript">
  // single key set
  Mousetrap.bind('a', function() {
    alert('You have pressed a!');
  });
</script>
{% endhighlight %}

Let's say you have a form where your users can edit and you want to add a CTL + S command like most computer applications... Here is how that would be done.

{% highlight JavaScript %}
<script type="text/javascript">
  // multi-key set
  Mousetrap.bind('ctrl+s', function(e) {
    alert('My first multi-key function call!');
  });
</script>
{% endhighlight %}

Now if you ran the above example, then you probably noticed your browser still wanted to save the page document! That is because the CTL + S is a set command in your browser for saving (just like I said with most applications). So you are going to need to add just a few more lines to stop this default action from firing in your browser. **(NOTE: This is only needed for when the browser already has that key combo set.)**

{% highlight JavaScript %}
<script type="text/javascript">
  // multi-key set
  Mousetrap.bind('ctrl+s', function(e) {
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // internet explorer
      e.returnValue = false;
    }
    alert('My first multi-key function call!');
  });
</script>
{% endhighlight %}

My last example will be a step further, the above example will fire on a Windows and Mac(if the control key is hit on the Mac), but most applications on a Mac use the command + S to save, so I will show you two examples of this being able to happen!

{% highlight JavaScript %}
<script type="text/javascript">
  // multiple key commands to the same function
  Mousetrap.bind(['ctrl+s', 'command+s'], function(e) {
    // do stuff
  }
</script>
{% endhighlight %}

This second example uses mod, so for Mac it maps to the Command key and Windows/Linux it maps to the CTRL key.

{% highlight JavaScript %}
<script type="text/javascript">
  // multiple key commands to the same function
  Mousetrap.bind('mod+s', function(e) {
    // do stuff
  }
</script>
{% endhighlight %}

That is it for now, I just think this is a cool little feature that some of your users might not expect! And so easy to implement.

The homepage for this project is [http://craig.is/killing/mice](http://craig.is/killing/mice)
