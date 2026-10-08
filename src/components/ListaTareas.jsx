function ListaTareas({ tareas, onCompletar, onEliminar }) {
  if (tareas.length === 0) {
    return (
      <div className="estado-vacio">
        <div className="icono-vacio">✓</div>

        <h2>No hay tareas</h2>

        <p>Agrega tu primera tarea para comenzar.</p>
      </div>
    );
  }

  return (
    <ul className="lista">
      {tareas.map((tarea) => (
        <li
          className={`tarea ${tarea.completada ? "tarea-completada" : ""}`}
          key={tarea.id}
        >
          <div className="informacion-tarea">
            <span className="indicador">{tarea.completada ? "✓" : "○"}</span>

            <span className="nombre-tarea">{tarea.nombre}</span>
          </div>

          <div className="acciones">
            <button
              className="boton-completar"
              onClick={() => onCompletar(tarea.id)}
            >
              {tarea.completada ? "Deshacer" : "Completar"}
            </button>

            <button
              className="boton-eliminar"
              onClick={() => onEliminar(tarea.id)}
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;
