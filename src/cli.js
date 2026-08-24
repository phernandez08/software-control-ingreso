/**
 * Interfaz de línea de comandos interactiva para el control de ingreso
 * de inventario de The Kids Place.
 *
 * Uso: npm start
 */
const readline = require("node:readline");
const fs = require("node:fs");
const path = require("node:path");
const { registrarIngreso, calcularTotalItems } = require("./inventario");

const DATA_FILE = path.join(__dirname, "..", "data", "inventario.json");

function cargarInventario() {
  try {
    const contenido = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(contenido);
  } catch {
    return {};
  }
}

function guardarInventario(inventario) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(inventario, null, 2));
}

function mostrarInventario(inventario) {
  const productos = Object.keys(inventario);
  if (productos.length === 0) {
    console.log("El inventario está vacío.");
    return;
  }
  console.log("\nInventario actual:");
  for (const producto of productos) {
    console.log(`  - ${producto}: ${inventario[producto]}`);
  }
}

function mostrarMenu() {
  console.log("\n=== The Kids Place - Control de Ingreso ===");
  console.log("1. Registrar ingreso de producto");
  console.log("2. Ver inventario");
  console.log("3. Ver total de artículos");
  console.log("4. Salir");
}

function main() {
  const inventario = cargarInventario();
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  function ciclo() {
    mostrarMenu();
    rl.question("Elige una opción: ", (opcionTexto) => {
      const opcion = opcionTexto.trim();

      switch (opcion) {
        case "1":
          rl.question("Nombre del producto: ", (producto) => {
            rl.question("Cantidad: ", (cantidadTexto) => {
              const cantidad = Number(cantidadTexto.trim());
              try {
                registrarIngreso(inventario, producto.trim(), cantidad);
                guardarInventario(inventario);
                console.log(`✔ Ingreso registrado: ${producto.trim()} +${cantidad}`);
              } catch (error) {
                console.log(`✖ Error: ${error.message}`);
              }
              ciclo();
            });
          });
          return;
        case "2":
          mostrarInventario(inventario);
          break;
        case "3":
          console.log(`Total de artículos en inventario: ${calcularTotalItems(inventario)}`);
          break;
        case "4":
          console.log("¡Hasta luego!");
          rl.close();
          return;
        default:
          console.log("Opción no válida.");
      }

      ciclo();
    });
  }

  ciclo();
}

main();
