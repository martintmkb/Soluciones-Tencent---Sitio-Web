document.getElementById('menuBtn').addEventListener('click', function() {
var nav = document.getElementById('navList');
if (nav.style.display === 'flex') {
nav.style.display = 'none';
} else {
nav.style.display = 'flex';
nav.style.flexDirection = 'column';
}
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
e.preventDefault();
var nombre = document.getElementById('nombre').value;
var email = document.getElementById('email').value;
var mensaje = document.getElementById('mensaje').value;
var formMsg = document.getElementById('formMsg');
if (nombre && email && mensaje) {
formMsg.textContent = 'Gracias ' + nombre + ', tu mensaje fue enviado';
this.reset();
} else {
formMsg.textContent = 'Por favor completá todos los campos';
}
});