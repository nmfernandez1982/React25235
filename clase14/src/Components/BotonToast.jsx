import React from 'react';
import {toast} from 'react-toastify';
import {FaBell} from 'react-icons/fa';

export default function BotonToast({message,type}){

    const handleClick=()=>{
        switch(type){
            case "success":
                toast.success(message || "Exito");
                break;
            case "error":
                toast.error(message || "Error");
                break;
            case "info":
                toast.info(message || "Informacion");
                break;
            default:
                toast(message || "Notificacion");
                break;
        }
    };

return(
    <button onClick={handleClick} style={{marginRight:10}}>
        <FaBell style={{marginRight:5}}/>
        {type ? type.toUpperCase() : "NOTIFICAR"}
    </button>
);
}