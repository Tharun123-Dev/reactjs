// function Import1(){
//     return(
//         <div>
//             <p>ram and lakshamans are very good brothers.they are very understanding each other</p>
//             <h1>Import Export Component 1</h1>
//         </div>
//     )
// }
// export default Import1;


// process2

export default function Import1(){
    return(
        <div style={{textAlign: "center",backgroundColor: "lightblue",color:"orange"}}>
            <p >ram and lakshamans are very good brothers.they are very understanding each other</p>
            <h1>Import Export Component 1</h1>
            <Import2 />
        </div>
    )
}

// nested conmponents
 function Import2(){
    return(
        <div>
            <p style={{textAlign: "center",backgroundColor: "lightgreen",color:"purple"}}>sita and ravan are very good enemies.they are very understanding each other</p>
            <h1>Import Export Component 2</h1>
        </div>
    )
}

// content1 so  this is not supported for default without existing file
// export default function Content1(){
//     return(
//         <div>
//             <p style={{textAlign: "center",backgroundColor: "lightyellow",color:"red"}}>krishna and sudama are very good friends.they are very understanding each other</p>
//             <h1>Content Component 1</h1>
//         </div>
//     )
// }   

// we go  to named export
export function Content1(){
    return(
        <h2 style={{backgroundColor:"yellowgreen",color:"red",margin:"10px",padding:"10px",textAlign:"center",fontFamily:"-apple-system"}}>this is a named export content and componenet</h2>
    )
}

export function Footer(){
    return(
        <h3 style={{backgroundColor:"black",color:"white",margin:"10px",padding:"10px",textAlign:"center",fontFamily:"-apple-system"}}>this is a footer component</h3>
    )
}

export const Box =()=>{
    return(
        <div>
          <marquee behavior="alternate" direction="" scrollamount="80">  <h1 style={{backgroundColor:"lightgray",color:"black",margin:"10px",padding:"10px",textAlign:"center",fontFamily:"-apple-system"}}>this is a box component</h1></marquee>
        </div>
    )
}