import { Component } from "react";
//There is predefined component which has render method in its definition
//That component name is "Component" which is available in react file as namespace export

//props={prod="t-shirt", color="blue"}
class Footer extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    //if handleClick written as normal function then below line is mandatory
    this.handleClick = this.handleClick.bind(this);
    //if written as arrow function above line not required
  }
  handleClick() {
    //this keyword becomes unknown when we write it as a custom function
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Footer Component</h2>
        <h3>
          The {this.props.prod} is of color {this.props.color} and is priced at{" "}
          {this.props.price}Rs
        </h3>
        <h3>Counter:{this.state.count}</h3>
        <button onClick={this.handleClick}>Increase count</button>
      </div>
    );
  }
}
export default Footer;
