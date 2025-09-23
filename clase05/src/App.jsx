import { useState } from 'react'
import  Saludo  from './components/Saludo'
import  Usuario  from './components/Usuario'
import  Boton  from './components/Boton'
import  DragonBall  from './components/DragonBall'





function App() {
    const mostrarAlerta = () =>alert('Hola mundo...');

  return (
   <div>
      <h1>Ejemplos de Props</h1>
      <Saludo nombre="Nicolas"/>
      <Saludo nombre="Julieta"/>
      <Saludo nombre="Luz"/>

      <Usuario nombre="Nicolas" edad={44} />
      <Usuario nombre="Julieta" edad={45} />


      <Boton texto="Ingresar" onClick={mostrarAlerta} />
      <DragonBall/>

   </div>
  )
}

export default App
