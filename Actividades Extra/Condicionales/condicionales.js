//Funciones de practica de condicionales

//1. Tasa de Interes
calcularTasaInteres = function (ingresoAnual) {
  let valorTasa;
  if (ingresoAnual < 300000) {
    return (valorTasa = 0.16);
  } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
    return (valorTasa = 0.15);
  } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
    return (valorTasa = 0.14);
  } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
    return (valorTasa = 0.13);
  } else {
    return (valorTasa = 0.12);
  }
};

//2. Capacidad de Pago
calcularCapacidadPago = function (edad, ingresos, egresos) {
  let capacidad;
  if (edad > 50) {
    capacidad = (ingresos - egresos) * 0.3;
    return capacidad;
  } else {
    capacidad = (ingresos - egresos) * 0.4;
  }
  return capacidad;
};

//3. Descuento
calcularDescuento = function (precio, cantidad) {
  let total;
  if (cantidad < 3) {
    total = precio * cantidad;
  } else if (cantidad >= 3 && cantidad <= 5) {
    total = precio * cantidad * 0.02;
  } else if (cantidad >= 6 && cantidad <= 11) {
    total = precio * cantidad * 0.03;
  } else {
    total = precio * cantidad * 0.04;
  }
  return total;
};

//4. Colesterol
determinarColesterolLDL = function (nivelColesterol, edad) {
  let nivel;
  if (edad <= 19 && nivelColesterol < 110) {
    nivel = "Saludable";
  } else if (edad >= 20 && nivelColesterol < 100) {
    nivel = "Saludable";
  } else {
    nivel = "No Saludable";
  }
  return nivel;
};

//5. Clave
validarClave = function (clave) {
  let largo = clave.lenght;
  if (largo >= 8 && largo <= 16) {
    return true;
  } else {
    return false;
  }
};

//6. Mayuscula
esMayuscula = function (char) {
  let num;
  num = char.charCodeAt(0);
  if (num >= 65 && num <= 90) {
    return true;
  } else {
    return false;
  }
};

//7. Minuscula
esMinuscula = function (char) {
  let num;
  num = char.charCodeAt(0);
  if ((num >= 97 && num <= 122) || num == 130 || (num >= 160 && num <= 163)) {
    return true;
  } else {
    return false;
  }
};

//8. Digito
esDigito = function (char) {
  let num;
  num = char.charCodeAt(0);
  if (num >= 48 && num <= 57) {
    return true;
  } else {
    return false;
  }
};

//9. Permiso1
darPermiso = function (nMate, nFisica, nGeo) {
  if (nMate > 90 || nFisica > 90 || nGeo > 90) {
    return true;
  } else {
    return false;
  }
};

//10. Permiso2
otorgarPermiso = function (nMate, nFisica, nGeo) {
  if ((nMate > 90 || nFisica > 90) && nGeo > 80) {
    return true;
  } else {
    return false;
  }
};

//11. Permiso3
dejarSalir = function (nMate, nFisica, nGeo) {
  if ((nMate > 90 || nFisica > 90 || nGeo > 90) && nFisica > nMate) {
    return true;
  }else{
    return false;
  }
};
