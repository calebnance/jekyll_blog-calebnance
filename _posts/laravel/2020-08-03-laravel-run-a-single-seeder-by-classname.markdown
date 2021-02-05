---
layout: post
title: "Laravel - Run a Single Seeder by classname"
date: 2020-08-03 10:20:24 -0500
excerpt: running a single seeder in Laravel from classname
comments: true
categories: laravel
tags: laravel php seeder seed
---

Below is how to run a single seeder from your command line:

{% highlight conf %}
php artisan db:seed --class=PokemonCardsPricingTableSeeder
{% endhighlight %}

In the above command, you would need to replace the **--class=** value to what your classname is.

That's it! Short and sweet. Cheers 🍻
