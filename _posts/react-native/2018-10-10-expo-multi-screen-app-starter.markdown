---
layout: post
title: "Expo Multi Screen App Starter"
date: 2018-10-10 21:12:48 -0500
updated: 2021-01-26 11:45:13 -0500
excerpt: expo multi screen app starter, react native
comments: true
categories: react-native
tags: code howto javascript react-native react expo
---

To continue from my last post, I wanted to share with you a more robust multi screen expo app starter.

### Out of the box

- Running on the latest Expo SDK 40
- React Navigation ([v4](https://reactnavigation.org/docs/4.x/getting-started))
- Light/Dark Theme
- Prettier &amp; Airbnb Eslint
- Simple Jest testing

#### Other features / api

- Dynamic route transitions (**Mode:** regular & modal)
- SVG usage
- Utility checker for the notch: iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
- Preloading/caching local fonts & images
  - with splash loading screen
  - and once the app has loaded, [lottie](https://airbnb.io/lottie/) animation intro into app
- Navigation Stacks
- Example of Production vs Development flags
- Custom SVG back button within React Navigation header

<a href="https://github.com/calebnance/expo-multi-screen-starter" class="btn btn-outline-dark">View Project on Github</a>

[Check the Demo & Release Notes here](https://github.com/calebnance/expo-multi-screen-starter#demo-and-release-notes)

This also comes with a very nice **api/constants** import system I've slowly made better and better. This comes with **global colors**, **device info**, and **global styles**. Pull requests are welcome!

<div class="video-wrapper">
  <video class="video vid-mw" autoplay loop muted playsinline>
    <source src="/assets/videos/expo/multi-screen-starter-v0.0.2.mp4" type="video/mp4">
  </video>
</div>
