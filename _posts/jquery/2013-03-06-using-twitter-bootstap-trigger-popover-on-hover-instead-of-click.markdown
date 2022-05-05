---
layout: post
title: "Using Twitter Bootstrap - Trigger Popover On Hover Instead Of Click"
date: 2013-03-06 23:52:50 -0500
updated: 2013-11-23 07:09:24 -0500
excerpt: How to trigger the popover on hover in bootstrap framework with javascript
categories: jquery
tags: javascript jquery bootstrap howto
---
Today I just wanted to do a quick write up of how to trigger the **Popover on Hover** for Twitter Bootstrap.

Below are two ways this can be done:
<br><br>
`HTML:` inside the markup add the **data-trigger="hover"**
{% highlight HTML %}
<a id="popover" data-trigger="hover">Popover</a>
{% endhighlight %}
<br>

`jQuery:` Add a **trigger: 'hover'**
{% highlight JavaScript %}
<script type="text/javascript">
  $('#popover').popover({
    trigger: 'hover'
  });
</script>
{% endhighlight %}
