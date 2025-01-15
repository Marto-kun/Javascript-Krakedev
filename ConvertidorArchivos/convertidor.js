convertirEnPesosMx = function (dolares) {
  let pesosMx;
  pesosMx = dolares * 20.3882;
  return pesosMx;
};

convertirEnEuros = function (dolares) {
  let euros;
  euros = dolares * 0.9594;
  return euros;
};

convertirEnPesosCo = function (dolares) {
  let pesosCo;
  pesosCo = dolares * 4399.4469;
  return pesosCo;
};

mostrarPesosMx = function () {
  let cmpValor;
  let cmpRes;
  let cmpMoneda;
  let cmpBandera;
  let valor;

  cmpValor = document.getElementById("txtValor");
  valor = parseFloat(cmpValor.value);

  cmpRes = document.getElementById("lblValor");
  cmpRes.innerText = convertirEnPesosMx(valor).toFixed(2);

  cmpMoneda = document.getElementById("lblMoneda");
  cmpMoneda.innerText = "MXN";

  cmpBandera = document.getElementById("imgBandera");
  cmpBandera.src = "banderaMx.png";
};

mostrarEuros = function () {
  let cmpValor;
  let cmpRes;
  let cmpMoneda;
  let cmpBandera;
  let valor;

  cmpValor = document.getElementById("txtValor");
  valor = parseFloat(cmpValor.value);

  cmpRes = document.getElementById("lblValor");
  cmpRes.innerText = convertirEnEuros(valor).toFixed(2);

  cmpMoneda = document.getElementById("lblMoneda");
  cmpMoneda.innerText = "EUR";

  cmpBandera = document.getElementById("imgBandera");
  cmpBandera.src = "unionEuropea.jpg";
};

mostrarPesosCo = function () {
  let cmpValor;
  let cmpRes;
  let cmpMoneda;
  let cmpBandera;
  let valor;

  cmpValor = document.getElementById("txtValor");
  valor = parseFloat(cmpValor.value);

  cmpRes = document.getElementById("lblValor");
  cmpRes.innerText = convertirEnPesosCo(valor).toFixed(2);

  cmpMoneda = document.getElementById("lblMoneda");
  cmpMoneda.innerText = "COP";

  cmpBandera = document.getElementById("imgBandera");
  cmpBandera.src = "banderaColombia.png";
};
