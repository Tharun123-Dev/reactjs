import './JSCode.css'
//out side the function
// var name="nani"
// var age=24
// var city="mulug"

//object out side the function
var person={
    name:"nani",
    age:24,
    city:"mulug"
}
var styleinline={
    color:"red",
    backgroundColor:"yellow"
}

function JSCode() {
// inside the function
// var name="nani"
// var age=24
// var city="mulug"


// object in javascript
// var person={
//     name:"nani",
//     age:24,
//     city:"mulug"
// }
  return (
    <div>
        {/* external css file */}
      <h2 className='header1'>JavaScript Code Component</h2>
      <p>This is a placeholder for JavaScript code related content.</p>
      {/* <h3>The name is {var name = "nani"} and the age is {var age = 24} and the city is {var city = "mulug" }</h3> */}
      <p>{person.name} is {person.age} years old, staying in {person.city}</p>

     <div>
        {/* // inline styling in react */}
        <h2 style={{color:"red",backgroundColor:"yellow"}}>Today is monday</h2>
        <h3 style={{backgroundColor:"lightblue"}}>Today is a good day</h3>
     </div>

     {/* object styling in react */}
     <div>
        <h2 style={styleinline}>Hello everyone</h2>
        <h3 style={styleinline}>Welcome to reactjs</h3>
     </div>
    </div>
  );
}   
export default JSCode;