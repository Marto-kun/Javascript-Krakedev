let cmpCaja;
let val;
let valFloat;
let res;
let cmpRes;
convertirAKm = function () {
    //1.Recuperar el valor de la caja de texto

    cmpCaja = document.getElementById("mi");
    val = cmpCaja.value;
    valFloat = parseFloat(val);
  
    //2. Multiplicar por 1.609
  
    res = valFloat * 1.609;
  
    //3. Mostrar el valor en pantalla
  
    cmpRes = document.getElementById("res");
    cmpRes.innerText="Resultado = "+res+"Km";
    
  };