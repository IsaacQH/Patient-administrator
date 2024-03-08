

const Patient = ({patient}) => {

    const {nombre, owner, mail, date, symptoms} = patient

    return (
    
    <div className="m-3 bg-indigo-700 shadow-2xl rounded-lg px-5 py-6">
        <p className="font-bold mb-3 text-white uppercase">Name: 
        <span className="font-normal normal-case text-white"> {nombre}</span>
        </p>

        <p className="font-bold mb-3 text-white uppercase">Owner: 
        <span className="font-normal normal-case  text-white"> {owner}</span>
        </p>
        <p className="font-bold mb-3 text-white uppercase">Email: 
        <span className="font-normal normal-case  text-white"> {mail}</span>
        </p>
        <p className="font-bold mb-3  text-white uppercase">Date: 
        <span className="font-normal normal-case  text-white"> {date}</span>
        </p>
        <p className="font-bold mb-3 text-white uppercase">Symptoms: 
        <span className="font-normal normal-case  text-white"> {symptoms}</span>
        </p>

        <div className="mt-6 flex justify-end">
            <button
                type="button"
                className="py-2 px-10 bg-indigo-400 hover:bg-indigo-500 text-white font-bold uppercase rounded-lg"
            >Edit</button>
                        <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg ml-3"
            >Delete</button>
        </div>

    </div>
  )
}

export default Patient

