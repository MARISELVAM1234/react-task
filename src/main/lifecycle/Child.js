import React, { Component } from 'react'

export class Child extends Component {
    constructor(){
        super();
        console.log("child render");
        this.state = {
            sub : "React"
        }
    }
    componentWillMount(){
        console.log("child will mount");
        // setTimeout(()=>{
        //     {this.setState({sub: "js"})}
        // });

    }
    componentDidMount(){
        console.log("child did mount");
    }
    shouldComponentUpdate(nextProps , nextState){
console.log("nextProps" , nextState);
return true
    }
  render() {
    console.log("child render");
    return (
      <div>{this.state.sub}</div>
    )
  }
}

export default Child