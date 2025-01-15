//-------------------------------------------VARIABLES GLOBALES---------------------------------------------
let puntos = 0;
let lanzamientos = 5;

//-------------------------------------------PARTE FUNCIONAL---------------------------------------------

//Lanza los dados e invoca a mostrarCara
jugar = function () {
  let resultado;
  resultado = lanzarDado();
  console.log(resultado);
  mostrarCara(resultado);
  modificarPuntos(resultado);
  modificarLanzamientos();
};

//Modifica los puntos obtenidos
modificarPuntos = function (num) {
  puntos = puntos + num;
  cambiarTexto("lblPuntos", puntos);
  if (puntos > 20) {
    cambiarTexto("lblFinal", "GANASTE!!");
    setTimeout(() => limpiar(), 5000);
  }
};

//Modifica los lanzamientos realizados
modificarLanzamientos = function () {
  lanzamientos = lanzamientos - 1;
  cambiarTexto("lblLanzamientos", lanzamientos);
  if (lanzamientos == 0) {
    cambiarTexto("lblFinal", "GAME OVER");
    mostrarOcultarBoton(true, "btnJugar");
    setTimeout(() => limpiar(), 5000);
  }
};

//Muestra u oculta el boton
mostrarOcultarBoton = function (ocultar, idButton) {
  let cmpButtonSeleccionado;
  cmpButtonSeleccionado = document.getElementById(idButton);
  cmpButtonSeleccionado.disabled = ocultar;
};

//Reinicia el juego
limpiar = function () {
  puntos = 0;
  lanzamientos = 5;
  cambiarTexto("lblPuntos", puntos);
  cambiarTexto("lblLanzamientos", lanzamientos);
  cambiarTexto("lblFinal", "");
  cambiarImagen("imgDado", "");
  mostrarOcultarBoton(false, "btnJugar");
};

//Muestra la imagen de los dados en pantalla
mostrarCara = function (num) {
  if (num == 1) {
    cambiarImagen("imgDado", "dados1.png");
  } else if (num == 2) {
    cambiarImagen("imgDado", "dados2.png");
  } else if (num == 3) {
    cambiarImagen("imgDado", "dados3.png");
  } else if (num == 4) {
    cambiarImagen("imgDado", "dados4.png");
  } else if (num == 5) {
    cambiarImagen("imgDado", "dados5.png");
  } else if (num == 6) {
    cambiarImagen("imgDado", "dados6.png");
  }
};

//Genera un valor aleatorio para los dados
lanzarDado = function () {
  let aleatorio;
  let aleatorioMultiplicado;
  let aleatorioEntero;
  let valorDado;
  aleatorio = Math.random();
  aleatorioMultiplicado = aleatorio * 6;
  aleatorioEntero = parseInt(aleatorioMultiplicado);
  valorDado = aleatorioEntero + 1;
  return valorDado;
};
