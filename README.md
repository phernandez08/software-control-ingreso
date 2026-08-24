# Software Control Ingreso

Software simple para el control de ingreso de inventario de **The Kids Place**.

## ¿Qué hace?

Provee funciones básicas para registrar el ingreso de productos al inventario
y consultar totales.

## Uso (app interactiva)

Requiere [Node.js](https://nodejs.org/) instalado.

```bash
npm start
```

Te muestra un menú en la terminal para registrar ingresos de productos, ver
el inventario y consultar el total de artículos. Los datos se guardan
automáticamente en `data/inventario.json` (no se sube al repositorio).

## Uso (como librería)

```js
const { registrarIngreso, calcularTotalItems } = require("./src/inventario");

const inventario = {};
registrarIngreso(inventario, "Camiseta", 10);
registrarIngreso(inventario, "Pantalón", 5);

console.log(calcularTotalItems(inventario)); // 15
```

## Tests

```bash
npm test
```

## Licencia

MIT
