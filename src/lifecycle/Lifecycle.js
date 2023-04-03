import React, { Component } from 'react'

export default class Lifecycle extends Component {

    //Constructor
    constructor(){
        super(); 
        this.state ={
            name: "Nantha",
            count:0
        }
        console.log("Hello iam a constructor");
    }

    //ComponentDidMount
    componentDidMount(){
        console.log("ComponentDidMount is  working");
    }

    componentDidUpdate(preProps,preState){
      console.log("Hello iam componentdidupdate",preState);

    }

    //Render
  render() {
    console.log("Hello iam render",this.state.name);
    return (
        <div>
      <div>{this.state.name}</div>
      <button onClick={() => this.setState({count: this.state.count+1})}>Update Name</button>
      </div>
    )
  }
}
