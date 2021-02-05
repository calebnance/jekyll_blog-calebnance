---
layout: post
title: "Frontend Optimization Checklist 2018"
date: 2018-07-23 22:19:11 -0500
excerpt: a checklist to make your website faster
comments: true
categories: development
tags: code development optimization tutorial frontend
---

Today I wanted to write down a collective list of things you can do on the frontend to save all of the **kbs** (or **mbs** 🤔).

First off, if you have not heard of Google's [Lighthouse](https://developers.google.com/web/tools/lighthouse/) plugin yet, head on over and [download it](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk). This will help you understand where your website needs improvement.

I will break things down into sections:

- [SVGs & Images](#svgs-images)
- [CSS & Javascript](#css-javascript)
- [Fonts](#fonts)
- [Video & GIFs](#video-gifs)
- [Server Side](#server-side)

## SVGs & Images {#svgs-images}

---

**_Use of Inline SVGs_** - If you are not using SVGs for icons/logos/pretty much anything other than an actual photo, you should start doing so. Inline SVG is taking things a step further, instead of referencing a SVG in an `<img>`, inline it! This cuts down on so many asset requests on your page, for example:

{% highlight html %}

<!-- 3 extra requests -->
<img src="/extra/request/blue-circle.png">
<img src="/extra/request/yellow-circle.png">
<img src="/extra/request/red-circle.png">
{% endhighlight %}

{% highlight html %}

<!-- 0 extra requests -->
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="blue" />
</svg>
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="yellow" />
</svg>
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
{% endhighlight %}

Obviously SVGs can't be used for everything (well they probably could but there is a tipping point as to when to use an _SVG_ and when a _.png_ is better), but when you can use them, you should.

**_Optimize SVGs_** - Before any SVGs hit production, please run them / upload them to [svgomg](https://jakearchibald.github.io/svgomg/) first, this optimizes SVGs, saving even more page weight.

**_Resizing images_** - Always make sure the images you are serving up are cropped and sized down to the smallest size they will ever display as. With the responsive approach and max-widths of markup containers, this can sometimes be overlooked.

**_Image Compression_** - Mac users swear by [imageoptim](https://imageoptim.com/mac) but I've used it and many other applications, nothing has beat out [TinyPNG](https://tinypng.com). TinyPNG is literally the only tool you need when it comes to PNGs and JPGs.

## CSS & Javascript {#css-javascript}

---

**_PurgeCSS_** - I recently heard about [PurgeCSS](https://www.purgecss.com) and instantly started using it. If you are not familiar with it, take a look at their [Configuration page](https://www.purgecss.com/configuration). This will give you a high level view of what can be done with it.

**My use case:**

See my use in [gulpfile.js](https://github.com/calebnance/web-starter-nse/blob/master/gulpfile.js#L188) as part of my [Web Starter](https://github.com/calebnance/web-starter-nse) repo, a boilerplate to meld Nunjucks, SCSS and ES6 (with production code in mind).

**_Minification_** - No css or javascript files should ever go to production unless they are minified.

If you have a gulp build, start using, [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) to minify css and [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) to minify js.

I mean at the very least, there are web tools for minification, [jscompress](https://jscompress.com) and [cssminifier](https://cssminifier.com).

**_GZip_** - This is taking things a bit further, Chris Coyier has a great article on [Difference between Minification and GZipping](https://css-tricks.com/the-difference-between-minification-and-gzipping/). As you can see, there is definitely even more savings on page weight when you GZip. Just keep in mind when serving these files up, setting the metadata **Content-Encoding** to **gzip** is a must.

## Fonts {#fonts}

---

**_Font Face and the use of font-display:_** - Almost every project at work calls for the use of [@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face), and if you are serving up custom fonts you really should check out the css property: [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display). Google gives a great breakdown here: [Web Font Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization)

## Video & GIFs {#video-gifs}

---

First off, I say GIFs not JIFs because they are [gifts](https://media.giphy.com/media/1msy0o1Ma3bsLYBZUA/giphy.gif). I use [Giphy Capture](https://giphy.com/apps/giphycapture) most of the time for quick screen recordings of prototypes or examples I want to display ([examples of recordings](https://blog.calebnance.com/phaser/sprite-move-face-tracking.html)). It's great and my go to for sure, but I quickly realized that gifs are **HEAVY**.

So then I saw an article about converting **GIFs** to **.mp4**, and wrote about the massive file size optimization [here](https://blog.calebnance.com/performance/optimizing-page-weight-with-gif-to-video.html). Now all GIFs on this blog have been converted to .mp4.

That is just the first big win if you are using GIFs, so now let's talk about video. Using the `<video>`, please keep in mind some great attributes within: **poster**, **preload** and [all others](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Attributes).

Accessibility concerns for video: captions/subtitles, take a look [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#Accessibility_concerns).

## Server Side {#server-side}

---

**_HTTP/2_** - Wherever you are serving up your files on the server, make sure they are using the faster HTTP/2 protocol instead of the HTTP/1.1 protocol. To test if you are, run Lighthouse on the desired site.

On apache servers, the use of the modules for file serving/expiration/caching: **mod_headers**, **mod_expires** and **mod_deflate**
Take a look at my `.htaccess` file on [github](https://github.com/calebnance/jekyll_blog-calebnance/blob/master/.htaccess) for help.

---

This post was mainly in response to this [Twitter Post](https://twitter.com/chriscoyier/status/1030488369199906816) from [Chris Coyier](https://twitter.com/chriscoyier).

Also, take a look at the [repo for my blog](https://github.com/calebnance/jekyll_blog-calebnance#blogcalebnancecom) and it's current Lighthouse score. I've listed out a good bit of helpful things in the readme. I hope something on this post helped you! <span style="font-size:24px">🍻</span>
