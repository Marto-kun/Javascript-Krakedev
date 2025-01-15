//Promedio con notas recuperadas
calcularPromedioNotas = function () {
  let n1;
  let n2;
  let n3;
  let promedio;
  let msg;
  n1 = recuperarFlotante("txtN1");
  n2 = recuperarFlotante("txtN2");
  n3 = recuperarFlotante("txtN3");
  promedio = calcularPromedio(n1, n2, n3).toFixed(2);
  msg = "Tu promedio es: " + promedio;
  cambiarTexto("lblPromedio", msg);
  if (promedio > 0 && promedio < 5) {
    cambiarImagen("img","./gifs/reprobado.gif")
  }else if(promedio >= 5 && promedio <=8){
    cambiarImagen("img","./gifs/goodJob.gif")
  }else if(promedio>8 && promedio <=10){
    cambiarImagen("img","./gifs/excelente.gif")
  }else{
    cambiarImagen("img","./gifs/error.gif")
  }
};
