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

### Importing Internal Component 
```js 
import Navbar from "./components/Navbar";
```

### Importing Non-Default Functions
```js 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
```

### Exporting a function as a default 
```js
export default Navbar
```

```js 
export default function Navbar() => {
    return;
}
```


### Rendering a Component in App.js
```js
return (
    <>
    <Navbar />
    </>
)
```
