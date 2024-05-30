function validarFormulario(event){
const busqueda= document.getElementById("busqueda").value;
if (busqueda===""){
    event.preventDefault();
    alert('Por favor, complete el campo.');
    return false
}
return true;
}
const form1=document.getElementById("form");
form1.addEventListener("submit",validarFormulario);

document.addEventListener("DOMContentLoaded",()=>{
    console.log("El documento se ha cargado");
});