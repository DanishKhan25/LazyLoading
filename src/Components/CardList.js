import React from "react";
import Card from "./Card";
import "./Cardlist.css";

const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          email={user.email}
          username={user.username}
        />
      ))}
    </div>
  );
};

export default CardList;
