calcularValorDescuento = function (monto, porcentajeDescuento) {
  let descuento = (monto * porcentajeDescuento) / 100;
  return descuento;
};

calcularIVA = function (precio) {
  let iva = precio * 0.12;
  return iva;
};

calcularSubtotal = function (precio, cantidad) {
  let subtotal = precio * cantidad;
  return subtotal;
};

calcularTotal = function (subtotal, descuento, iva) {
  let total = subtotal - descuento + iva;
  return total;
};
