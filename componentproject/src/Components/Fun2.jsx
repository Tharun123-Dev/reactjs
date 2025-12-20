 export default function Fun2() {
  return (
    <div>
      <h2>This is Function 2</h2>
      <Header />
      <Content />
      <Content2 />
    </div>      
  );
}



function Header() {
  return (
    <div>
      <h1>This is Header Component</h1>
    </div>
  );
}
// export default header;


function Content() {
  return (
    <div>
      <h1>This is Header Component</h1>
    </div>
  );
}

function Content2(){
    return (   
    <div>
        <h1>This is Content2 Component</h1>
    </div>
    );  
}
// export default content;