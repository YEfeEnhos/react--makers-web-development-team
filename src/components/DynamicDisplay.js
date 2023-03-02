import React from 'react'

export default function DynamicDisplay() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
    <>
      <img
        className="avatar"
        src={avatar}
        alt={description}
      />
      <p>Information is stored inside a variable and can be dynamically changed</p>
      </>
    );
}
