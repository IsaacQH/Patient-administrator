import Error from "./Error"
import { useState, useEffect } from "react"


const Form = ({patients, setPatient, paciente, setPaciente}) => {
  
  const [nombre, setNombre] = useState('') //Declaración del state
  const [owner, setOwner] = useState('') //Declaración del state
  const [mail, setMail] = useState('') //Declaración del state
  const [date, setDate] = useState('') //Declaración del state
  const [symptoms, setSymptoms] = useState('') //Declaración del state

  const [error, setError] = useState(false)  //State para mensaje de error de form

  useEffect(() => {
      if(Object.keys(paciente).length > 0){ //Revisa que este no vacio

          //console.log('There is an edit')
          console.log(paciente)
          //Shows the values of paciente to edit
          setNombre(paciente.nombre)
          setOwner(paciente.owner)
          setMail(paciente.mail)
          setDate(paciente.date)
          setSymptoms(paciente.symptoms)

      }else{/*console.log('Empty edit')*/}
  }, [paciente])   //Ejecuta solo cuando paciente cambia (que clickea da editar)

  function generateID(){             //Función que genera ID
    const random = Math.random().toString(36).substr(2)   
    const fecha = Date.now().toString(36)
    const id = random + fecha
    return id
  }

  const handleSubmit = (e) => {
      e.preventDefault()    //Hace que el evento no recarge la página

      //VALIDAR FORMULARIO
      if([nombre, owner, mail, date, symptoms].includes('')){
        console.log("All fields must be filled.")
        setError(true)
        return
      }
      setError(false)     //Es lo mismo que quitar return y else{setError(false)}

      //CREAR OBJETO PACIENTES
      const objectPatient = {
        nombre,
        owner,
        mail,
        date,
        symptoms
      }  //Introduciendo los pacientes

      if(paciente.id){ //Rvisa que el prop de paciente tenga id para saber que existe el edit
        //console.log('Editing')  EDITANTO EL REGISTRO
        objectPatient.id = paciente.id //Le genera un id al editado con el val anterior
        console.log(objectPatient)

        //Actualizar registro, revisando cada valor y seteando un nuevo arr de paciente por si se actualiza
        const patientsUpdate = patients.map( patientState => patientState.id === paciente.id ? objectPatient : patientState) //Donde coincida el id viejo con el actualizado se guarda el objetoPaciente actualizado
        setPatient(patientsUpdate) //Guarda el nuvo update en el set
        setPaciente({})  //Limpia el paciente editado

      } else {
        //console.log('New register')  CREANDO EL REGISTRO
        objectPatient.id = generateID() //genera un id al paciente registrado
        setPatient([...patients, objectPatient])   //Esto se hace y no un push porque queremos usar métodos inmutables 
        //[Toma lo que haya en pacientes,    agrega lo nuevo]
      }



      //REINICIAR FORMULARIO
      setNombre('')
      setOwner('')
      setMail('')
      setDate('')
      setSymptoms('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-black text-3xl text-center">Patient registration</h2>

      <p className="text-lg mt-5 text-center">
        Add patient and
        <span className=" text-indigo-600 font-bold"> follow record</span>:
      </p>

      <form  onSubmit={handleSubmit} className=" bg-white shadow-2xl rounded-lg px-5 py-10 mt-10 mb-15 mx-5"> {/* Fondo blanco, sombra mediana, rounded border, padding x, padding y, margin top*/}
        { error && <Error message ="All fields are required"/>}
        {/* CAMPO NOMBRE */}
        <div className=" mb-5">  
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Pet's Name</label> {/* bloque separa etiquetas*/}
          <input 
                id = "pet"
                type = "text"
                placeholder="Name of your pet"
                className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                value={nombre /*le da el valor de nombre al input */}
                onChange={(e) => setNombre(e.target.value) /*setea el valor */}

          />              {/* borde2, width 100, padding, margintop, color del placeholder*/}
        </div>

        {/* CAMPO OWNER*/}
        <div className=" mb-5">  
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Owner's name</label> {/* bloque separa etiquetas*/}
          <input 
                id = "owner"
                type = "text"
                placeholder="Name of the owner"
                className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                value={owner}
                onChange={(e) => setOwner(e.target.value)} 
                
          />              {/* borde2, width 100, padding, margintop, color del placeholder*/}
        </div>

        {/* CAMPO EMAIL*/}
        <div className=" mb-5">  
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label> {/* bloque separa etiquetas*/}
          <input 
                id = "email"
                type = "email"
                placeholder="Email direction"
                className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md"
                value={mail}
                onChange={(e) => setMail(e.target.value)}  
          />              {/* borde2, width 100, padding, margintop, color del placeholder*/}
        </div>

        {/* CAMPO DATE*/}
        <div className=" mb-5">  
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Date</label> {/* bloque separa etiquetas*/}
          <input 
                id = "date"
                type = "date"
                className="border-2 w-full p-2 mt-2 rounded-md"
                value={date}
                onChange={(e) => setDate(e.target.value)} 
          />              {/* borde2, width 100, padding, margintop, color del placeholder*/}
        </div>

        {/* CAMPO SYMPTOMS*/}
        <div className=" mb-5">  
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms</label> {/* bloque separa etiquetas*/}
          <textarea
                id = "symptoms"
                placeholder="Describe your pet's symptoms"
                className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md" 
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)} 
          />
        </div>

        {/* SUBMIT*/}
        <input
                type = "submit"
                value = {paciente.id ? "Edit patinent" : "Add patient"}
                className=" bg-indigo-500 w-full text-white font-bold uppercase rounded-lg py-3 cursor-pointer hover:bg-indigo-700"
        />


      </form>

    </div>
  )
}
export default Form
