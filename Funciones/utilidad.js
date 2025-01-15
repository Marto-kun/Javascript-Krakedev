calcularUtilidad = function (ingresos, gastos) {
  let resUtil;
  let ingresosF;
  let gastosF;
  ingresosF = parseFloat(ingresos);
  gastosF = parseFloat(gastos);
  resUtil = ingresos - gastos;

  return resUtil;
};

ejecutarUtilidad = function () {
  //Variables a utilizar:
  let cmpIngresos;
  let cmpGastos;
  let lblUtilidad;
  let ingresos;
  let gastos;
  let utilidad;

  //Recuperar valores de ingresos y egresos

  cmpIngresos = document.getElementById("txtIngresos");
  cmpGastos = document.getElementById("txtGastos");
  ingresos = cmpIngresos.value;
  gastos = cmpGastos.value;
  //Mostrar en pantalla
  utilidad = calcularUtilidad(ingresos, gastos);
  //alert("La utilidad es: " + utilidad);
  lblUtilidad = document.getElementById("lblUtilidad");
  lblUtilidad.innerText = "Utilidad: " + utilidad;
};
