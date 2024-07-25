import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Para la funcionalidad de cerrar o abrir formulario
    //Estado - hooks
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    //A ontinuacion, con mostrar =true, y !mostrar = false y visceversa, hicimos un switch de true/false
    console.log(props)
    //const [mostrar, actualizarMostrar] = useState(true)
    //const manejarClick = () =>{
    //    console.log("Mostrar/Ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg