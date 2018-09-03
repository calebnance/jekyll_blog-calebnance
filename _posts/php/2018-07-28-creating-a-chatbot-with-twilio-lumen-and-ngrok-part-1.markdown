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

* the local server environment: [MAMP](https://www.mamp.info/en/)
* the php micro-framework: [Lumen](https://lumen.laravel.com)
* SMS API: [Twilio](https://www.twilio.com/)
* service for tunneling to your localhost webhook: [ngrok](https://ngrok.com/)

## The Idea

To create a chatbot (I wanted to call it [Woodhouse](http://archer.wikia.com/wiki/Woodhouse)) that they could text at any point of the day for food ideas, music... etc.

And at the end of this tutorial series, you'll have all the knowledge to create your own chatbot...

### Setting Up Our Local Environment

If you don't have MAMP installed on your machine, I suggest you take a break and [download it](https://www.mamp.info/en/downloads/) now and read my article on <a href="{{ "/php/setting-up-a-local-server-environment-with-mamp.html" | relative_url }}">project environment setup</a>. Once your [localhost](http://localhost/) is up and running, we can now install Lumen.

***NOTE:*** At the time of writing this article, Lumen 5.6 requires PHP >= 7.1.3.

### Setting Up Lumen

Head over to Lumen's docs on [installing Lumen](https://lumen.laravel.com/docs/5.6/installation). Once it's installed, and you navigate to the lumen site in your favorite browser, you should see something like this: `Lumen (5.6.3) (Laravel Components 5.6.*)` we can move to the next section.

### Routing and Creating Our Logic Controller

First we need to create a route we are going to use for the Twilio webhook, let's call it logic. So head over to the file: `/routes/web.php` within our new Lumen site and edit the base route and add a new route as shown below:

{% highlight php %}
<?php
$router->get('/', function () use ($router) {
  // empty homepage
  return '';
});

$router->post('logic', ['uses' => 'LogicController@base']);
{% endhighlight %}

Cool cool, now we have emptied the http://yoursite/ route and created a http://yoursite/logic route (that accepts only POST methods) that points to our non-existent **LogicController**. Let's change that, head over to `/app/Http/Controllers/` directory and create the following file named: **LogicController.php**.

{% highlight php %}
<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

class LogicController extends Controller {
    public function __construct() {

    }

    public function base(Request $request) {

      return 'we got here!';
    }
}
{% endhighlight %}

Now if you navigate to http://yoursite/logic, you should see a simple message: ***we got here!***

### Adding Twilio Support to Lumen/Laravel

Next step is relatively straight forward, and very well documented here on Twilio's site: [TWILIO SMS PHP QUICKSTART](https://www.twilio.com/docs/sms/quickstart/php)

But high level, go to the site's root within your command line and install the Twilio SDK by running:
{% highlight conf %}
composer require twilio/sdk
{% endhighlight %}

After that, we can use it within our LogicController by updating the top of the file with two new lines:

{% highlight php %}
<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

// new lines added here
use Twilio\Rest\Client;
use Twilio\Twiml;

class LogicController extends Controller {
{% endhighlight %}

That's it for this article, but next we will talk about the use of tunneling our local application with .ngrok and buying a Twilio number to send and receive text from. Go ahead and [download .ngrok](https://ngrok.com/download) ;-)

For the next steps, head on over to <a href="{{ "/php/creating-a-chatbot-with-twilio-lumen-and-ngrok-part-2.html" | relative_url }}">Chatbot tutorial Part 2</a>.
