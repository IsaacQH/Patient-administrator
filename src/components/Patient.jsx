

const Patient = ({patient}) => {

    const {nombre, owner, mail, date, symptoms} = patient

    return (
    
    <div className="m-3 bg-indigo-700 shadow-2xl rounded-lg px-5 py-10">
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
    </div>
  )
}

export default Patient

