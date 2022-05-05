---
layout: post
title: "Creating A Chatbot with Twilio - Part 2"
date: 2018-09-01 21:25:02 -0500
excerpt: creating a chatbot with twilio, lumen, mamp and ngrok
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

Now head on over to Twilio and secure yourself a number to text. Then within Twilio's Dashboard, go to:

**Programmable SMS** -> **Tools** -> **Create TwiML Apps**

You should see something like this:
<div class="img-wrapper">
  <img class="img" src="/assets/img/chatbot/twilio-dashboard.png" alt="twilio dashboard TwiML app">
</div>

This is where you will want to set up the app and the expected **Request URL** for said app.

After you get access to a number, you will want to go to the Phone Numbers section:

**...** -> **Phone Numbers** -> **Click on your active number**

Then scroll down until you see something like this:
<div class="img-wrapper">
  <img class="img" src="/assets/img/chatbot/twilio-manage-numbers.png" alt="twilio manage numbers">
</div>

This is where you can link the number to whichever request url you'd like to test. So whenever you text this number, the message that you send will then hit this webhook that you set.

To grab that message, add something like this to within your controller (wherever you have the webhook hitting). Please keep in mind again, as said in part 1, this webhook needs to be set as a post() route within Larvel/Lumen (or whatever you are using as your backend).

{% highlight php %}
$response = new Twiml();
$message = $response->message();
$textString = $request->input('Body');
{% endhighlight %}

Of course, after all of this localhost testing with ngrok tunneling, you will want to change these webhooks to be the URLS of where they will actually live. But this is a great way to use ngrok as a production mask, that tunnels to your localhost environment as a quick and easy local sandbox!! So cool!

That's it! Have ALL the fun with the actual logic paths and return text! Start a conversation with your chatbot...
