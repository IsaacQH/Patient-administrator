import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {

  return (
    <div className="container mx-auto mt-20">  {/*Se hace un contenedor y le damos un margin iz y d de plano X de auto para centrar, margin top de 20 unidades*/}
      <Header />
      <div className=" mt-12 md:flex"> {/*Margin top de 12 y lo hacemos dislpayflex para que se coloquen uno al lado del otro*/}
        <Form />
        <PatientList/>
      </div>
    
    </div>
  )
}
export default App
