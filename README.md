# React - Beginner to Master Guide

### Navigating to a Local Folder

```sh
cd react--makers-web-development-team
```

### Starting the Development Server

```sh
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

## For help, check the React Docs Beta site

![React Docs Beta](/src/assets/react_docs_beta.png "React Docs Beta")
