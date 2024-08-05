import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{
    
    //Destructuracion
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor} = props

    const estiloTitulo = {borderColor: colorPrimario}

    const colorFondo = {
        backgroundColor: hexToRgba(props.datos.colorPrimario, 0.5)
    }
    //


    //las segundas llaves en style, se refieren al uso de un objeto
    return <>
    { 
        colaboradores.length > 0 &&
        <section className="equipo" style={colorFondo}>
            <input 
                className="input-color"
                type='color'
                value={colorPrimario}
                onChange={(evento) =>{
                    actualizarColor(evento.target.value, id)
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3> 
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador = {eliminarColaborador}
                    />)
                }

            </div>
    </section>
    }
</>
}

export default Equipo