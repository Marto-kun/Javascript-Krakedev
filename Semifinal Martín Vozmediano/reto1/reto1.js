probar = function () {
  var areaRectangulo = calcularAreaRectangulo(10, 5);
  console.log("area Rectangulo: " + areaRectangulo);
  var areaCuadrado = calcularAreaCuadrado(8);
  console.log("area Cuadrado: " + areaCuadrado);
  var perimetroRectangulo = calcularPerimetroRectangulo(10, 5);
  console.log("perimetro Rectangulo: " + perimetroRectangulo);
  var perimetroCuadrado = calcularPerimetroCuadrado(8);
  console.log("perimetro Cuadrado: " + perimetroCuadrado);
  var promedio = calcularPromedio(10, 20, 15, 15);
  console.log("promedio:" + promedio);
};

calcularAreaRectangulo = function (base, altura) {
  let resultado;
  resultado = base * altura;
  return resultado;
};

calcularAreaCuadrado = function (lado) {
  let resultado;
  resultado = lado * lado;
  return resultado;
};

calcularPerimetroRectangulo = function (base, altura) {
  let resultado;
  resultado = 2 * base + 2 * altura;
  return resultado;
};

calcularPerimetroCuadrado = function (lado) {
  let resultado;
  resultado = lado * 4;
  return resultado;
};

calcularPromedio = function (val1, val2, val3, val4) {
   let resultado;
   resultado = (val1+val2+val3+val4)/4;
   return resultado;
};


