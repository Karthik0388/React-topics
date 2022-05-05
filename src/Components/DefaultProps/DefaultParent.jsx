import React, { useState } from "react";
import DefaultChildren from "./DefaultChildren";

const DefaultParent = props => {
  //? DefaultProps : React Component allows to set some default values to the props when ever we didn't pass the props it takes the default props

  let [state, setState] = useState({
    username: "Gokul",
  });
  // let { username } = state;
  return (
    <div>
      <DefaultChildren />
      {/* <DefaultChildren /> */}
      {/* <h2>{username}</h2> */}
    </div>
  );
};

export default DefaultParent;
