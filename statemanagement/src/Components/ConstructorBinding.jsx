import React from "react";
// import "../Components/ConstructorBinding.css";

export class ConstructorBinding extends React.Component{
    constructor(){
        super();
        this.state={
            username:"Nani"
        }
        this.firstuser=this.firstuser.bind(this)
    }
    firstuser(){
        this.setState({
            username:"Tharun"
        })
    }
  render(){
    return(
        <div className="container">
            <h1>username is: {this.state.username}</h1>
            <button onClick={this.firstuser}>First User</button>
        </div>
    )
  }
}
