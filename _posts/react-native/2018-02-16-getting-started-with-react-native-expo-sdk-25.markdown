---
layout: post
title: "Getting Started with React Native and Expo SDK 25.0"
date: 2018-02-16 21:01:20 -0500
excerpt: react native and expo sdk 25 getting started and creating app on macOS
comments: true
categories: react-native
tags: code howto javascript react-native react
---
As I said in my last blog post, <a href="{{ "/react-native/react-native-expo-sdk-25.html" | relative_url }}">covering installation of Expo's XDE, overview of React Native, and the new Expo SDK 25.0</a>, that kind of spawned up a tutorial series idea. So here I am, with the first tutorial post, on **creating your first Native app with React Native and Expo SDK 25.0**. Let's get started.

First download Expo's XDE application to your machine if you haven't already, and open it up. Click on the `Create new project...`, name it and select template type **blank** for now (let's literally start with a clean slate) then once you're ready click **Create**.

<div class="img-wrapper">
  <img class="img img-mw420" src="/assets/img/react-native/xde-my-first-app-create-screen.png" alt="xde my first app create screen" title="xde my first app create screen">
</div>

Boom, let the project download/build and the next screen you should see is this:

<div class="img-wrapper">
  <img class="img" src="/assets/img/react-native/xde-my-first-app-running-screen.png" alt="xde my first app running screen" title="xde my first app running screen">
</div>

XDE does a great job of handling a lot of the building errors, dependencies and stuff you don't want to mess with, and gives you very helpful messages when it can't fix it on it's own.

Some of those issues and learnings that I have came across when I upgrading from Expo's SDK 22.0 to SDK 25.0 were as follows:
* iOS Simulator's Expo Client was out of date. This is a little more involved to handle manually, but XDE provides great notification messages and warms you when the client is out of date with the SDK version. So take note of that, I love running in the console, but this GUI really has proven itself to me.
* All that to say, whenever I was trying to run SDK 22.0 from the console and using `npm start` to start the project, all was good, but when I upgraded to SDK 25.0, `npm start` no longer works, it's `yarn start` now. I realize that is probably a derp on my part, but still thought I should mention it.
* Also something to note, node versions and yarn versions come into play as to which SDK version you get, so make sure you're at least running nodeJS v.5.5.* on your machine. Please check your **app.json** file for `"sdkVersion": "25.0.0",`, if it's lower, look into updating your node version, that is what is blocking you from not being able to use the newest Expo SDK.

That literally is it, you have a working blank native app running on your machine!

These next screenshots below are showing the app project options available with XDE. That refresh (clear cache) button will be your friend as you are installing new packages and trying new file structures as you are building your new app, so keep that in mind please! Sometimes the errors that are being causes is just from old cached file/directory structures.
<div class="img-wrapper">
  <img class="img img-mw220 mr16-md" src="/assets/img/react-native/xde-my-first-app-project-options-dropdown.png" alt="xde my first app project options dropdown" title="xde my first app project options dropdown">
  <img class="img img-mw220" src="/assets/img/react-native/xde-my-first-app-devices-dropdown.png" alt="xde my first app devices dropdown" title="xde my first app devices dropdown">
</div>

No coding today, just an overview, but... **your homework is**: find and use the XDE share button to view the running app's QR code and get that blank app running on your physical iPhone or Android device... go!
