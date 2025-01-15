//Funciones basicas para manipular componentes html

//Funcion para RECUPERAR TEXTO
recuperarTxt = function (idCmp) {
  let cmpTxt = document.getElementById(idCmp);
  let ingreso = cmpTxt.value;
  return ingreso;
};

//Funcion para RECUPERAR ENTEROS
recuperarInt = function (idCmp) {
  let valor = recuperarTxt(idCmp);
  valor = parseInt(valor);
  return valor;
};

//Funcion para RECUPERAR FLOATS
recuperarFloat = function (idCmp) {
  let valor = recuperarTxt(idCmp);
  valor = parseFloat(valor);
  return valor;
};

//Funcion para MOSTRAR TEXTO
mostrarTexto = function (idCmp, mensaje) {
  let componente = document.getElementById(idCmp);
  componente.innerText = mensaje;
};

//Funcion para MSOTRAR TEXTO EN CAJA
mostrarCaja = function (idCmp, mensaje) {
  let componente = document.getElementById(idCmp);
  componente.value = mensaje;
};

//Funcion para MSOTRAR IMAGEN
mostrarImg = function (idCmp, rutaImg) {
  let componente = document.getElementById(idCmp);
  componente.src = rutaImg;
};
