import React from "react";

const CompC = props => {
  let { username, company, salary } = props.state;
  console.log(props);
  console.log(username);
  return (
    <div>
      <h1>{company}</h1>
      <h2>{salary}</h2>
    </div>
  );
};

export default CompC;
