//Crear una funcion llamada convertirCelsiusAFarenheit
//que reciba como parámetro la temperatura en grados celsius
//y RETORNE la temperatura en grados farenheit
convertirCelsiusAFarenheit = function (temp) {
  let res;
  res = temp * (9 / 5) + 32;
  return res;
};

mostrarConversion = function () {
  cmpCaja = document.getElementById("txtCelsius");
  val = cmpCaja.value;
  valFloat = parseFloat(val);

  res = convertirCelsiusAFarenheit(valFloat).toFixed(2);
  lblFarenheit = document.getElementById("lblFarenheit");
  lblFarenheit.innerText = "Resultado = " + res + "F";

  cmpImg = document.getElementById("imgBandera");
  cmpImg.src = "ok.jpg";
};

reiniciar = function(){
  let cmpCaja;
  let lblFarenheit;
  let cmpImg;
  cmpCaja = document.getElementById("txtCelsius");
  cmpCaja.value="";
  lblFarenheit = document.getElementById("lblFarenheit");
  lblFarenheit.innerText = "Resultado = ";
  cmpImg = document.getElementById("imgBandera");
  cmpImg.src = "pensando.jpg";
}
