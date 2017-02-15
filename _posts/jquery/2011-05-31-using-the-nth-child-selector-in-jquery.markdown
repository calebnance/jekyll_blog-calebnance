---
layout: post

title: "Using The :nth-child() Selector In jQuery"

date: 2011-05-31 11:11:23 -0500

excerpt: Using the nth child selector in jquery

comments: true

categories: jquery
tags: code howto jquery help
---
This is a very useful function and can be used with a lot of things. I have recently used it with an image gallery I was doing.  

I wanted to put some special effects on the first image of a gallery (making it fade in as soon as the page loaded). So you can use it for those kinds of things (images) or just simple text edits or additions. The possibilities are endless with jQuery, half the battle is just knowing what is out there..  

I explain it with an example of a very simple way of using it.  

`html:`
{% highlight html %}
<ul>
   <li>Red Hot Chili Peppers<li>
   <li>Band of Horses</li>
   <li>Cold War Kids</li>
   <li>Death Cab For Cutie</li>
   <li>The Walkmen</li>
   <li>The Strokes</li>
</ul>
{% endhighlight %}

`javascript:`
{% highlight javascript %}
<script>
 $("ul li:nth-child(2)").append("<span> - Ben Bridwell (vocals and guitar)</span>");

 $("ul li:nth-child(2)").append("<span> - Ben Bridwell (vocals and guitar)</span>")
 .css('color','#099');

 $("ul li:nth-child(3)").append("<span> - Nathan Willett (vocals)</span>");

 $("ul li:nth-child(4)").append("<span> - Ben Gibbard (vocals)</span>")
 .css('color','#00F');

 $("ul li:nth-child(5)").append("<span> - Hamilton Leithauser (vocals)</span>");

 $("ul li:nth-child(6)").append("<span> - Julian Casablancas (vocals)</span>")
 .css('color', '#3A2CB5');
</script>
{% endhighlight %}

#### View on Codepen
<p data-height="265" data-theme-id="dark" data-slug-hash="xgBOWd" data-default-tab="js,result" data-user="calebnance" data-embed-version="2" data-pen-title="Using The :nth-child() Selector In jQuery" data-preview="true" class="codepen">See the Pen <a href="https://codepen.io/calebnance/pen/xgBOWd/">Using The :nth-child() Selector In jQuery</a> by calebnance (<a href="http://codepen.io/calebnance">@calebnance</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
