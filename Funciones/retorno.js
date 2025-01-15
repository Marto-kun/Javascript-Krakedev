freir = function (alimento) {
  let alimentoFrito;

  console.log("Me llega: " + alimento);
  console.log("Le pongo en la sarten");
  console.log("Listo!");
  alimentoFrito = alimento + " frito";
  return alimentoFrito;
};

probarFreir = function(){
    let cmpAlimento;
    let alimento;
    cmpAlimento = document.getElementById("txtAlimento");
    alimento = cmpAlimento.value;
    lol=freir(alimento);
    console.log(lol);
}
