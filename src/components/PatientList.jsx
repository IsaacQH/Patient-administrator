
import Patient from "./Patient"

const PatientList = ({patients, setPatient}) => {

  return (
    <div className=" ml-5 md:w-1/2 lg:w-3/5">

      <h2 className="font-black text-3xl text-center">Patient List</h2>

      <p className="text-lg mt-5 text-center mb-7">
        Record of
        <span className=" text-indigo-600 font-bold"> patients and appointments</span>:
      </p>

      <div className="md:h-[41rem] overflow-y-scroll">
        {patients.map((patient) =>(                 //iteramos en el patients
            <Patient 
                patient = {patient}
            />          //Le pasamos cada objeto al patient y lo imprime
          ))}        {/* Cerrar con parentesis y no con corchetes */}

      </div>


    </div>

    
  )
}

export default PatientList