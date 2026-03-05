document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe de la forma tradicional (recargando la página)
    event.preventDefault();

    // Aquí podrías procesar los datos (enviarlos a un servidor, por ejemplo)
    
    // Mostramos la ventana emergente
    alert("Su mensaje ha sido recibido");

    // Limpiamos el formulario
    this.reset();
});