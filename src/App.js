import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([])
  
  //Ternario --> condicion ? seMuestra : noSeMuestra
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator (crear una copia de datos actuales y luego agrega el colaborador)
    //agrega nuevos datos y react reacciona a esos cambios
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Lista de equipos

  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Dev Ops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
    //Se necesita recorrer el arreglo para que cree los componentes de los equipos
  ]


  return (
    <div>
      <Header />
      { mostrarFormulario ? <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
         /> : <> </>
          }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        //El metodo map recibe datos y con ellos crea un nuevo arreglo
        //Usa los objetos "equipo" creados en linea 17
        //En este caso, por cada objeto que se encuentre, creara un nuevo equipo
        equipos.map( (equipo) => 
          <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}/>
        )
      }
    </div>
  );
}

export default App;
