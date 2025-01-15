//Funcion para saludar
saludar = function () {
  //Recupera el valor de la caja de texto
  let nombre = recuperarTxt("txtNombre");
  let apellido = recuperarTxt("txtApellido");
  let edad = recuperarInt("txtEdad");
  let estatura = recuperarFloat("txtEstatura");
  let mensaje = "Hola, " + nombre + " " + apellido;
  mostrarTexto("lblResultado", mensaje);
  mostrarImg("imgSaludo", "./imgs/momitoScientist.jpg");
};
