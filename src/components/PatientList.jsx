
import Patient from "./Patient"

const PatientList = () => {
  return (
    <div className=" ml-5 md:w-1/2 lg:w-3/5">

      <h2 className="font-black text-3xl text-center">Patient List</h2>

      <p className="text-lg mt-5 text-center mb-7">
        Record of
        <span className=" text-indigo-600 font-bold"> patients and appointments</span>:
      </p>

      <div className="md:h-[41rem] overflow-y-scroll">
        <Patient/>
        <Patient/>
        <Patient/>
        <Patient/>
        <Patient/>
        <Patient/>
      </div>


    </div>

    
  )
}

export default PatientList