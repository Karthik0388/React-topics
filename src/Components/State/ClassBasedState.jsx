import React from "react";

class ClassBasedState extends React.Component {
    //? In classbased component is a statefull componnet Beacuse is has state object by default
    //? Classbased components has component life cycle method 
    //? classbased components having this binding
    
  constructor(props) {
    super(props);
    this.state = {
      username: "Karthik",
      Company: "TestYantra",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <h2>{this.state["Company"]}</h2>
      </div>
    );
  }
}

export default ClassBasedState;
