jugar = function () {
  let valor = lanzarDado();
  console.log(valor);
  cambiarTexto("lblNumero", valor);
  if(valor>3){
    console.log("Es mayor a 3");
    console.log("Ganaste");
  }else{
    console.log("Perdiste");
  }
};

//Lanzar dados
lanzarDado = function () {
  let aleatorio = Math.random();
  let mult = parseInt(aleatorio * 6);
  let valorDado = mult + 1;
  return valorDado;
};
