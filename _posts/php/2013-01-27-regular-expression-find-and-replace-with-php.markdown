---
layout: post
title: "Regular Expression Find And Replace With PHP"
date: 2013-01-27 21:07:18 -0500
excerpt: How to find and replace characters within a string with php
categories: php
tags: php regex code howto
---
Today, I wanted to show you a good one line to find and replace characters not wanted in a string or filename within PHP.  

The below regular expression only accepts numbers and letters. It will replace the spaces and periods in this example string replace.  

{% highlight php %}
<?php
  $string = ' this is all...';
  $new_string = preg_replace('/[^A-Za-z0-9]/', '_', $string);

  echo $new_string;

  // which outputs: _this_is_all__
?>
{% endhighlight %}

To take it a bit further, look at the next few lines. I started to see if there were characters not wanted in the string that were side by side, we would get the replace characters next to each other. To remedy this, we can have the **str_replace** function that looks for double and triple replace characters beside one another, and replace it with the single replace character (lines 1 & 2).  

{% highlight php %}
<?php
  $new_string = str_replace('__', '_', $new_string);
  $new_string = str_replace('___', '_', $new_string);

  echo $new_string;

  // which outputs: _this_is_all_
?>
{% endhighlight %}

Then we need to trim the replace character from the beginning and end of string with this line.  

{% highlight php %}
<?php
  $new_string = trim($new_string, '_');

  echo $new_string;

  // which outputs: this_is_all
?>
{% endhighlight %}

That will do it! Hope this helped.  
