import { useState } from 'react'
import BotonToast from './Components/BotonToast'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import BotonStyled from './Components/BotonStyled'


function App() {
  return (
    <div>
        {/* <BotonToast type={"success"} message={"Usuario Registrado"} />
        <BotonToast type={"error"} message={"Error de Carga"} />
        <BotonToast type={"info"} message={"Revisar Datos"} />
        <ToastContainer position="top-right" autoClose={2000} /> */}

        <h1>Componente Styled</h1>
        <BotonStyled/>
    </div>
  )
}

export default App
