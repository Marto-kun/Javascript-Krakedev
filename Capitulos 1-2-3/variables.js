//Se usa la palabra "let" para declarar una variable

//Declarar puntaje

let puntaje;

iniciar = function () {
  console.log("Llamando a iniciar");
  puntaje = 0;
  console.log("puntaje= " + puntaje);
};

ponerMil = function () {
  puntaje = 1000;
};

mostrar = function () {
  alert("El puntaje es: " + puntaje);
};

sumarUno = function () {
  puntaje = puntaje + 1;
};

restarUno = function () {
  puntaje = puntaje - 1;
};

sumarDiez = function () {
  puntaje = puntaje + 10;
};

restarDiez = function () {
  puntaje = puntaje - 10;
};
