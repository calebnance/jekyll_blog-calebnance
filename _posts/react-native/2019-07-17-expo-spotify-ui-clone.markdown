---
layout: post
title: "Expo Spotify UI Clone"
date: 2019-07-17 11:12:48 -0500
updated: 2021-01-26 12:45:13 -0500
excerpt: spotify ui clone with react native and expo
comments: true
categories: react-native
tags: code howto javascript react-native react expo
---

Today I wanted to talk about my UI Clone of the native Spotify app I created and open sourced. It's written in React Native and Expo.

### Notable Features

- Running on the latest Expo SDK 40
- One code base that output to: iOS, Android and PWA (Progressive Web App)
- React Navigation ([v4](https://reactnavigation.org/docs/4.x/getting-started))
- Prettier/Linting
  - run: `yarn lint` for CLI output
  - helpers in code editor
- Global Styles (reusable styles across the app)
  - uses 8pt system (but [can easily be changed](https://github.com/calebnance/expo-spotify/blob/master/src/constants/globalStyles.js#L4))
  - simple Design System starter
- Example SVG usage
- Example PropTypes usage

<a href="https://github.com/calebnance/expo-spotify" class="btn btn-outline-dark">View Project on Github</a>

<br />

<div class="img-wrapper">
  <img class="img" src="/assets/img/react-native/spotify-ui-clone-react-native.jpg" alt="preview of Spotify UI Clone" title="preview of Spotify UI Clone">
</div>
