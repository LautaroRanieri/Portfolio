const btnAtras = document.getElementById('btn-atras');

btnAtras.addEventListener('click', function() {
    window.location.href = btnAtras.getAttribute('href');
});