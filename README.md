# React - Beginner to Master Guide

### Starting a React Project

```sh
npx create-react-app react--makers-web-development-team
```

### Navigating to a Local Folder

```sh
cd react--makers-web-development-team
```

### Starting the Development Server

```sh
npm start
```
### Cloning/Forking React Projects from Github 

```sh
npm install
npm start
```

### Installing a NPM Package

```sh
npm install react-router-dom@6
```

### Importing Internal Components

```js
import Navbar from "./components/Navbar";
```

### Importing non-default Functions

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";
```

### Exporting a function as a default

```js
export default Navbar;
```

## OR

```js
export default function Navbar() => {
      return (
    <div className="heading">
        <h1> Hello </h1>
    </div>
  )
}
```

### Rendering a component in App.js

```js
function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
```

### Importing a CSS file to a Component
```js
import './index.css';
```

## JSX: Putting markup into JavaScript

### Without JSX


```html
<div>
  <p></p>
  <form>
  </form>
<div>
```

```js
isLoggedIn() {...}
onClick() {...}
onSubmit() {...}
```

### With JSX

```jsx
fucntion Form () {
  onClick() {...}
  onSubmit() {...}

  <form onSubmit>
    <input onClick />
    <input onClick />
  </form>
}

export default function Slidebar () => {
  return (
    if (isLoggedIn()) {
      <p> Welcome </p>
    } else {
      <Form />
    }
  )
}
```

## Converting HTML to JSX: Rules of JSX

### The code below wont work why?

```jsx
export default function TodoList() {
  return (
    // This doesn't quite work!
    <h1>Hedy Lamarr's Todos</h1>
    <img 
      src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
    >
    <ul>
      <li>Invent new traffic lights
      <li>Rehearse a movie scene
      <li>Improve the spectrum technology
    </ul>
  );
}
```


### Return a Single Root Element 

```jsx
<>
  <h1>Hedy Lamarr's Todos</h1>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
  >
  <ul>
    ...
  </ul>
</>
```
### Close all the tags

```jsx
<>
  <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
    class="photo"
   />
  <ul>
    <li>Invent new traffic lights</li>
    <li>Rehearse a movie scene</li>
    <li>Improve the spectrum technology</li>
  </ul>
</>
```

### camelCase most of the things!

```jsx
<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo"
/>
```

## Practice 

### Rewrite and fix the code below takin JSX Rules in considiration

```jsx
export default function Bio() {
  return (
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br><br>
      <b>And <i>pictures</b></i> of scientists!
    </p>
  );
}
```

## For help, check the React Docs Beta site

![React Docs Beta](/src/assets/react_docs_beta.png "React Docs Beta")
