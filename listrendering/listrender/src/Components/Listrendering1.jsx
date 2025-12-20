function ListRendering1() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
  return (
    <>
       <ul>{
        
        items.map((name, index)=>(
            // if key doesnot give it will trow warning like key po\rop for uniqueness
            <li key={index}>{name} </li>     
        ))
        
        }
         

        </ul> 
    </>
  )
}
export default ListRendering1;