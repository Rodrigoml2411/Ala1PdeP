const { pedirEntrada, cerrarEntrada } = require("./entrada");
const {
  Estado,
  Dificultad,
  MAX_TAREAS,
  MAX_TITULO,
  MAX_DESCRIPCION
} = require("./configuracion");
const {
  agregarTarea,
  obtenerTareas,
  buscarPorTitulo,
  filtrarPorEstado
} = require("./almacenTareas");
const { mostrarTarea, mostrarTareas } = require("./vistaTareas");


async function agregarTareas() {
  if (obtenerTareas().length >= MAX_TAREAS) {
    console.log("Límite de tareas alcanzado.\n");
    return;
  }

  const nueva = {
    titulo: (await pedirEntrada("Ingrese el título de la tarea: ")).slice(0, MAX_TITULO),
    descripcion: (await pedirEntrada("Descripción (opcional, ENTER para omitir): ")).slice(0, MAX_DESCRIPCION)
  };

  const dif = parseInt(await pedirEntrada("Dificultad (0: Fácil, 1: Medio, 2: Difícil): "));
  if (dif >= 0 && dif <= 2) {
    nueva.dificultad = dif;
  } else {
    nueva.dificultad = Dificultad.FACIL;
  }

  const est = parseInt(await pedirEntrada("Estado (0: Pendiente, 1: En curso, 2: Terminada, 3: Cancelada): "));
  if (est >= 0 && est <= 3) {
    nueva.estado = est;
  } else {
    nueva.estado = Estado.PENDIENTE;
  }

  nueva.fechaCreacion = await pedirEntrada("Ingrese la fecha de creación (Formato: AAAA-MM-DD): ");

  agregarTarea(nueva);

  console.log("✅ Tarea agregada con éxito.\n");
}

async function verTareas() {
  let opcion;
  do {
    console.log("\n¿Qué tareas deseas ver?");
    console.log("1. Todas las tareas.");
    console.log("2. Tareas pendientes.");
    console.log("3. Tareas en curso.");
    console.log("4. Tareas terminadas.");
    console.log("5. Tareas canceladas.");
    console.log("0. Salir.");
    opcion = parseInt(await pedirEntrada("> "));

    switch (opcion) {
      case 1:
        console.log("Mostrando todas las tareas...");
        mostrarTareas(obtenerTareas());
        break;

      case 2:
        console.log("Mostrando tareas pendientes...");
        mostrarTareas(filtrarPorEstado(Estado.PENDIENTE));
        break;

      case 3:
        console.log("Mostrando tareas en curso...");
        mostrarTareas(filtrarPorEstado(Estado.EN_CURSO));
        break;

      case 4:
        console.log("Mostrando tareas terminadas...");
        mostrarTareas(filtrarPorEstado(Estado.TERMINADA));
        break;

      case 5:
        console.log("Mostrando tareas canceladas...");
        mostrarTareas(filtrarPorEstado(Estado.CANCELADA));
        break;

      case 0:
        console.log("Saliendo de la visualización de tareas...");
        break;

      default:
        console.log("Opción no válida.");
        break;
    }
  } while (opcion !== 0);
}

async function buscarTareas() {
  let tituloBuscado = await pedirEntrada("Pon el nombre de la tarea que deseas buscar: ");
  let encontrada = buscarPorTitulo(tituloBuscado);

  if (encontrada) {
    console.log("\n✅ Tarea encontrada:");
    mostrarTarea(encontrada);
  } else {
    console.log("❌ Tarea no encontrada.");
  }
}

async function main() {
  let respuesta;
  do {
    console.log("\nHola Olivia!!");
    console.log("¿Qué deseas hacer?");
    console.log("1. Ver mis tareas.");
    console.log("2. Buscar una tarea.");
    console.log("3. Agregar una tarea.");
    console.log("0. Salir.");
    respuesta = parseInt(await pedirEntrada("> "));

    switch (respuesta) {
      case 1:
        await verTareas();
        break;
      case 2:
        await buscarTareas();
        break;
      case 3:
        await agregarTareas();
        break;
      case 0:
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción no válida.");
    }
  } while (respuesta !== 0);

  cerrarEntrada();
}

// Ejecutar programa
main();