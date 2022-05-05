import React from "react";
import FCPropsParent from "./Components/Props/FCPropsParent";
import ClassBasedState from "./Components/State/ClassBasedState";
import FunctionalComp from "./Components/State/FunctionalComp";
import Parent from "./Components/PropsClassBased/Parent";
import ChildrenProps from "./Components/ChildrenProps/ChildrenProps";
import DefaultParent from "./Components/DefaultProps/DefaultParent";
import CompA from "./Components/PropsDrilling/CompA";
import ListAndKeys from "./Components/ListAndKeys/ListAndKeys";
import ConditionalRender from "./Components/ConditionalRendering/ConditionalRender";
import Refs from "./Components/Refs/Refs";

const App = () => {
  return (
    <div>
      {/* //? state */}
      {/* <FunctionalComp /> */}
      {/* <ClassBasedState /> */}
      {/* //?props */}
      {/* <FCPropsParent /> */}
      {/* <Parent/> */}
      {/* //?ChildrenProps */}
      {/* <ChildrenProps name="bibin">Hello, karthik</ChildrenProps> */}
      {/* //?DefaultProps */}
      {/* <DefaultParent /> */}
      {/* //?Props Drilling */}
      {/* <CompA/> */}
      {/* //? ListAndKeys */}
      {/* <ListAndKeys/>k */}
      {/* //?Conditional Rendering */}
      {/* <ConditionalRender/> */}
      {/* //?React Refs */}
      <Refs/>
    </div>
  );
};

export default App;
