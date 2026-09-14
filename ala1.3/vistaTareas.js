const { nombresEstado, emojisDificultad } = require("./configuracion");

function mostrarTarea(tarea, numero) {
  if (numero !== undefined) {
    console.log(`\nTarea #${numero}`);
  }
  console.log("Título:", tarea.titulo);
  console.log("Descripción:", tarea.descripcion);
  console.log("Estado:", nombresEstado[tarea.estado]);
  console.log("Dificultad:", emojisDificultad[tarea.dificultad]);
  console.log("Fecha de creación:", tarea.fechaCreacion);
}

function mostrarTareas(tareas) {
  if (tareas.length === 0) {
    console.log("No hay tareas en este estado.\n");
    return;
  }

  tareas.forEach((tarea, numero) => {
    if (tarea.indice !== undefined) {
      console.log(`Tarea #${tarea.indice + 1}: ${tarea.titulo}`);
      console.log("Descripción:", tarea.descripcion, "\n");
    } else {
      mostrarTarea(tarea, numero + 1);
    }
  });
}

module.exports = { mostrarTarea, mostrarTareas };