import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"
import { useState } from "react"

function App() {

  const [patients, setPatient] = useState([]) //Declaracion del state principal que llevara la info del paciente (nombre, owner, etc)

  return (
    <div className="container mx-auto mt-20">  {/*Se hace un contenedor y le damos un margin iz y d de plano X de auto para centrar, margin top de 20 unidades*/}
      <Header/>
      <div className=" mt-12 md:flex"> {/*Margin top de 12 y lo hacemos dislpayflex para que se coloquen uno al lado del otro*/}
        <Form
          patients = {patients}
          setPatient={setPatient} 
        />
        <PatientList/>
      </div>
    
    </div>
  )
}
export default App
