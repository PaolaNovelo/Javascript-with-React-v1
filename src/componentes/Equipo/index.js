import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) =>{
    
    //Destructuracion
    const {colorPrimario, titulo} = props.datos
    const {colaboradores} = props
    const estiloTitulo = {borderColor: colorPrimario}

    const colorFondo = {
        backgroundColor: props.datos.colorSecundario
    }
    //

    console.log(colaboradores.length > 0)

    //las segundas llaves en style, se refieren al uso de un objeto
    return <>
    { 
        colaboradores.length > 0 &&
        <section className="equipo" style={colorFondo}>
            <h3 style={estiloTitulo}>{titulo}</h3> 
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}/>)
                }

            </div>
    </section>
    }
</>
}

export default Equipo