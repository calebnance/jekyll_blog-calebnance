---
layout: post
title: "React Navigation V6 Multi Modal Transition Setup"
date: 2021-10-31 10:12:48 -0500
excerpt: react navigation v6 transition setup
comments: true
categories: react-native
tags: code howto javascript react-native react react-navigation
---

Today I wanted share a quick snippet for **React Navigation V6*, how to setup a multi-modal transition structure with the use of their [Group API](https://reactnavigation.org/docs/group/).

Let's say you wanted 2 (or more) modal types, one group of modals that opened in full screen and another group that opened in the Presentation mode.


{% highlight jsx %}
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

// stacks
import StackHome from './StackHome';

// modal screens
import ModalOnboarding from '../screens/ModalOnboarding';
import ModalSelectPhoto from '../screens/ModalSelectPhoto';

const RootStack = createStackNavigator();
{% raw %}
export default () => (
  <NavigationContainer>
    <RootStack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true
      })}
    >
      /* your regular stack or tab navigation */
      <RootStack.Group>
        <RootStack.Screen name="StackHome" component={StackHome} />
      </RootStack.Group>
      
      /* modal(s) grouping for Slide From Bottom */
      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          ...TransitionPresets.ModalSlideFromBottomIOS
        }}
      >
        <RootStack.Screen name="ModalOnboarding" component={ModalOnboarding} />
      </RootStack.Group>
      
      /* modal(s) grouping for Presentation */
      <RootStack.Group
        screenOptions={{
          presentation: 'modal',
          ...TransitionPresets.ModalPresentationIOS
        }}
      >
        <RootStack.Screen
          name="ModalSelectPhoto"
          component={ModalSelectPhoto}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  </NavigationContainer>
);
{% endraw %}
{% endhighlight %}
