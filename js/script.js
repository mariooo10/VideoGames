const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', evento =>{
    evento.preventDefault();
    if(true){
        formulario.submit();
    }
})

function mostrarError(campo,mensaje){
    const campoError = document.getElementById('$(campo)'-error);
    campoError.innerText = mensaje;

}

function validarformulario(){
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById(email).value;
    const apellido = document.getElementById(apellido).value;
    const password = document.getElementById(password).value;


    