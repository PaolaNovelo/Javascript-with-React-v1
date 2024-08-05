import { useState } from "react"
import { v4 as uuid} from "uuid";
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const Formulario = (props) => {
    //Estados de nombre, puesto y foto
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    //Estado del equipo
    const [equipo, actualizarEquipo] = useState("")

    //Destructuracion
    const { registrarColaborador} = props
    
    //importante saber manejar esto
    //Para que no se recargue la pagina al hacer click en boton
    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            id : uuid(),
            nombre : nombre,
            puesto: puesto,
            foto : foto,
            equipo : equipo
        }
        registrarColaborador(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required valor = {nombre} 
                actualizarValor={actualizarNombre}
                />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required valor = {puesto} 
                actualizarValor={actualizarPuesto}                />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required valor = {foto} 
                actualizarValor={actualizarFoto}  
                />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                />
            <Boton>
                Crear
            </Boton>

        </form>
    </section>
}

export default Formulario