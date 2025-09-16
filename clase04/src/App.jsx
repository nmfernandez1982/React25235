import { useState } from 'react';
import Contador from './components/Contador'
import MostrarTexto from './components/MostrarTexto';
// ----------------------
import BotonClick from './eventos/BotonClick';
import CajaMouse from './eventos/CajaMouse';
import FormularioControlado from './formularios/FormularioControlado';
function App() 
{

  return (
    <div>
      <h1>Ejemplo Nro1.</h1>
      <Contador/>
       <hr/>
      <MostrarTexto/>
      <hr/>
      <BotonClick/>
      <hr/>
      <CajaMouse/>
      <hr/>
      <FormularioControlado/>
    </div>
  )
}

export default App
