let cmpTitulo;
let cmpImagen;

modificarTexto = function () {
  cmpTitulo = document.getElementById("titulo1");
  cmpTitulo.innerText = "Componente cambiado";
  console.log(cmpTitulo.innerText);
};

modificarImagen = function () {
  cmpImagen = document.getElementById("img1");
  cmpImagen.src = "momito.jpg";
};
