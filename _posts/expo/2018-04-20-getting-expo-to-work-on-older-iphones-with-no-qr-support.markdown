---
layout: post
title: "Getting Expo to work on older iPhones with no QR support"
date: 2018-04-20 10:15:31 -0500
excerpt: getting expo to work on older iphones with no qr support
categories: expo
tags: code development javascript react-native react expo
---
Today I received two old iPhones from my dad, an iPhone 5c and 4s. I had mentioned to my parents I was testing my react native expo app on more physical devices, so they sent them my way since they were just sitting in a drawer. So of course the first thing I did was download the [Expo Client](https://itunes.apple.com/us/app/expo-client/id982107779) app and boom... the issue appeared!

#### The Issue
What is the issue you ask? It is a couple of things that compile together:
- Expo just recently removed the QR scan from within the Expo Client app.
- Older iOS don't have QR "easter egged" in the Camera app (this would hot link into Expo Client).
- Expo doesn't allow you to type in the path to your build on your machine, for example: exp://111.222.3.4444:19000
- I can't text these old phones because it's not on any carrier.
- 3rd party QR code scanners don't create a hot link, they only read the code.

#### My Solution

After I downloaded a 3rd party QR code scanner, to see if it would read the Expo path and open the app (hot link)... that was very much so wishful thinking. Then I remembered in the iOS Notes app, it adds "hot links / hyperlinks" when you type a path, so I was like maybe that will work... it did! I felt like a genius and archaic at the same time. It has to be easier than this... it honestly is for newer phones, but for old phones and old iOSs, this works great!

*Example of Expo Client App and creating a hot link in the iOS Notes app*
<div class="img-wrapper">
  <img class="img" src="/assets/img/expo/old-iphone-flow-example.jpg" alt="expo workflow example of iphone 5c and 4s">
</div>

*Example of my react native app running on the Expo Client*
<div class="img-wrapper">
  <img class="img" src="/assets/img/expo/old-iphone-expo-sign-in.jpg" alt="expo running on iphone 5c and 4s">
</div>

Hopefully this helped and made sense?! I couldn't find anything about this edge case online, so I thought I would type it up. Please reach out to [me on Twitter](https://twitter.com/calebnance) if you want to talk about it, or just comment below!
