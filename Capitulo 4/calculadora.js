  
  //Variables a utilizar:
  let cmpCaja1;
  let val1;
  let cmpCaja2;
  let val2;
  let res;
  let val1Int;
  let val2Int;
  let cmpRes;

sumar = function () {
  //1.Recuperar el valor de la primera caja de texto

  cmpCaja1 = document.getElementById("txtV1");
  val1 = cmpCaja1.value;
  val1Int = parseInt(val1);

  //2.Recuperar el valor de la segunda caja de texto

  cmpCaja2 = document.getElementById("txtV2");
  val2 = cmpCaja2.value;
  val2Int = parseInt(val2);

  //3.Sumar los dos valores

  res = val1Int + val2Int;

  //4.Mostrar el valor en pantalla

  cmpRes = document.getElementById("lblResultado");
  cmpRes.innerText="Resultado = "+res;
  
};

restar = function () {
  //1.Recuperar el valor de la primera caja de texto
  
  cmpCaja1 = document.getElementById("txtV1");
  val1 = cmpCaja1.value;
  val1Int = parseInt(val1);

  //2.Recuperar el valor de la segunda caja de texto

  cmpCaja2 = document.getElementById("txtV2");
  val2 = cmpCaja2.value;
  val2Int = parseInt(val2);

  //3.Restar los dos valores

  res = val1Int - val2Int;

  //4.Mostrar el valor en pantalla

  cmpRes = document.getElementById("lblResultado");
  cmpRes.innerText="Resultado = "+res;
  
};

multiplicar = function () {
  //1.Recuperar el valor de la primera caja de texto
  
  cmpCaja1 = document.getElementById("txtV1");
  val1 = cmpCaja1.value;
  val1Int = parseInt(val1);

  //2.Recuperar el valor de la segunda caja de texto

  cmpCaja2 = document.getElementById("txtV2");
  val2 = cmpCaja2.value;
  val2Int = parseInt(val2);

  //3.Multiplicar los dos valores

  res = val1Int * val2Int;

  //4.Mostrar el valor en pantalla

  cmpRes = document.getElementById("lblResultado");
  cmpRes.innerText="Resultado = "+res;
  
};

dividir = function () {
  //1.Recuperar el valor de la primera caja de texto
  
  cmpCaja1 = document.getElementById("txtV1");
  val1 = cmpCaja1.value;
  val1Int = parseInt(val1);

  //2.Recuperar el valor de la segunda caja de texto

  cmpCaja2 = document.getElementById("txtV2");
  val2 = cmpCaja2.value;
  val2Int = parseInt(val2);

  //3.Dividir los dos valores

  res = val1Int / val2Int;

  //4.Mostrar el valor en pantalla

  cmpRes = document.getElementById("lblResultado");
  cmpRes.innerText="Resultado = "+res;
  
};

limpiar = function(){
  cmpCaja1 = document.getElementById("txtV1");
  cmpCaja1.value = "";
  cmpCaja2 = document.getElementById("txtV2");
  cmpCaja2.value = "";
  cmpRes = document.getElementById("lblResultado");
  cmpRes.innerText = "Resultado: ";

};

