import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import PintarDatos from "./components/PintarDatos"

const App = () => {

  const [nombrePersonaje, setNombrePersonajes] = useState('')

 
  return (
    <div className="container">
        <h1>App Rick and Morty</h1>
        <Formulario setNombrePersonajes ={setNombrePersonajes}/>
        <PintarDatos nombrePersonaje ={nombrePersonaje}/>
    </div>
  )
}

export default App

