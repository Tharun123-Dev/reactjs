import "./Props.css"
import React  from "react";
export default class Props extends React.Component{
   render(){
    return(
        <div class="container">
            <div class="subcontainer">
                <h1>Employee detaills:</h1>
                <p>EId:{this.props.eid}</p>
                <p>EName:{this.props.EName}</p>
                <p>ESalary:{this.props.esalary}</p>
                <p>EDepartment:{this.props.edepartment}</p>
                <p>EEmail:{this.props.eemail}</p>
                <p>EAte:{this.props.eate ? "employee Eaten the food":"Employee eating not done"}</p>
                <p>ESkills:{this.props.eskills}</p>
            </div>
        </div>
    )
   }
}