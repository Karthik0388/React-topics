import React, { useState } from "react";

const FunctionalComp = () => {
  //? state is an Object is used to store the Data internally
  //? State holds the information about a component internally
    
    //? functional based components doesn't having state object by default After 16.8 version it becomes statefull component with the help of hooks

    //? functional based components doesn't having component lifecycle methods instead it has hooks
  let [state, setState] = useState({
    username: "Karthik",
    company: "TestYantra",
    salary: 25000,
  });
  return (
    <div>
      <ul>
        <li>{state.username}</li>
        <li>{state.company}</li>
        <li>{state["salary"]}</li>
      </ul>
    </div>
  );
};

export default FunctionalComp;
