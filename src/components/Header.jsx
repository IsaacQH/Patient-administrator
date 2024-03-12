
//Componente de Header

function Header() {


    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-1/3 mx-auto"> {/*Le da un fondo negro, un tamaño de 5xl y lo centra, Le da margen right de 10 y width de 1/2 (33%), el md da un val minimo*/}
                Patient Tracking
                <span className=" text-red-700"> Veterinary</span>
            </h1>
        </>
    )
}

export default Header