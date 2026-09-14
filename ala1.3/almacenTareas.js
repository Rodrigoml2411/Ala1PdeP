const tareas = [];

function agregarTarea(tarea) {
  tareas.push(tarea);
}

function obtenerTareas() {
  return tareas;
}

function buscarPorTitulo(titulo) {
  return tareas.find((tarea) => tarea.titulo === titulo);
}

function filtrarPorEstado(estado) {
  return tareas
    .map((tarea, indice) => ({ ...tarea, indice }))
    .filter((tarea) => tarea.estado === estado);
}

module.exports = {
  agregarTarea,
  obtenerTareas,
  buscarPorTitulo,
  filtrarPorEstado
};