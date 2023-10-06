import { Component } from "react";

class C3 extends Component {
  componentWillUnmount() {
    console.log("I am componentWillUnmount method");
  }
  render() {
    return (
      <div>
        <h1>Unmounting C3 will be removed</h1>
        <hr />
      </div>
    );
  }
}
export default C3;
