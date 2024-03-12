import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"
import { useState, useEffect } from "react"

function App() {

  const [patients, setPatient] = useState([]) //Declaracion del state principal que llevara la info del paciente (nombre, owner, etc)
  const [paciente, setPaciente] = useState({}) //Declaracion del state que se encargará de guardar al paciente para la edición o delete

  useEffect(() => {
    const patientsLS = JSON.parse(localStorage.getItem('pacientes')) || []; // Obtener los pacientes del Local Storage
  
    if (patientsLS.length > 0) { // Verificar si hay datos en el Local Storage
      setPatient(patientsLS); // Inicializar el estado con los pacientes obtenidos
    }
  }, []);

  useEffect(() => {
    console.log('DONE')
    localStorage.setItem('pacientes', JSON.stringify(patients))
  }, [patients]) //Revisa cada que patients es modificado (cada que se agrega, edita o elimna)

  const eliminar = (id) => {   
    console.log('Deleting patient: ', id)
    const patientsUpdate = patients.filter( value => value.id !== id)
    setPatient(patientsUpdate)
  }

  return (
    <div className="container mx-auto mt-20">  {/*Se hace un contenedor y le damos un margin iz y d de plano X de auto para centrar, margin top de 20 unidades*/}
      <Header/>
      <div className=" mt-12 md:flex"> {/*Margin top de 12 y lo hacemos dislpayflex para que se coloquen uno al lado del otro*/}
        <Form
          patients = {patients}
          setPatient={setPatient} 

          paciente = {paciente}
          setPaciente ={setPaciente}
        />
        <PatientList
          patients = {patients  /* Le pasamos el arreglo de pacientes guarados */}
          setPatient={setPatient /* Le pasamos la funcoón de pacientes guarados */}

          paciente = {paciente  /* Le pasamos el objeto del paciente*/}
          setPaciente={setPaciente}

          eliminar = {eliminar}
        />
      </div>
    
    </div>
  )
}
export default App
