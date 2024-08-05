import "./Colaborador.css"
import { AiOutlineCloseCircle } from "react-icons/ai";


const Colaborador = (props) => {
    //Destructuracion
    const{id, nombre, puesto, foto, equipo} = props.datos
    const {colorPrimario, eliminarColaborador} = props


    //para cada tarjeta de colaborador
    return <div className = "colaborador"> 
        <AiOutlineCloseCircle className = "eliminar" onClick={ ()=> eliminarColaborador(id)}/>
        <div className = "encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador