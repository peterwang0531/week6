# Week 6 - Notes

### Part 1: Create a New React App

(Also see https://github.com/facebook/create-react-app)

```
$ npx create-react-app my-app
$ cd my-app
$ npm start
```


### Part 2: Live Demonstration

The `demo` folder was initially created by using the [Create React App](https://github.com/facebook/create-react-app) tool. Then, I removed files
in the `src/` folder that we don't need, and simplified the code in `index.html`.

Finally, from the `demo` folder in Terminal I ran `npm install jquery --save`
to install the jquery module into that project folder.

Some cool things to know:

* Running this project starts a _local web server_ on port 3000.  This means
  that the browser can use the `http://` protocol to access your site
  instead of `file://`.
* The browser will automatically refresh whenever you change your code :-)


### Getting Started

* Go into the `demo` folder: `cd demo`
* Install dependencies: `npm install`
* Start a local server: `npm start`
* If your browser doesn't automatically open, go to [http://localhost:3000](http://localhost:3000) in your browser.
* Press `Ctrl-C` anytime to stop the server.

### Important Ideas This Week

* You should get comfortable with ES6 "arrow functions" and "object destructuring" syntax (see links below)
* React is an attempt to bring object-oriented programming to the web and is an open-source
  project funded by Facebook
* A web page is now considered to be a collection of React _components_
* Each React component is said to have its own _state_
* Each React component must define a `render()` method to visually draw the component
* The `render()` method must return exactly one top-level React "element".
* JSX is a new language.  It is not exactly JavaScript and it is not exactly HTML.
* JSX does NOT support ES6 Template Literals (backtick string notation)
* JSX does NOT support `class="..."` on an element.  Use `className="..."` instead!
* JSX **automatically** puts quotes around attribute values: `src={image_url}`
* You can use JSX or `React.createElement(...)` to generate the React element.
* React will automatically re-render a component whenever its underlying state changes

# References

JavaScript-specific:

* [ES6 Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [ES6 Destructuring Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [Use Arrow Functions Instead of Class Methods In React](https://medium.com/quick-code/react-quick-tip-use-class-properties-and-arrow-functions-to-avoid-binding-this-to-methods-29628aca2e25)

React-Specific:

* [React documentation](https://reactjs.org/docs/getting-started.html).
* [JSX Documentation](https://reactjs.org/docs/introducing-jsx.html)
* ["Create React App" documentation](https://facebook.github.io/create-react-app/docs/getting-started).
