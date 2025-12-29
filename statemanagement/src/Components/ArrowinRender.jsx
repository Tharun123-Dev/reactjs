import React from "react";
// import "../Components/ConstructorBinding.css";

export class ArrowinRender extends React.Component{
    constructor(){
        super();
        this.state={
            username:"Nani"
        }
        
    }
    firstuser(){
        this.setState({
            username:"Ram"
        })
    }
  render(){
    return(
        <div className="container">
            <h1>username is: {this.state.username}</h1>
            <button onClick={()=>{this.firstuser()}}>second User</button>
        </div>
    )
  }
}
