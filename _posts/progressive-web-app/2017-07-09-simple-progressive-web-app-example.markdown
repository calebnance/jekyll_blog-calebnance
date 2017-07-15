---
layout: post
title: "Simple Progressive Web App Example"
date: 2017-07-08 17:49:18 -0500
excerpt: How to add support for a Progressive Web App
comments: true
categories: progressive-web-app
tags: progressive-web-app code howto javascript google
---
Today, I wanted to show you a very simple implementation of a Progressive Web App, as well as pass along all the roadblocks I hit, and things to look for.  

## Simple Example
* * *

Below you will want to add this somewhere before your html's `</body>` tag.  

{% highlight javascript %}
<script type="text/javascript">
  // is service worker supported?
  if('serviceWorker' in navigator) {
    // service worker registered
    navigator.serviceWorker.register('service-worker.js', { scope: '/' })
      .then(function(registration) {
        // console.log('service worker registered');
      }
    );

    // service worker ready
    navigator.serviceWorker.ready.then(function(registration) {
      // console.log('service worker ready');
    });
  }
</script>
{% endhighlight %}

Now that we have the call to the `service-worker.js` file, we need to create that file and place it in the **root** of our project/app. The contents of a simple service worker are below.  

{% highlight javascript %}
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cn_blog').then(cache => {

      return cache.addAll([
        '/',
        '/index.html',
        '/assets/css/main.css',
        '/assets/js/scripts.min.js'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(
      event.request, {
        ignoreSearch : true
      }
    ).then(response => {

      return response || fetch(event.request);
    }).catch(function(error) {
      // console.log('Fetch failed; returning offline page instead.', error);
    })
  );
});
{% endhighlight %}

Great! Now was have a service worker ready and stuff, but we're not finished yet. We need a good ole' manifest file for app reference and config/settings. To reference said `manifest.json` file, we need to add a meta tag within our html's `<head>` section. Pop this anywhere within the head tag (with the path changed to wherever your manifest file is located):

{% highlight html %}
<link rel="manifest" href="/path/to/manifest.json">
{% endhighlight %}

Now here is a very barebones `manifest.json` file:
{% highlight json %}
{
  "name": "cn_blog",
  "description": "blog.calebnance pwa",
  "short_name": "cn_blog",
  "theme_color": "#24292e",
  "background_color": "#24292e",
  "display": "standalone",
  "scope": "/",
  "start_url": "/index.html",
  "splash_pages": null,
  "icons": [
    {
      "src": "/assets/img/app/cn-blog-app-72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/assets/img/app/cn-blog-app-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
{% endhighlight %}

Do all of these above things right, reload the page and you should be good to go!  

## Is my PWA working?
* * *

Now let's check to see if things are actually offline accessible.. first let's open up a Chrome browser. Next, we can go 2 different ways to check, and luckily, I'll show you both of them!  

Option 1: **Dev Console**
* Open up your dev console in Chrome.
* Navigate to the `Applications` tab.
* There is a `Service Workers` sub-tab.
* Here is where the service worker will be registered (if it is).
* You can also update/sync/un-register the service worker too (helpful for debugging).

<div class="gif-wrapping ineedagirlfriend">
  <img class="gif" src="/assets/img/progressive-web-app/console-application.gif" alt="console application gif">
</div>

Option 2: **Google Lighthouse**
* Install this Google plugin: <a href="https://developers.google.com/web/tools/lighthouse/" target="_blank" rel="noopener">Lighthouse</a>
* Once installed (see screenshot below), you can now run a report on your site to get scored on the following things:
  * Progressive Web App
  * Performance
  * Accessibility
  * Best Practices
* This tool has saved me a lot of time as far as optimization and accessibility.
* It also gives another great plugin (<a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US" target="_blank" rel="noopener">aXe</a>) to use, specifically for accessibility troubleshooting.
* But all in all, as you see in the second screenshot, a checklist of what isn't right when it comes to getting a Progressive Web App running.

<div class="img-wrapper">
  <img class="img" src="/assets/img/progressive-web-app/google-lighthouse-screenshot.png" alt="google lighthouse screenshot">
</div>

<div class="img-wrapper">
  <img class="img" src="/assets/img/progressive-web-app/google-lighthouse-report_before.png" alt="google lighthouse screenshot">
</div>

## Roadblocks
* * *

#### navigator.serviceWorker is never ready
I ran into the service worker registering but never hitting that `.ready()` state. The reason being, my service worker was in an `/assets/` sub-directory. That's a no go for service workers evidently. They need to be able to see the entire app, so you must place it in the `root` of your project/app. <a href="https://stackoverflow.com/questions/29874068/navigator-serviceworker-is-never-ready" target="_blank" rel="noopener">Reference</a>  

#### scope
Paths in scope should only be used if you have a full understanding of what is going on. Please keep in mind the service worker needs access to your entire app.

#### naming of the service worker file
At one point, I thought that this mattered.. it **does not** matter what you name your service worker file, just as long as you update the file name in the register call as well.

#### manifest referenced in head
Please remember to add the meta tag for reference of the `manifest.json` file and the path to that file is correct. Running the Google Lighthouse plugin will give you a step-by-step list of things that are wrong with your manifest file, if there are any.
