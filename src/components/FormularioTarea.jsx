import { useState } from "react";

function FormularioTarea({ onAgregar }) {
  const [nombre, setNombre] = useState("");

  function manejarCambio(e) {
    setNombre(e.target.value);
  }

  function manejarEnvio(e) {
    e.preventDefault();

    if (!nombre.trim()) {
      return;
    }

    onAgregar(nombre.trim());

    setNombre("");
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="¿Qué necesitas hacer?"
        value={nombre}
        onChange={manejarCambio}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTarea;
