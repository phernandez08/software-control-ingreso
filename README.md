# Software Control Ingreso

Software simple para el control de ingreso de inventario de **The Kids Place**.

## ¿Qué hace?

Provee funciones básicas para registrar el ingreso de productos al inventario
y consultar totales.

## Uso

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
