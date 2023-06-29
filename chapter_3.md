### What is Polyfil?

A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

[Polyfil](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)

### What is Babel?

[Babel](https://babeljs.io/docs/) is a JavaScript compiler. It is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
- Source code transformations (codemods)

### How to create the scipt commands?

If parcel is used and you run or build app using the following commands:

```
npx parcel index.html -> Runs app
npx parcel build index.html -> Builds app
```

Instead of executing these command you can create a command under scripts in package.json file

```
"start": "npx parcel index.html",
"build": "npx parcel build index.html"
```

So it will allow npm to run those script command as following

```
npm start
npm run build
```

### What is JSX?

- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.
- JSX makes it easier to write and add HTML in React.

[React JSX](https://www.w3schools.com/react/react_jsx.asp)

### What is diffing?

React follows the observable pattern and listens for state changes. When the state of a component changes, React updates the virtual DOM tree. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”

- Frequent DOM manipulations are expensive and performance heavy.
- Virtual DOM is a virtual representation of the real DOM.
- The virtual DOM then sends a batch update to the real DOM to update the UI.
- React uses virtual DOM to enhance its performance.
- It uses the observable to detect state and prop changes.
- React uses an efficient diff algorithm to compare the versions of virtual DOM.
- It then makes sure that batched updates are sent to the real DOM for repainting or re-rendering of the UI.

### What is functional component?

A functional component is a type of component that is defined as a JavaScript function. They provide a concise syntax and promote a functional programming style. Functional components are also known as stateless components because they don't have their own internal state.

Functional components can also accept input data called props (short for properties) and use them within the component.

```
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;

```

In the example above, the Greeting component accepts a prop called name and renders a customized greeting based on the value of name.
