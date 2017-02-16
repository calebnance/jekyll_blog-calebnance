---
layout: post
title: "Very Easy Accordion With jQuery From Scratch"
date: 2013-01-27 17:07:22 -0500
excerpt: Super simple accordion using jquery
comments: true
categories: jquery
tags: javascript jquery html howto
---
This is an accordion I wrote for a site a while back. I turn to this code every time I need a quick and easy accordion for a site.  

#### Step 1

Here is what the html markup will look like, a header div then a div right after that will hold all of the content of the slide accordion.   

{% highlight html %}
<div class="accordion">
  <div class="accord-header">Header 1</div>
  <div class="accord-content">This is the content for the first header.</div>
  <div class="accord-header">Header 2</div>
  <div class="accord-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
</div>
{% endhighlight %}

#### Step 2

Then to make it all work, we need to add this easy jQuery script.  

{% highlight javascript %}
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $(".accordion .accord-header").click(function() {
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideUp("slow");
      } else {
        $(".accordion .accord-content").slideUp("slow");
        $(this).next("div").slideToggle("slow");
      }
    });
  });
</script>
{% endhighlight %}

#### Step 3

The only CSS that is required for this to work properly is the following:  

{% highlight css %}
.accord-content { display: none; }
{% endhighlight %}

This just hides the content right off the bat, as soon as the page loads, then once the header div is clicked, you will see the content slide down.  

#### View Codepen Demo
<p data-height="348" data-theme-id="dark" data-slug-hash="nbwGh" data-default-tab="js,result" data-user="calebnance" data-embed-version="2" data-pen-title="Easy Accordion With jQuery" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/calebnance/pen/nbwGh/">Easy Accordion With jQuery</a> by calebnance (<a href="http://codepen.io/calebnance">@calebnance</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
