import { Children } from "react";
import { Navigate } from "react-router-dom";

export default function RutaProtegida({children})
{
    const auth=localStorage.getItem('auth')==='true';
    return auth ? children: <Navigate to="/login" />  
}