const MAX_TAREAS = 10;
const MAX_TITULO = 100;
const MAX_DESCRIPCION = 500;

const Estado = Object.freeze({
  PENDIENTE: 0,
  EN_CURSO: 1,
  TERMINADA: 2,
  CANCELADA: 3
});

const Dificultad = Object.freeze({
  FACIL: 0,
  MEDIO: 1,
  DIFICIL: 2
});

const nombresEstado = ["Pendiente", "En curso", "Terminada", "Cancelada"];
const emojisDificultad = ["⭐", "⭐⭐", "⭐⭐⭐"];

module.exports = {
  MAX_TAREAS,
  MAX_TITULO,
  MAX_DESCRIPCION,
  Estado,
  Dificultad,
  nombresEstado,
  emojisDificultad
};