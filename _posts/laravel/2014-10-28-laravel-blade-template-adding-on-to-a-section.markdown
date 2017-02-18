---
layout: post
title: "Laravel Blade Template - Adding On To A Section"
date: 2014-10-28 12:20:24 -0500
excerpt: Laravel add onto a section within blade template, without overriding
comments: true
categories: laravel
tags: laravel php unit-test xml
---
Today, I wanted to show you how to add onto the `@section` of a **blade template** without overriding anything that is inside the section in the **"master"** layout blade file!  

Below is the example **"master"** layout blade file:  
{% highlight html %}
<!-- app/views/layouts/master.blade.php -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Master Blade Layout File</title>
    @section('styles')
      <link rel="stylesheet" href="/assets/css/styles.css" />
    @show
  </head>
  <body>
    @section('body')
      <h1>Hello World</h1>
    @stop
  </body>
</html>
{% endhighlight %}

Now let's say we want to add a stylesheet for just our single view and keep all that is included in our **"master"** template file, we would have the following file created for our view with the following to add the css file and not override everything within the `@section('styles')`.  

{% highlight html %}
<!-- app/views/layouts/admin/dashboard.blade.php -->

@extends('layouts.master')
  @section('styles')
    @parent
    <link rel="stylesheet" href="/assets/css/dashboard-styles.css" />
  @show

  @section('body')
    <h1>Dashboard Admin Panel</h1>
  @stop
{% endhighlight %}

By adding the `@parent` inside the `@section('styles')` you are including everything like we wanted in the "master" template file! And then everything works exactly how you would expect it to, if you add files before or after the `@parent`, it will show up before or after.

I hope this helped! Comment below with any questions or for any information to add to this article. I have more Laravel articles coming!
