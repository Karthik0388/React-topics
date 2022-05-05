import React, { useState } from "react";
import CompB from "./CompB";

const CompA = () => {
  //? Props drilling to sending the same data to every level of the component we use props drilling from compA-to-CompB-to-CompC
  let [state, setState] = useState({
    username: "Karthik",
    company: "TestYantra",
    salary: "20000",
  });

  return (
    <div>
      <h1>Parent Component</h1>
      <CompB state={state} />
    </div>
  );
};

export default CompA;
