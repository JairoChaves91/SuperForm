'use strict'

// alert("Esto es una alerta")
let datosForm = document.querySelector("#superForm");

function runAjax(){

    let xhr;

    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open("POST", "./controller.php");
    
    
    // xhr.addEventListener("load", event =>{
    //     let dataJSON = JSON.parse(event.target.response);
    //     console.log(dataJSON);
    // });
    


    let objetoForm = new FormData(datosForm);
    
    
    objetoForm.append("Nombre", Nombre.value);
    objetoForm.append("Apellidos", Apellidos.value);
    objetoForm.append("Edad", Edad.value);
    objetoForm.append("Hombre", Hombre.value);
    objetoForm.append("Mujer", Mujer.value);
    objetoForm.append("Otros", Otros.value);
    objetoForm.append("DNI", DNI.value);
    objetoForm.append("Email", Email.value);

    
    xhr.send(objetoForm);
}

datosForm.addEventListener("submit", event => {
    event.preventDefault();
     runAjax()});