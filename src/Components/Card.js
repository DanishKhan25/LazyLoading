import React from "react";
import "./Card.css";

const Card = ({ name, email, username }) => {
  return (
    <div className="card-container">
      <div className="img-wrapper">
        <img
          src={`https://avatars.dicebear.com/api/micah/:${name}.svg`}
          alt="monster"
          width={180}
        />
      </div>
      <h3>{name}</h3>
      <p>Email:-{email}</p>
      <p>Username:-{username}</p>
    </div>
  );
};

export default Card;
