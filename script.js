// Evento para mostrar u ocultar el menu en pantallas pequenas
document.getElementById('menuBtn').addEventListener('click', function() {
    // Obtiene la lista de navegacion
    var nav = document.getElementById('navList');
    // Si el menu ya esta visible, lo oculta
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    // Si el menu esta oculto, lo muestra en forma de columna
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
    }
});

// Evento que controla el envio del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Evita que el formulario recargue la pagina
    e.preventDefault();
    // Toma los valores que el usuario escribio
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    // Elemento donde se mostrara el mensaje al usuario
    var formMsg = document.getElementById('formMsg');
    // Verifica que todos los campos esten completos
    if (nombre && email && mensaje) {
        formMsg.textContent = 'Gracias ' + nombre + ', tu mensaje fue enviado';
        // Limpia los campos del formulario
        this.reset();
    } else {
        // Mensaje si falta completar un campo
        formMsg.textContent = 'Por favor completa todos los campos';
    }
});
