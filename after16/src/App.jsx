import { useState } from 'react'
import Home from "./pages/Login";
import Login from "./pages/Home";
import { Route, Routes,Link } from 'react-router-dom';


function App() {


  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> 
      </nav>


      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
    </>
  )
}

export default App
