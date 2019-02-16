# Week 6 - Solution

This is a solution is provided in case we run out of time in class.

### Getting Started: `npm install` then `npm start`

* Running `npm install` will read your `package-lock.json` file and
  install all of the modules necessary to run the project.
* Installed modules will go into the `node_modules` subfolder.  Do NOT
  add that folder to any of your Git repositories because it is (a)
  huge and (b) easily recreated by running `npm install`.
* Running `npm start` will start an HTTP web server on a local
  port (usually 3000).
* While the server is running you can view your project in your
  browser at `http://localhost:3000` (assuming your port is 3000).


### Things to study in this code

* Everything "starts" with `index.html` and `index.js`.  You can
  then trace the rest of the execution from there.
* Look at how state is managed in the App component.
* We have to initialize the `state` variable, but we don't
  modify it directly.  Instead we call `this.setState(...)` to apply
  a "diff" of the changes we'd like to make.
* React will automatically trigger the `render()` function whenever
  the `state` variable ends up being modified.
* This code uses ES6 arrow functions when writing class methods
  such as `handleTopRatedClick()` because the notion of `this`
  is more intuitive when we use arrow functions in this manner.
  Technically speaking, the use of arrow functions for class methods
  are experimental, and future versions of React may recommend
  a different approach.
* Notice that the `render()` method seems at first glance to have
  two `return` statements!  But it only has one. The `return` statement
  that starts on line 52 is part of an inner anonymous function
  that is returning values back to the `map()` operation.  The `return`
  statement starting on line 61 is the real return value of the
  method.
* Notice also that the `render()` method returns a single, top-level
  React element (the `div` with a class of `container`).  That's
  the rule.  You cannot return JSX that contains two sibling elements.
  There must be only one parent element.
* Notice that using a element attribute of `class` is not allowed,
  so we use `className` instead.
* Also notice that for attributes whose value is the result of
  a JS expression, we do NOT enclose the value in quotes.  See
  the `onClick` attributes on lines 65 and 66.
