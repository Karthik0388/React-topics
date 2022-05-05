import React from "react";

const DefaultChildren = props => {
  return <div>{props.username}</div>;
};
DefaultChildren.defaultProps = {
  username: "Karthik",
};

export default DefaultChildren;
