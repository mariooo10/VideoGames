const formulario = document.getElementById('formulario');

formulario.addEventListener('submit',evento =>{
    evento.preventDefault();
    if(true){
        formulario.submit();
    }
})

function mostrarError(campo,mensaje){
    const campoError = document.getElementById('$(campo)'-error);
    campoError.innerText = mensaje;

}