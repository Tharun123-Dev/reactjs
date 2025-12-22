function Studentlist() {
  const students = ['Arys',"tharun", "Rahul","Aisha"]
  return (
    <>
       <ul>{
        
        students.map((name, index)=>(
           
            <li key={index}>{name} </li>     
        ))
        
        }
         

        </ul> 
    </>
  )
}
export default Studentlist;