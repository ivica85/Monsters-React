import React, { useState, useEffect } from "react";
import {Typography } from  '@material-ui/core';
import SearchBox from "./SearchBox";
import CardList from "./CardList";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  const filterdeMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div>
        <Typography align="center" variant="h1" color="secondary">
        Monsters
      </Typography>
      <SearchBox hendleChange={(e) => setSearchField(e.target.value)} /> 
      <h1>
        <CardList monsters={filterdeMonsters} />
      </h1>
    </div>
  );
}

export default Monsters;
