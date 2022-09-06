import React, { Component } from "react";
import Child from "./Child.js"

export class Lifecycle extends Component {
  constructor() {
    super();
    this.state = {
      name1: "react",
    };

    console.log("constructor()");
    //     this.state = { hello : "World!" };
  }

  componentWillMount() {
    // console.log("componentWillMount()");
    console.log("componentwillmount()");
  }

  componentDidMount() {
    // console.log("componentDidMount()");
    console.log("componentdidmount()");
    console.log("this.state", this.state.name1);
    this.setState({ name1: "js" });
  }

  // changeState()
  // {
  //     this.setState({ hello : "Geek!" });
  // }

  componentDidUpdate() {
    setTimeout(() => {
      console.log("this.state.name1 component did update", this.state.name1);
    }, 4000);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log("render");
    return (
      <div>
        {/* <h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1> 
            <h2> 
            <a onClick={this.changeState.bind(this)}>Press Here!</a> 
            </h2>  */}

        <h1 style={{ marginLeft: "100px" }}>Hello js</h1>
        <Child/>
      </div>
    );
  }

  // shouldComponentUpdate(nextProps, nextState)
  // {
  //     console.log("shouldComponentUpdate()");
  //     return true;
  // }

  // componentWillUpdate()
  // {
  //     console.log("componentWillUpdate()");
  // }

  // componentDidUpdate()
  // {
  //     console.log("componentDidUpdate()");
  // }
}

// componentwillmount is call for after the constructor called then render call stage before the stage  called

export default Lifecycle;
