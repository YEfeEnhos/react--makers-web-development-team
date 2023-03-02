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


### JavaScript in JSX with Curly Braces

## Passing strings with quotes

```jsx
export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}
```

## Using curly braces: A window into the JavaScript world 

```jsx
export default function Avatar() {
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';
  return (
    <img
      className="avatar"
      src={avatar}
      alt={description}
    />
  );
}
```

## Basic Possible Use Case 
```jsx
const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export default function TodoList() {
  return (
    <h1>To Do List for {formatDate(today)}</h1>
  );
}

```
## Where to use curly braces

```txt
1) As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.

2) As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".
```

## Using “double curlies”: CSS and other objects in JSX 
```jsx
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

<div style={person.theme}>
  <h1>{person.name}'s Todos</h1>
</div>

```
## Challenge
```jsx
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="{baseUrl}{person.imageId}{person.imageSize}.jpg"
        alt={person.name}
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

```

### Passing props to a component 

## Step 1: Pass props to the child component 
```jsx
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
```

## Step 2: Read props inside the child component
```jsx
function Avatar({ person, size }) {
  // person and size are available here
}
```

## Specifying a default value for a prop
```jsx
function Avatar({ person, size = 100 }) {
  // size predetermined to be 100 => only used if size prop is missing
}
```
## Passing JSX as children 
```jsx
export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
```

### Rendering Lists

## Rendering data from arrays

## Move the data into an array

```jsx

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

```

##  Map the people members into a new array of JSX nodes, listItems
```jsx
const listItems = people.map(person => <li>{person}</li>);
```

## Return listItems from your component wrapped in a <ul>
```jsx
return <ul>{listItems}</ul>;
```
## Full function
```jsx
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}

```
```txt
Warning: Each child in a list should have a unique “key” prop.
```

## Filtering arrays of items
```jsx
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

```
## Create a new array of just “chemist” people, chemists, by calling filter() on the people filtering by person.profession === 'chemist':
```jsx
const chemists = people.filter(person =>
  person.profession === 'chemist'
);

```
## Now map over chemists
```jsx
const listItems = chemists.map(person =>
  <li>
     <img
       src={getImageUrl(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
  </li>
);

```
## Lastly, return the listItems from your component:
```jsx
return <ul>{listItems}</ul>;
```

## For help, check the React Docs Beta site

![React Docs Beta](/src/assets/react_docs_beta.png "React Docs Beta")
