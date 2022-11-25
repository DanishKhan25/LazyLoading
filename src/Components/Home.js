import React, { useEffect, useState } from "react";

import CardList from "./CardList";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <CardList data={data} />
    </div>
  );
};

export default Home;
