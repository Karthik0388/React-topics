import React, { useState } from "react";

const ConditionalRender = () => {
  //? ConditionalRendering : Is an ability to render a different Ui based on true/false condition

  let [state, setState] = useState(true);

  let handleClick = () => {
    setState(!state);
  };
  return (
    <div>
      {/* {state === true ? <button>Login/button> : <button>Logout</button>} */}
      <button onClick={handleClick}>
        {state === true ? "Login" : "Logout"}
      </button>
    </div>
  );
};

export default ConditionalRender;
