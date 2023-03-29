import React, { Component } from 'react'

export default class Lifecycle extends Component {

    //Constructor
    constructor(){
        super(); 
        this.state ={
            name: "Nantha"
        }
        console.log("Hello iam a constructor");
    }

    //ComponentDidMount
    componentDidMount(){
        console.log("ComponentDidMount");
    }

    //Render
  render() {
    console.log("Hello iam render",this.state.name);
    return (
        <div>
      <div>{this.state.name}</div>
      <button onClick={() => this.setState({name:"Kumar"})}>Update Name</button>
      </div>
    )
  }
}
