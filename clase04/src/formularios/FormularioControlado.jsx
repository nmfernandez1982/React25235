import { useState } from "react";


export default function FormularioControlado()
{
    const [nombre,setNombre]=useState("");
    const [provincia,setProvincia]=useState("");
    const [fecha,setFecha]=useState("");

    const manejarSubmit=(e)=>{
        e.preventDefault();
        alert(
            `Datos Enviados Correctamente`
        );
        setNombre("");
        setProvincia("");
        setFecha("");
    };

return(
<div>
    <form onSubmit={manejarSubmit}>

        {/* nombre */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Nombre:{" "}
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Escribe tu nombre"
              required
            />
          </label>
        </div>


        {/* provincia */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Provincia:{" "}
            <select
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              required
            >
              <option value="">-- Selecciona --</option>
              <option value="Buenos Aires">Buenos Aires</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Santa Fe">Santa Fe</option>
              <option value="Mendoza">Mendoza</option>
            </select>
          </label>
        </div>

        {/* fecha */}
        <div style={{ marginBottom: "10px" }}>
          <label>
            Fecha de nacimiento:{" "}
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </label>
        </div>

        
        <button type="submit">Enviar</button>
    </form>
</div>

)


}