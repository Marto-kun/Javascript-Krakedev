sumar = function (num1, num2, num3) {
  let total;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  mun3 = parseFloat(num3);
  total = num1 + num2 + num3;
  return total;
};

obtenerInfo = function (nombre, apellido, profesion) {
  let respuesta;
  respuesta = nombre + " " + apellido + " - " + profesion;
  return respuesta
};

mostrarResultado = function (sum1, sum2, res) {
  console.log("El resultado de sumar " + sum1 + " + " + sum2 + " es " + res);
};

hackearNasaEnPelicula = function () {
  console.log("Hackeando nasa 0%");
  console.log("Hackeando nasa 20%");
  console.log("Hackeando nasa 40%");
  console.log("Hackeando nasa 60%");
  console.log("Hackeando nasa 80%");
  console.log("Hackeando nasa 90%");
  console.log("Hackeando nasa 99%");
  console.log("La nasa ha sido hackeada");
};

calcularEdad = function(nacimiento){
    let actual;
    actual = parseInt(new Date().getFullYear());
    nacimiento = parseInt(nacimiento),
    edad = actual - nacimiento
    return edad
}

calcularIVA = function(pSinIva){
    let iva;
    let pTotal;
    iva = pSinIva * 0.12
    pTotal = pSinIva + iva
    return pTotal
}

repasar = function(){
    console.log("Esta función fue creada solo para hacer un ejemplo de una función que no recibe nada y no retorna nada")
}

repasarMas = function(){
    return "En este punto debemos estar super claros en crear funciones"
}

llamarAtencion = function(nombre, mensaje){
    let dicho;
    dicho = nombre +" "+mensaje;
    alert(dicho)
    return dicho
}

