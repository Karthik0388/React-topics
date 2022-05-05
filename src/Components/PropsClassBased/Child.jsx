import React from "react";

class Child extends React.Component {
  
  componentDidMount(props) {
    this.props.componentDidMount()
  }

  render() {
    return <div>{this.props.state.username}</div>;
  }
}
export default Child;
