const { test } = require("node:test");
const assert = require("node:assert/strict");
const { registrarIngreso, calcularTotalItems } = require("../src/inventario");

test("registrarIngreso crea el producto si no existe", () => {
  const inventario = {};
  registrarIngreso(inventario, "Camiseta", 10);
  assert.equal(inventario["Camiseta"], 10);
});

test("registrarIngreso suma cantidad si el producto ya existe", () => {
  const inventario = { "Camiseta": 5 };
  registrarIngreso(inventario, "Camiseta", 3);
  assert.equal(inventario["Camiseta"], 8);
});

test("registrarIngreso rechaza cantidades no positivas", () => {
  const inventario = {};
  assert.throws(() => registrarIngreso(inventario, "Camiseta", 0));
  assert.throws(() => registrarIngreso(inventario, "Camiseta", -1));
});

test("calcularTotalItems suma las cantidades de todos los productos", () => {
  const inventario = { "Camiseta": 10, "Pantalón": 5, "Gorra": 2 };
  assert.equal(calcularTotalItems(inventario), 17);
});

test("calcularTotalItems devuelve 0 para un inventario vacío", () => {
  assert.equal(calcularTotalItems({}), 0);
});
