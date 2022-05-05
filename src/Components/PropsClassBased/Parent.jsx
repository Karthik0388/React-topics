import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Karthik",
      company: "TestYantra",
    };
  }

  componentDidMount(data) {
    console.log(data)
  }
 

  render() {
    return (
      <div>
        <Child state={this.state} componentDidMount={this.data} />
      </div>
    );
  }
}

export default Parent;
