let cmpCaja;
let val;
let valFloat;
let res;
let cmpRes;
convertirAFar = function () {
    //1. Recuperar el valor de la caja de texto

    cmpCaja = document.getElementById("cel");
    val = cmpCaja.value;
    valFloat = parseFloat(val);
  
    //2. Usar la formula de conversion
  
    res = (valFloat*(9/5)) + 32;
  
    //3. Mostrar el valor en pantalla
  
    cmpRes = document.getElementById("res");
    cmpRes.innerText="Resultado = "+ res +"°F";
    
  };