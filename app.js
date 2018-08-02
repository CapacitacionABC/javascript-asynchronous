const paises = ['Alemani', 'Chile', 'Salvador', 'Colombia', 'Venezuela', 'Peru'];

// Esta funcion agrega un pais despues de 2 segundos
function nuevoPais(pais) {
    setTimeout(function() {
        paises.push(pais);
    }, 2000);
}

function mostrarPaises() {
    setTimeout(function() {
        let html = '';
        paises.forEach(function(pais) {
            html += `<li>${pais}</li>`;
        });
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

nuevoPais('Caliombia');

mostrarPaises();