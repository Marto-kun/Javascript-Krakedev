probarFunciones = function () {
  saludar();
  saludarPersona("Juanito");
  saludarJugador("Martin", "Marto Kun", "Vozmediano");
};

probarSaludarPersona = function () {
  let cmpNombre;
  let nombre;
  cmpNombre = document.getElementById("txtNombre");
  nombre = cmpNombre.value;
  saludarPersona(nombre);
};

probarSaludarJugador = function () {
  let cmpNombre;
  let nombre;
  let cmpApodo;
  let apodo;
  cmpNombre = document.getElementById("txtNombre");
  nombre = cmpNombre.value;
  cmpApodo = document.getElementById("txtApodo");
  apodo = cmpApodo.value;
  saludarJugador(nombre, apodo);
};

probarSaludarAmigo = function () {
  let cmpNombre;
  let nombre;
  let cmpApodo;
  let apodo;
  let cmpApellido;
  let apellido;
  cmpNombre = document.getElementById("txtNombre");
  nombre = cmpNombre.value;
  cmpApodo = document.getElementById("txtApodo");
  apodo = cmpApodo.value;
  cmpApellido = document.getElementById("txtApellido");
  apellido = cmpApellido.value;
  saludarAmigo(nombre, apellido, apodo);
};

saludar = function () {
  console.log("Hola amigos");
};

saludarPersona = function (nombre) {
  alert("Hola, " + nombre);
};

saludarJugador = function (nombre, alias) {
  console.log("Hola, " + nombre + ", " + alias);
};

saludarAmigo = function (nombre, apellido, apodo) {
  console.log("Hola " + nombre + "" + apellido + " " + apodo);
};
