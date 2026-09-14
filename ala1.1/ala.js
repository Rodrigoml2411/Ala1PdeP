// 1. Importar readline para pedir datos por consola
const readline = require("readline");

// 2. Crear la interfaz para leer y escribir en consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 3. Función auxiliar para pedir entradas al usuario
function input(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}
//De aca para arriba no tocar

async function sumar() {
    const a = await input("Ingrese el primer numero: ");
    const b = await input("Ingrese el segundo numero: ");
    const suma = parseInt(a) + parseInt(b);
    console.log("La suma es: ", suma);
}

async function restar() {
    const a = await input("Ingrese el primer numero: ");
    const b = await input("Ingrese el segundo numero: ");
    const resta = parseInt(a) - parseInt(b);
    console.log("La resta es: ", resta);
}

async function multiplicar() {
    const a = await input("Ingrese el primer numero: ");
    const b = await input("Ingrese el segundo numero: ");
    const multiplicacion = parseInt(a) * parseInt(b);
    console.log("La multiplicacion es: ", multiplicacion);
}

async function dividir() {
    const a = await input("Ingrese el primer numero: ");
    const b = await input("Ingrese el segundo numero: ");
    if (b == 0) {
        console.log("No se puede dividir por cero");
    }
    else {
        const division = parseInt(a) / parseInt(b);
        console.log("La division es: ", division);
    }
}


// 4. Función principal (simula el "main" de C/Java)
async function main() {
let opcion;
  do {
    console.log("Seleccione una operacion:");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir");
    opcion = await input("Ingrese una opcion: ");

    switch (opcion) {
        case "1":
            await sumar();
            break;
        case "2":
            await restar();
            break;
        case "3":
            await multiplicar();
            break;
        case "4":
            await dividir();
            break;
        case "5":
            console.log("Saliendo...");
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
    } while (opcion !== "5");
  rl.close();
}

// 5. Ejecutar el programa
main();
