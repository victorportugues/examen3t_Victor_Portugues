function calcularMedia(){
    
    var notaProg;
    var notaBases;
    var notaEntornos;
    var notaLengua;
    var notaMedia;

    notaProg=document.getElementById("programacion");
    console.log(notaProg.value);
    
    notaBases=document.getElementById("bases");
    console.log(notaBases.value);

    notaEntornos=document.getElementById("entornos");
    console.log(notaEntornos.value);

    notaLengua=document.getElementById("lenguajes");
    console.log(notaLengua.value);
    
    notaMedia=document.getElementById("media");
    notaMedia.value=(parseFloat(notaProg.value) + parseFloat(notaBases.value) + parseFloat(notaEntornos.value) + parseFloat(notaLengua.value))/4;
    console.log(notaMedia.value);
    
    return false; 
}