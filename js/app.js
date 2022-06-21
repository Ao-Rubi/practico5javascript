let numeroAleatorio = 0;

function generarNumeroAleatorio() {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

function consultarNumero() {
    // buscar valor del imput
    let numeroIngresado =  parseInt(document.getElementById("numeroIngresado").value) ;
    if (numeroIngresado === numeroAleatorio) {
        let seccionJuego = document.getElementById("sectionGame");

        let ganasteAlrta = `
        <div class="alert alert-success" role="alert">
            <p class="mb-0">Adivinaste!!</p>
        </div>`;

        seccionJuego.innerHTML += ganasteAlrta;

    } else if (numeroIngresado > numeroAleatorio) {
        alert("Tu numero es mayor al numero magico")
    } else if (numeroIngresado < numeroAleatorio) {
        alert("Tu numero es menor al numero magico")
    }

}