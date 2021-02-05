---
layout: post
title: "Laravel - Run a Single Test in PHPUnit"
date: 2020-09-03 08:20:24 -0500
excerpt: running a single test in Laravel with PHPUnit
comments: true
categories: laravel
tags: laravel php unit-test seeder
---

Today I wanted to share a quick snipped on how to run a single test in Laravel with PHPUnit.

{% highlight conf %}
vendor/bin/phpunit --filter SearchTest
{% endhighlight %}

As you see you can use the filter flag to run a single test from filename.

Hope this helped!
