import Functional from "./Components/Functional"
import {Footer} from "./Components/Functional"
import Studentlist from "./Components/Studentlist"
import Card from "./Components/Card"
import Parent from "./Components/Parent"
import Exports from "./Components/Exports"
import {NamedExport} from "./Components/Exports"
import Carddynamic from "./Components/Carddynamic"

function App() {
  

  return (
    <>
  <Functional/>
  <Footer/>
  <Studentlist/>
  <Card/>
  <Parent/>
  <Exports/>
  <NamedExport/>
  <Carddynamic product={{name: 'mutton', price: '300/kg', description: 'Premium quality mutton.'}}/>


    </>
  )
}

export default App
