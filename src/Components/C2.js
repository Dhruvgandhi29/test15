import { Component } from "react";
import C3 from "./C3";
class C2 extends Component {
  constructor() {
    super();
    console.log("I am constructor");
    this.state = { brand: "Nike", toggle: true };
  }
  static getDerivedStateFromProps() {
    console.log("I am get derived state");
    return null;
  }
  componentDidMount() {
    console.log("I am componentDidMount method");
  }
  shouldComponentUpdate() {
    console.log("Should update method");
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("Get snapshot method");
    return null;
  }
  componentDidUpdate() {
    console.log("Did update");
  }
  render() {
    console.log("I am render method");
    return (
      <div>
        <h1>Lifecycle methods</h1>
        <p>{this.state.brand}</p>
        <button
          onClick={() => {
            this.setState({ brand: "Adidas" });
          }}
        >
          Click
        </button>

        {this.state.toggle ? <C3 /> : null}
        <button
          onClick={() => {
            this.setState({ toggle: !this.state.toggle });
          }}
        >
          Unmount
        </button>
        <br />
        <br />
        <hr></hr>
      </div>
    );
  }
}

export default C2;
