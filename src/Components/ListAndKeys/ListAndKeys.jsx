import React from "react";

const ListAndKeys = () => {
  //? ListAndKeys: it is like map() method in javascript iterates through an parent array and calls a function on each element and returns a new array with transformed values it does't change the parent array

  //?each child in a list should have unique key prop
  let Arr = [
    "Html",
    "css",
    "javascript",
    "Reactjs",
    "nodejs",
    "expressjs",
    "mongodb",
  ];
  return (
    <div>
      {Arr.map(val => {
        return <h1>{val}</h1>;
      })}
    </div>
  );
};

export default ListAndKeys;
