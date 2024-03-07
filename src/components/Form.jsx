
const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patient registration</h2>

      <p className="text-lg mt-5 text-center">
        Add patient and
        <span className=" text-indigo-600 font-bold"> follow record</span>:
      </p>

      <form className=" bg-white shadow-md rounded-lg px-5 py-10 mt-10 mb-15"> {/* Fondo blanco, sombra mediana, rounded border, padding x, padding y, margin top*/}

        {/* CAMPO NOMBRE */}
        <div className=" mb-5">  
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Pet's Name</label> {/* bloque separa etiquetas*/}
          <input 
                id = "pet"
                type = "text"
                placeholder="Name of your pet"
                className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md" 
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
          />              {/* borde2, width 100, padding, margintop, color del placeholder*/}
        </div>

        {/* CAMPO DATE*/}
        <div className=" mb-5">  
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Date</label> {/* bloque separa etiquetas*/}
          <input 
                id = "date"
                type = "date"
                className="border-2 w-full p-2 mt-2 rounded-md" 
          />              {/* borde2, width 100, padding, margintop, color del placeholder*/}
        </div>

        {/* CAMPO DATE*/}
        <div className=" mb-5">  
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Symptoms</label> {/* bloque separa etiquetas*/}
          <textarea
                id = "symptoms"
                placeholder="Describe your pet's symptoms"
                className="border-2 w-full p-2 mt-2 placeholder-indigo-400 rounded-md" 
          />
        </div>

        {/* SUBMIT*/}
        <input
                type = "submit"
                value = "Add patient"
                className=" bg-indigo-500 w-full text-white font-bold uppercase rounded-lg py-3 cursor-pointer hover:bg-indigo-700"
        />


      </form>

    </div>
  )
}
export default Form
