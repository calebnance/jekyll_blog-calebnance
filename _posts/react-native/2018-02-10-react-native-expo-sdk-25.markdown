---
layout: post
title: "React Native and Expo SDK 25.0"
date: 2018-02-10 11:25:22 -0500
excerpt: react native and expo sdk 25 installation and creating app on macOS
comments: true
categories: react-native
tags: code howto javascript react-native react
---
I have recently been into and using/learning [React Native](https://facebook.github.io/react-native/). It's kind of amazing. I have been wanting to create this native app for a while now and using React Native has started to make this dream a reality. In the past, I've messed with xCode, cocoa, [ionic](https://ionicframework.com/), and [appcelerator](https://www.appcelerator.com) to name a few... haha.. but React Native has stuck with me.  

I started using/playing with React Native in October of last year (2017), since then I've learned a lot. I wanted to take a few blog posts and share my findings. I want to focus on installation and SDK upgrading learnings first, and that is what this blog post will be about.  

In the beginning, I went over to Facebook's React Native [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) page, followed the instructions and pieced things together. Then I learned about [Expo](https://expo.io) and getting the app to build on a physical device, whoa.. cool.. tell me more. Oh snap, it supports flexbox, what... styling things and creating components is like how you kind of do it on the web too.. wait what? This is amazing.  

Boom, I was cooking, running everything from the terminal, QR code being generated, running the native app on a my phone, life was good. Then I learned about the [Expo XDE](https://expo.io/tools#xde).. GUIs for the winnnn.. I still use SourceTree or Github Desktop to make all of my git commits... I am okay with that, whatever, judge me... one less thing to remember is how I look at it. So now the game has changed, it's literally clicks to get your project up and running!  

So this segues nicely into one of my first findings, upgrading my Expo SDK 22.0 to Expo SDK 25.0. I tried to follow the ever so nice documentation section [Upgrading Expo](https://docs.expo.io/versions/latest/guides/upgrading-expo.html) (no sarcasm, seriously documentation for expo and tutorials, toolkit, everything else.. are great), but something wasn't sticking, so I created a new app with XDE using the latest SDK 25.0 build, and started to port my project over onto that base.. and it just worked. I kept getting weird dependency errors, versioning errors and so on, but the XDE GUI was on point ended up being the best way to go for my upgrade needs.

Also, I want to mention why I even wanted to upgrade to the latest, besides the obvious..

## Expo SDK Breakdown

### 22.0
* Didn't support a lot of newer react/react-native versions, along with react-navigation
* Errors on iPhone X (portrait, landscape locking didn't really work..)
* Old Splash screen

### 25.0
* [What Ships with SDK 25.0](https://blog.expo.io/expo-sdk-v25-0-0-is-now-available-714d10a8c3f7)
    * Added support for React 16, which includes: `componentDidCatch()`
    * This also allows for this: [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
* Fixes all of the issues above
* Allows for quicker builds
* Machine performance has noticeably improved (my macbook pro wanted to take off a few times)
* Tablet support is an option

So as you see above, a lot of cool things that came with 25.0, but the coolest was the support for React 16 and their introduction of `componentDidCatch()` along with the ability to then use **Error Boundaries**, making debugging of your react/react-native app, that much easier.  

I hope this helped, I really just wanted to get some thoughts down. I hope to continue this trend as I learn more about this cool native app thingy.  
