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
* [Video](#video)
* [Server Side](#server-side)

## Images / SVGs {#images-svgs}

***

***Use SVGs*** -

***Optimize SVGs*** - [svgomg](https://jakearchibald.github.io/svgomg/)

***Resizing image*** - Always make sure the image you are serving up is cropped / sized down to the smallest size it will ever display as. With the responsive approach and max-widths of markup containers, this can sometimes be overlooked.

***Image Compression*** - [TinyPNG](https://tinypng.com) Mac users swear by [imageoptim](https://imageoptim.com/mac)

## CSS & Javascript {#css-javascript}

***

***PurgeCSS*** -

***Minification*** -

***GZip*** -

[Difference between Minification and GZipping](https://css-tricks.com/the-difference-between-minification-and-gzipping/)

## Video {#video}

***

## Server Side {#server-side}

***

***HTTP/2*** - Wherever you are serving up your files on the server, make sure they are using the faster HTTP/2 protocol instead of the HTTP/1.1 protocol. To test if you are, run Lighthouse on the desired site.

On apache servers, the use of the modules for file serving/expiration/caching: **mod_headers**, **mod_expires** and **mod_deflate**
Take a look at my `.htaccess` file on [github](https://github.com/calebnance/jekyll_blog-calebnance/blob/master/.htaccess) for help.

***

This post was mainly in response to this [Twitter Post](https://twitter.com/chriscoyier/status/1030488369199906816) from [Chris Coyier](https://twitter.com/chriscoyier). I hope it helped!
