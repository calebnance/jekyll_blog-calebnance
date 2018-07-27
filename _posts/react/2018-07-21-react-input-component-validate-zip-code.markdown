---
layout: post
title: "React Input Component Validate Zip Code"
date: 2018-07-21 18:25:22 -0500
excerpt: react component for validation of zip code input example
comments: true
categories: react
tags: code react howto javascript input html5
---
Today I wanted to share a react snippet for Zip Code validation within an input.

The full example of the code is all the way at the bottom, but first I wanted to share a list of all the things this example gets into.

* Input handling (keydown, keyup, and paste events)
* A Reusable React Input Component
* Numeric keyboard on input focus when using mobile devices
* Utility function helpers
* Local storage
  * Initial react application state
  * Updating application state on local storage being set

## Input handling

[![Edit React :: Input Validation for Zip Code](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6x909zp3w?autoresize=1&hidenavigation=1&view=preview)

<iframe src="https://codesandbox.io/embed/6x909zp3w?autoresize=1&hidenavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
