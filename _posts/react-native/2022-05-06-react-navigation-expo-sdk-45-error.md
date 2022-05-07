---
layout: post
title: "React Navigation V6 Expo SDK 45 Error"
date: 2022-05-06 4:12:48 -0500
excerpt: React Navigation v6 Expo SDK 45 error with react-native-gesture-handler
categories: react-native
tags: code howto javascript react-native expo react react-navigation react-native-gesture-handler
---

Today I was updating a few of my expo clones to the latest **Expo SDK 45** and kept getting the following error:

{% highlight bash %}
[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!
{% endhighlight %}

Searching this error gave me mixed results but finally found a solution that worked for me.

I am using the latest **React Navigation v6** and more specifically the package:

{% highlight json %}
{
  "@react-navigation/native": "^6.0.10"
}
{% endhighlight %}


The solve was pretty simple, just changing all usages of **@react-navigation/stack**

{% highlight javascript %}
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
{% endhighlight %}


To use the **@react-navigation/native-stack** like below

{% highlight javascript %}
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
{% endhighlight %}

This is **not** a drop-in replacement, but most things should be. Double check the API for <a href="https://reactnavigation.org/docs/native-stack-navigator/" target="_blank" rel="noopener">native-stack</a> to be sure.

Hope this helps!