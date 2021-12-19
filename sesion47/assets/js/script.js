let btn1 = document.getElementById("btnOcultar");
let btn2 = document.getElementById("btnMostrar");

btn1.onclick = ocultarTexto;
btn2.onclick = mostrarTexto;

function ocultarTexto(evento){
    document.getElementById("parrafo").style.display = 'none';
}

function mostrarTexto(evento){
    document.getElementById("parrafo").style.display = 'block';
}


$(document).ready(function(){
$("#btnOcultar2").click(function(){
 $("#parrafo").hide("slow");
});

$("#btnMostrar2").click(function(){
    $("#parrafo").show("slow");
});
});
