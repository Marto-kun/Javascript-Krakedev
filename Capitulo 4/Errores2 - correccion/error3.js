cambiarFeliz = function () {
  let cmpMensaje;
  cmpMensaje = document.getElementById("txtEmoji");
  cmpMensaje.innerText = "FELIZ"; //Se cambia el atributo correcto
};

cambiarCansado = function () {
  let cmpMensaje;
  cmpMensaje = document.getElementById("txtEmoji");
  cmpMensaje.innerText = "CANSADO"; //Se referencia el componente correcto
};
