---
layout: post
title: "Creating A Chatbot with Twilio - Part 2"
date: 2018-09-01 21:25:02 -0500
excerpt: creating a chatbot with twilio, lumen, mamp and ngrok
comments: true
categories: php
tags: code howto php mamp lumen laravel
---
Today I wanted to continue my 2 part Chatbot tutorial, <a href="{{ "/php/creating-a-chatbot-with-twilio-lumen-and-ngrok-part-1.html" | relative_url }}">start at part 1</a>.

### Using ngrok

I had to get the [pro version of ngrok](https://ngrok.com/pricing) for my usage, here is the command I run to get the tunneling working:

{% highlight conf %}
./ngrok http -host-header=rewrite -hostname=[yourhostname].ngrok.io [localinstancepath]:4444
{% endhighlight %}

Let's breakdown the above command:

* **[yourhostname]:** replace this with whatever you set your Reserved domain to within ngrok logged in panel. (remember to remove the [])
* **[localinstancepath]:** this will be the path to your locally served site. (maybe localhost:4444), with port set to 4444.

**Make sure this flag is set:** `-host-header=rewrite`

### Setting up Twilio

dash
