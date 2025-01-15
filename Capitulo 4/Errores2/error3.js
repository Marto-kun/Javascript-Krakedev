cambiarFeliz = function () {
  let cmpMensaje;
  cmpMensaje = document.getElementById("txtEmoji");
  cmpMensaje.src = "FELIZ"; //Cambia el atributo equivocado
};

cambiarCansado = function () {
  let cmpMensaje;
  cmpMensaje = document.getElementById("txtEmoji");
  cmpImagen.innerText = "CANSADO"; //El componente referenciado es incorrecto
};
