import { useState } from "react";

export default function MostrarTexto() {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ocultar" : "Mostrar"}
      </button>
      {visible && <p>texto ☺</p>}
    </div>
  );
}
