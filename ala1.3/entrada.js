const readline = require("readline");

const interfaz = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirEntrada(pregunta) {
  return new Promise((resolver) => {
    interfaz.question(pregunta, resolver);
  });
}

function cerrarEntrada() {
  interfaz.close();
}

module.exports = { pedirEntrada, cerrarEntrada };