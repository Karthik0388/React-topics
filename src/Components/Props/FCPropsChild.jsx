import React from "react";
import C_to_P from "./C_to_P";

const FCPropsChild = props => {
  let { username, company, salary } = props.state;
  console.log(username);

  let from_Parent = Trigger => {
    console.log(Trigger); //? logged from child
  };

  return (
    <div>
      <h1>{username}</h1>
      <h1>{company}</h1>
      <h1>{salary}</h1>
      <C_to_P func={from_Parent} />
    </div>
  );
};

export default FCPropsChild;
