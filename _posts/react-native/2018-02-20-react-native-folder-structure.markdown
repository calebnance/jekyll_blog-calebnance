---
layout: post
title: "React Native Project Folder Structure"
date: 2018-02-20 19:10:58 -0500
excerpt: react native folder structure directory project app
categories: react-native
tags: code howto javascript react-native react
---
Welcome back, did you get the fresh react native app running on your physical device like I asked in my <a href="{{ "/react-native/getting-started-with-react-native-expo-sdk-25.html" | relative_url }}">last blog post</a>?! If not, then you are here for other reasons, either way... great!

As this is a fresh install, I wanted to first share my folder structure and slowly talk about each section in upcoming posts. Below is my current react native project structure from root directory:

{% highlight conf %}
App/
├── assets/ (moved here from root)
│   ├── fonts/
│   ├── images/
│   └── loading/
├── components/
│   └── icons/
├── config/
├── data/
├── navigation/
├── preload/
├── redux/
│   ├── actions/
│   └── reducers/
└── screens/
{% endhighlight %}

That's it, this keeps everything close to the root and super simple. So now import references look like this:

{% highlight javascript %}
// global styles
import { colors, utilStyles } from '../config/styles';

// grab auth navigation stack
import { StackAuth } from '../navigation/stackAuth';
{% endhighlight %}

And it keeps you from having to go down the rabbit hole of directory structure references (of what not to do) like this:
{% highlight javascript %}
// this is not optimal
import { deepReference } from '../../../../config/styles';
{% endhighlight %}

Things to think about at least, I hope this helped!
