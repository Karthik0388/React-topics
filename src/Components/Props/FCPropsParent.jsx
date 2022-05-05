import React, { useState } from "react";
import FCPropsChild from "./FCPropsChild";

const FCPropsParent = () => {
  //? Props is also an Object which is used to transfer data from one component to another component parent-to-child

  //? If you want to send data from child-to-parent use callbackFunction with help of callback function we can send data from parent to child 

  let [state, setState] = useState({
    username: "Karthik",
    company: "TestYantra",
    salary: 20000,
  });

  return (
    <div>
      <FCPropsChild state={state} />
    </div>
  );
};

export default FCPropsParent;
