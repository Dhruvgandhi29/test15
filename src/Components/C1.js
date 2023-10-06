import { Component } from "react";
class C1 extends Component {
  constructor(props) {
    super(props);
    this.state = { role: "Engineer", name: "", tr: true };
  }
  handleClick = () => {
    this.setState({ role: "Doctor" });
  };
  //Note the event is passed as argument to note the changes made in name
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  RChange = () => {
    this.setState({ tr: !this.state.tr });
  };
  render() {
    return (
      <div>
        <h2>Props value is {this.props.gift}</h2>
        <h2>Props value is {this.state.role}</h2>
        <button onClick={this.handleClick}>Change state</button>
        <br />
        <input
          placeholder="Enter your name"
          onChange={this.handleChange}
        ></input>
        <p>Your name is:{this.state.name}</p>

        <h3>I am a {this.state.tr ? "Engineer" : "Doctor"}</h3>
        <button onClick={this.RChange}>Change role</button>
        <hr></hr>
      </div>
    );
  }
}
export default C1;
