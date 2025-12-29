function ListRendering3() {
  const items = ['HTML', 'Css', 'JS', 'React', 'python']
  return (
    <>
       <ul>{
        
        items.map((name, index)=>(
           
            <li key={index}>{name} </li>     
        ))
        
        }
         

        </ul> 
    </>
  )
}
export default ListRendering3;