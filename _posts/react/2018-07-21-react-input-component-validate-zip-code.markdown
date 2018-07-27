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

* A Reusable React Input Component
* Input handling (keydown, keyup, and paste events)
* Numeric keyboard on input focus when using mobile devices
* Utility function helpers
* Local storage
  * Initial react application state
  * Updating application state on local storage being set

## Reusable React Component

Below is the boilerplate Input component:

{% highlight javascript %}
import React, { Component } from "react";

// component
class Input extends Component {
  // default props for input
  static defaultProps = {
    onInput: "",
    onKeyDown: "",
    onKeyUp: "",
    // this is an example of removing the paste
    // functionality entirely across the board
    // onPaste: (e) => { e.preventDefault() },
    onPaste: "",
    max: "",
    min: "",
    inputmode: "",
    pattern: "",
    placeholder: "",
    type: "text"
  };

  render() {
    return (
      <input
        inputMode={this.props.inputmode}
        max={this.props.max}
        min={this.props.min}
        onInput={e => {
          this.props.onInput === "" ? "" : this.props.onInput(e);
        }}
        onKeyDown={e => {
          this.props.onKeyDown === "" ? "" : this.props.onKeyDown(e);
        }}
        onKeyUp={e => {
          this.props.onKeyUp === "" ? "" : this.props.onKeyUp(e);
        }}
        onPaste={e => {
          this.props.onPaste === "" ? "" : this.props.onPaste(e);
        }}
        pattern={this.props.pattern}
        placeholder={this.props.placeholder}
        type={this.props.type}
        defaultValue={this.props.value}
      />
    );
  }
}

export default Input;
{% endhighlight %}


## Input handling


[![Edit React :: Input Validation for Zip Code](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6x909zp3w?autoresize=1&hidenavigation=1&view=preview)

<iframe src="https://codesandbox.io/embed/6x909zp3w?autoresize=1&hidenavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
