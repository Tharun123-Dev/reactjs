
import React from "react";
export class Inlinebinding extends React.Component{

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
    inlinebind=()=>{
        this.setState({
            name:"nani"
        })
    }


    render(){
        return(
            
           <div className="container">
            <h1>The username:{this.state.name}</h1>
            <button onClick={this.thirduser}>fourth username</button>
           <button onClick={this.inlinebind.bind(this)}>Inline bind</button>
            </div>
        )
    }

} 