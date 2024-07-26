import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    //Metodo map (para usar arreglos dentro del jsx)
    //Metodo map -> arreglo.map( (equipo, index/posicion) =>{
    //    return <option></option>
    // })


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    //Importante entender los arreglos
    return <div className="lista-opciones">    
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index)=> 
                <option key={index} value={equipo}>{equipo}</option>)
                }
        </select>
    </div>
}

export default ListaOpciones