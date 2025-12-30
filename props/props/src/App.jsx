import Props from "./Props/Props.JSX"


function App() {
  

  return (
    <>
    <Props eid="1201" EName="nani" esalary={25000} edepartment="dev" eemail="nani@gmail.com" eate={true} eskills={["HTML,CSS,jsx,reactjs"]}/>
    <Props  eid="1202" EName="tharun" esalary={30000} edepartment="developer" eemail="tharun@gmail.com" eate={false} eskills={["HTML,CSS,jsx,reactjs,python"]}/>
    <Props eid="1203" EName="shannu" esalary={35000} edepartment="dev" eemail="shannu@gmail.com" eate={true} eskills={["HTML,CSS,jsx,reactjs"]}/>
    <Props  eid="1204" EName="naveen" esalary={45000} edepartment="dev" eemail="naveen@gmail.com" eate={false} eskills={["HTML,CSS,jsx,reactjs"]}/>
    </>
  )
}

export default App
