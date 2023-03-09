import React from "react";
import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

// export default function List() {
//   const chemists = people.filter((person) => person.profession === "chemist");
//   const listItems = chemists.map((person) => {
//     return (
//       <li>
//         <img src={getImageUrl(person)} alt={person.name} />
//         <p>
//           <b>{person.name}:</b>
//           {" " + person.profession + " "}
//           known for {person.accomplishment}
//         </p>
//       </li>
//     );
//   }); //person.map
//   return <ul>{listItems}</ul>;
// }
