---
layout: post
title: "Using CSS Variables with SCSS Variables"
date: 2021-01-16 17:10:01 -0500
excerpt: new syntax when using scss variables to populate css variables
comments: true
categories: css
tags: css scss howto code
---

Recently I ran into an issue when creating dark/light palettes with CSS Variables within my scss.

The issue was how scss handled the setting of a css variable with a scss variable.

The below example **DID NOT WORK**:

{% highlight scss %}
:root {
  --color-background: $white;
}

:root .dark-mode {
  --color-background: $black;
}
{% endhighlight %}

This is a breaking change and compatibility issue, so the need for interpolation is the fix ([reference link](https://sass-lang.com/documentation/breaking-changes/css-vars)).

By wrapping your scss variable with `#{}` fixes this compile issue!
  
{% highlight scss %}
:root {
  --color-background: #{$white};
}

:root .dark-mode {
  --color-background: #{$black};
}
{% endhighlight %}