import React from 'react'
import Annen from "../assets/annen.jpg";
// import { getImageUrl } from './utils.js';

export default function Avatar({ person, size }) {
  return (
    <>
        <img
      src={Annen}
      alt={person.name}
      width={size}
      height={size}
    />
    <div> Anneninki </div>
    </>

  );
}