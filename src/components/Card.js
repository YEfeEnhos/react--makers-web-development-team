import React from "react";
import Avatar from "./Avatar.js";

function Card() {
  return (
    <div className="card">
      <Avatar
        size={700}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </div>
  );
}

export default Card;
