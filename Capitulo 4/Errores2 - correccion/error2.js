cambiarFeliz = function () {
  let cmpImagen;
  cmpImagen = document.getElementById("imgEmoji"); //Se referencia bien la funcion
  cmpImagen.src = "feliz.jpg";
};

cambiarCansado = function () {
  let cmpImagen;
  cmpImagen = document.getElementById("imgEmoji"); //Se escribe bien la id del componente
  cmpImagen.src = "cansado.png";
};
