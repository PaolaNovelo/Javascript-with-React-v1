import "./Colaborador.css"

const Colaborador = (props) => {
    //Destructuracion
    const{nombre, puesto, foto, equipo} = props.datos
    const {colorPrimario} = props


    //para cada tarjeta de colaborador
    return <div className = "colaborador"> 
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