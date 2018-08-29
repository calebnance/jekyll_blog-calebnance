---
layout: post
title: "Frontend Optimization Checklist 2018"
date: 2018-07-23 22:19:11 -0500
excerpt: a checklist to make your website faster
comments: true
categories: development
tags: code development optimization frontend
---
Today I wanted to write down a collective list of things you can do on the frontend to save all of the **kbs** (or **mbs** 🤔).

First off, if you have not heard of Google's [Lighthouse](https://developers.google.com/web/tools/lighthouse/) plugin yet, head on over and [download it](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk). This will help you understand where your website needs improvement.

I will break them down into sections:

* [Images & SVGs](#images-svgs)
* [CSS & Javascript](#css-javascript)
* [Server Side](#server-side)

## Images / SVGs {#images-svgs}

***

## CSS & Javascript {#css-javascript}

***

## Server Side {#server-side}

***

***HTTP/2*** - Wherever you are serving up your files on the server, make sure they are using the faster HTTP/2 protocol instead of the HTTP/1.1 protocol. To test if you are, run Lighthouse on the desired site.

On apache servers, the use of the modules for file serving/caching: **mod_expires** and **mod_deflate**
Take a look at my `.htaccess` file on [github](https://github.com/calebnance/jekyll_blog-calebnance/blob/master/.htaccess) for help.

***

This post was mainly in response to this [Twitter Post](https://twitter.com/chriscoyier/status/1030488369199906816) from [Chris Coyier](https://twitter.com/chriscoyier). I hope it helped!
