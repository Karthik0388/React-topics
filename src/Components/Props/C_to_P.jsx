import React from "react";
import FCPropsParent from "./FCPropsParent";

const C_to_P = props => {
  //? caalback function is loging here
  props.func("My name is Karthik Working in Testyantra");
  return (
    <div>
      <h1>I am Child componant</h1>
    </div>
  );
};

export default C_to_P;
