---
layout: post
title: "Using Twitter Bootstrap - Beginners Part 1"
date: 2013-01-26 02:19:14 -0500
excerpt: Twitter Bootstrap for beginners part 1, step by step tutorial
comments: true
categories: css
tags: css bootstrap jquery html howto code
---
Here is a beginners tutorial on how to use Twitter Bootstrap on your site. First: <a href="https://getbootstrap.com/2.3.2/" class="btn btn-default" target="_blank" rel="noopener">Download Bootstrap</a>  

Then we need to get the latest version of jQuery: <a href="https://jquery.com/download/" class="btn btn-default" target="_blank" rel="noopener">Download jQuery</a>  

#### Twitter Bootstrap Turorial: 101  

Now we can start! Once you have downloaded the bootstrap package and unzipped it, the folder contents should look something like the following:  

{% highlight html %}
bootstrap/
  ├── css/
  │   ├── bootstrap.css
  │   ├── bootstrap.min.css
  │   ├── bootstrap-responsive.css
  │   ├── bootstrap-responsive.min.css
  ├── js/
  │   ├── bootstrap.js
  │   ├── bootstrap.min.js
  └── img/
      ├── glyphicons-halflings.png
      └── glyphicons-halflings-white.png
{% endhighlight %}

Slap that up on your server or on your localhost, and open up the file you want to have bootstrap on. If you don't have any of that, lets create a Hello World File.  

Create a file and call it `index.html` and place the following into it, [Creating A Simple HTML Page](/html/creating-a-simple-html-page.html)  

Now lets add the **Bootstrap Framework**  

First we need to add this line to the very top of the file, right before the opening HTML tag:  

{% highlight html %}
<!DOCTYPE html>
{% endhighlight %}

This is the new DOCTYPE for HTML5  

Next add the `.css` file for bootstrap inside your head tag  

{% highlight html %}
<link href="/css/bootstrap.min.css" rel="stylesheet">
{% endhighlight %}

Now add this in the place of the `H1` tag inside the `BODY` tag  

{% highlight html %}
<div class="container">
  <h1>Hello Bootstrap!</h1>
</div> <!-- /container -->
{% endhighlight %}

One final step, adding the jQuery files. Place these two lines right before the closing body tag `</body>`  

{% highlight html %}
<script src="/js/jquery.js"></script>
<script src="/js/bootstrap.min.js"></script>
{% endhighlight %}

BAM! You are done, you have now created your first Bootstrap page!

If you noticed the use of the .min (minified) version of the file, that is because the file is small and will load a lot faster, and should be used on all production servers, if you need to edit the files, use the files without the .min. Just an FF for you.

But we are no where near finished, there is so much more that can be done with Bootstrap. There is still the responsive layout css file to include, a meta tag for the viewpoint, etc... So that your site looks good on different screen sizes, take a look at the next article, [Using Twitter Bootstrap - Responsive Layouts](/css/using-twitter-bootstrap-responsive-layouts.html).
