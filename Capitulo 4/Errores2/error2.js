cambiarFeliz=function(){
    let cmpImagen;
    cmpImagen=document.getelementById("imgEmoji"); //La funcion está mal referenciada
    cmpImagen.src="feliz.jpg"; 
}

cambiarCansado=function(){
    let cmpImagen;
    cmpImagen=document.getElementById("imgEmogi"); //Está mal escrita la id del componente
    cmpImagen.src="cansado.png";
}