import React from 'react'


export default function EventHandler() {
    function handleClick() {
        alert('You clicked me!');
    }
    return (
        <div>
            <button onClick={handleClick}>
                Click me
            </button>
            <button onClick={function handleClick() {alert('You clicked me!');}}>Click me (inline)</button>
            <button onClick={() => {alert('You clicked me!');}}>Click me (inline arrow)</button> 
            <button onClick={alert('You clicked me!')}>Click me (alerts on render, click not functional)</button> 
            {/* anonymous function */}
        </div>
        
       
      );
    }

    
