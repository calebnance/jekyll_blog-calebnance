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
  * Initial React application state
  * Updating application state upon local storage being set

## Reusable React Component

Below is the boilerplate Input component and how to implement it:

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

Next we want to take a look at the input handling functions:

{% highlight javascript %}
handleZipcodeInputKeyDown = e => {
  // this is called as soon as we get input from the user
  // we don't want to allow them the access to input past 5 digits
  // so we block on keyDown
  // (it never gets to keyUp, which actually updates the state)

  // restrict to 5 digits only
  // but allow backspace and arrow
  var key = e.which ? e.which : e.keyCode;
  if (
    (e.target.value.length >= 5 &&
      key !== 8 &&
      key !== 37 &&
      key !== 38 &&
      key !== 39 &&
      key !== 40) ||
    (key === 18 || key === 189 || key === 229)
  ) {
    e.preventDefault();
  }
};

handleZipcodeInputKeyUp = e => {
  // set state of zipcode
  this.setState({
    zipCode: e.target.value
  });
};

handleZipcodeInputPaste = e => {
  e.preventDefault();
  // get pasted content
  let pasteText = e.clipboardData.getData("text/plain");
  // only allow integers
  pasteText = pasteText.replace(/[^0-9]/g, "");
  // add to current input value (target)
  let newContent = e.target.value + pasteText;
  // only allow 5 digits total
  newContent = newContent.substring(0, 5);
  // set new value of input
  e.target.value = newContent;
  // set new state of zipcode
  this.setState({
    zipCode: newContent
  });
};
{% endhighlight %}


## Numeric keyboard (mobile devices)
Forcing the numeric keyboard on input focus with these lines:

*Notice:* **inputmode, pattern & type** props passed to our component.

{% highlight javascript %}
// put at the top of our App.js file
import Input from "./input";

// put within our render function
<Input
  inputmode="numeric"
  onKeyDown={e => this.handleZipcodeInputKeyDown(e)}
  onKeyUp={e => this.handleZipcodeInputKeyUp(e)}
  onPaste={e => this.handleZipcodeInputPaste(e)}
  pattern="\d*"
  placeholder="Enter zipcode"
  type="number"
  value={this.state.zipCode}
/>
{% endhighlight %}

## Including Utility Helpers and Usage

Include the helper utility for local storage and an example of setting it (on zip code submit).

{% highlight javascript %}
// put at the top of our App.js file
import { localDataGet, localDataSet, localDataDelete } from "./utilities";

// put within our App.js React highlevel component
handleZipcodeSubmit = () => {
  // store the zip code in local storage
  localDataSet("zipCode", this.state.zipCode);
};
{% endhighlight %}

## Local Storage Load In
Then within our constructor we want to add before the initial state
{% highlight javascript %}
constructor(props) {
  super(props);

  // local storage call
  const userLocalData = localDataGet();
  // console.log("data from local storage");
  // console.log(userLocalData);

  // initial app state
  this.state = {
    zipCode: userLocalData.zipCode ? userLocalData.zipCode : ""
  };
}
{% endhighlight %}

### Demo the thing...

[![Edit React :: Input Validation for Zip Code](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6x909zp3w?autoresize=1&hidenavigation=1&view=preview)

<iframe title="example of input validation code with codesandbox.io" src="https://codesandbox.io/embed/6x909zp3w?autoresize=1&hidenavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
