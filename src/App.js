import { useState } from 'react';
import { v4 as uuid} from "uuid";
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto:"https://i.pinimg.com/736x/ca/9f/5b/ca9f5bcf4e674e831fd032b13a262ec0.jpg",
    nombre: "Paola",
    puesto: "Intern"
  }])
  

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Dev Ops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },
    //Se necesita recorrer el arreglo para que cree los componentes de los equipos
  ])


  console.log(uuid())

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

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id == id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

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
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor={actualizarColor}
        />
        )
}

      <Footer />

    </div>
  );
}

export default App;
