import React from "react";
import CompC from "./CompC";

const CompB = props => {
    let { username, company, salary } = props.state;
    let state = props.state;

  return (
    <div>
      <h1>{username}</h1>
      <CompC state={state} />
    </div>
  );
};

export default CompB;
