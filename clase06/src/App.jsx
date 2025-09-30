import { useState } from 'react'
import RandomUser from './components/RandomUser'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";




function App() {

  return (
    // <div>
    //     <h1>Random User API</h1>
    //     <RandomUser/>
    // </div>

        <Router>
          <Header/>
                <Container>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                    
                    <Route path="/clientes" element={<Clientes/>} />

                    <Route path="/productos" element={<Productos/>} />

                    <Route path="/servicios" element={<Servicios/>} />

                    <Route path="/contacto" element={<Contacto/>} />


                  </Routes>
                </Container>
          <Footer/>          
        </Router>
  )
}

export default App
