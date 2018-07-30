---
layout: post
title: "Creating A Chatbot with Twilio - Part 1"
date: 2018-07-28 20:15:02 -0500
excerpt: creating a chatbot with twilio, lumen, mamp and ngrok
comments: true
categories: php
tags: code howto php mamp lumen laravel
---
Today I wanted to share a really fun side project I did as part of a surprise birthday present.

It involves four toolings total.

* the php micro-framework: [Lumen](https://lumen.laravel.com)
* the local server environment: [MAMP](https://www.mamp.info/en/)
* SMS API: [Twilio](https://www.twilio.com/)
* service for tunneling to your localhost webhook: [ngrok](https://ngrok.com/)

## The Idea

To create a chatbot (I wanted to call it [Woodhouse](http://archer.wikia.com/wiki/Woodhouse)) that they could text at any point of the day for food ideas, music... etc.

And at the end of this tutorial series, you'll have all the knowledge to create your own chatbot...

### Setting Up Our Local Environment

If you don't have MAMP installed on your machine, I suggest you take a break and [download it](https://www.mamp.info/en/downloads/) now. Once your [localhost](http://localhost/) is up and running, we can now install Lumen.

***NOTE:*** Lumen requires PHP >= 7.1.3.

### Setting Up Lumen

### Routing and Creating Our Logic Controller
