/**
 * Módulo simple de control de ingreso de inventario.
 */

/**
 * Registra el ingreso de un producto al inventario.
 * Si el producto ya existe, suma la cantidad. Si no, lo crea.
 *
 * @param {Object} inventario - Objeto { producto: cantidad }.
 * @param {string} producto - Nombre del producto.
 * @param {number} cantidad - Cantidad que ingresa (debe ser positiva).
 * @returns {Object} El inventario actualizado.
 */
function registrarIngreso(inventario, producto, cantidad) {
  if (!producto || typeof producto !== "string") {
    throw new Error("El nombre del producto es obligatorio.");
  }
  if (typeof cantidad !== "number" || cantidad <= 0) {
    throw new Error("La cantidad debe ser un número positivo.");
  }

  const actual = inventario[producto] || 0;
  inventario[producto] = actual + cantidad;
  return inventario;
}

/**
 * Calcula el total de artículos en el inventario, sumando todas las
 * cantidades de todos los productos registrados.
 *
 * @param {Object} inventario - Objeto { producto: cantidad }.
 * @returns {number} Total de artículos en inventario.
 */
function calcularTotalItems(inventario) {
  return Object.values(inventario).reduce((total, cantidad) => total + cantidad, 0);
}

module.exports = { registrarIngreso, calcularTotalItems };
