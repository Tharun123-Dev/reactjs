
import React from "react";
export class ArrowstateAsClass extends React.Component{

    constructor(){
        super();
        this.state=({
            name:"shannu"
    })
    }
    thirduser=()=>{
        this.setState({
            name:"shnamukha"
        })
    }
    originaluser=()=>{
        this.setState({
            name:"nani"
        })
    }


    render(){
        return(
            
            <div className="container">
            <h1>The username:{this.state.name}</h1>
            <button onClick={this.thirduser}>Third username</button>
            <button onClick={this.originaluser}>Orginal user</button>
            </div>
        )
    }

} 