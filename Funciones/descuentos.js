calcularDescuento = function (valorReal, porcentajeDescuento) {
  let valorDescuento;
  let total;
  valorDescuento = (valorReal * porcentajeDescuento) / 100;
  total = valorReal - valorDescuento;
  return total;
};

ejecutarDescuento = function () {
  //Variables a utilizar:
  let cmpMonto;
  let cmpDescuento;
  let lblTotal;
  let monto;
  let descuento;
  let total;

  //Recuperar valor real y porcentaje de descuento

  cmpMonto = document.getElementById("txtMonto");
  cmpDescuento = document.getElementById("txtDescuento");
  monto = parseInt(cmpMonto.value);
  descuento = parseInt(cmpDescuento.value);
  
  //Mostrar en pantalla
  total = calcularDescuento(monto, descuento);
  lblTotal = document.getElementById("lblTotal");
  lblTotal.innerText = "Total: " + total;
};
