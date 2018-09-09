---
layout: post
title: "How To Get A Joomla 2.5 Article Title In Template"
date: 2013-02-11 10:11:12 -0500
updated: 2013-02-12 11:01:24 -0500
excerpt: Joomla 2.5 access to article title within template
comments: true
categories: joomla-2.5
tags: php joomla joomla25 code howto
---

Today I had to get the title for an article in Joomla 2.5 for my template, I was having to display the title somewhere else, so here is some php code that will do just that!

{% highlight php %}
// get option and view
$option = JRequest::getVar('option');
$view = JRequest::getVar('view');

// make sure it is a single article
if ($option == 'com_content' && $view == 'article'):
  $id = JRequest::getInt('id');
  $article =& JTable::getInstance('content');
  $article->load($id);
  $article_title = $article->get('title');
endif;
{% endhighlight %}

This will work anywhere you need it to. I just needed it for my template, but it could work in a **module, plugin or component**.

***EXTRA:*** And this can be used for getting any type of information from the article, not just the title. You can use this and get any of the fields linked with the article, just replace the get('title'); with the field name you need, as follows:

{% highlight php %}
// get other article fields
$article_alias = $article->get('alias');
$article_introtext = $article->get('introtext');
$article_fulltext = $article->get('fulltext');
{% endhighlight %}
