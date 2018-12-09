---
layout: post
title: "Expo Multi Screen App Starter"
date: 2018-10-10 21:12:48 -0500
excerpt: expo multi screen app starter, react native
comments: true
categories: react-native
tags: code howto javascript react-native react expo
---
To continue from my last post, I wanted to share with you a more robust multi screen expo app starter. This has react navigation out of the box. With examples of:

- Dynamic route transitions (**Mode:** regular & modal)
- SVG usage
- Utility checker for the notch: iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
- Preloading/caching local fonts & images
  - with splash loading screen
  - and once the app has loaded, animation intro into app
- Navigation Stacks
- Production vs Development flags
- Custom SVG back button within React Navigation header

[Check the Demo & Release Notes here](https://github.com/calebnance/expo-multi-screen-starter#demo-and-release-notes)

### Out of the box

- Expo SDK 31 (will upgrade to latest SDK as released)
- [React Navigation v.2](https://reactnavigation.org/docs/en/2.x/getting-started.html)
- Airbnb Eslint and Prettier
- React Native specific accessibility linting w/ react-native-a11y
- Simple Jest/Enzyme testing

This also comes with a very nice **api/constants** import system I've slowly made better and better. This comes with **global colors**, **device info**, and **global styles**. Pull requests are welcome!

<a href="https://github.com/calebnance/expo-multi-screen-starter" class="btn btn-outline-dark">View Project on Github</a>
