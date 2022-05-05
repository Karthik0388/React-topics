import React from "react";
import Button from "./Button";
import Card from "./Card";

const ChildrenProps = props => {
  //? ChildrenProps It is a special prop to passed to an component tha will rendre the content present between opening and closing tags
  return (
    <div>
      <Card>
        <Button>hey!</Button>
        <Button>Hello!</Button>
        <h1>{props.name}</h1>
        <h2>{props.children}</h2>
      </Card>
    </div>
  );
};

export default ChildrenProps;
