import { useState } from "react";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([]);

  function agregarTarea(nombre) {
    const nuevaTarea = {
      id: Date.now(),
      nombre: nombre,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);
  }

  function completarTarea(id) {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completada: !tarea.completada,
        };
      }

      return tarea;
    });

    setTareas(tareasActualizadas);
  }

  function eliminarTarea(id) {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);

    setTareas(tareasActualizadas);
  }

  const tareasPendientes = tareas.filter((tarea) => !tarea.completada).length;

  return (
    <main className="contenedor">
      <section className="tarjeta">
        <header className="encabezado">
          <h1>Lista de tareas</h1>

          <p>Organiza tus actividades y realiza seguimiento de tu progreso.</p>
        </header>

        <div className="resumen">
          <span>
            {tareas.length} {tareas.length === 1 ? "tarea" : "tareas"}
          </span>

          <span>{tareasPendientes} pendientes</span>
        </div>

        <FormularioTarea onAgregar={agregarTarea} />

        <ListaTareas
          tareas={tareas}
          onCompletar={completarTarea}
          onEliminar={eliminarTarea}
        />
      </section>
    </main>
  );
}

export default App;
