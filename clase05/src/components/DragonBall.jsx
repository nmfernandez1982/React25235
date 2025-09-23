import { useEffect, useState } from "react";

function DragonBall() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.items || data);
      })
      .catch((error) => console.error("Error al cargar personajes:", error))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p>Cargando personajes...</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Personajes de Dragon Ball</h2>
      <ul>
        {personajes.slice(0, 10).map((p) => ( 
          <li key={p.id}>
            {p.name} ({p.race})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DragonBall;
