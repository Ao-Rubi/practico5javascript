let numeroClase = 0;
let arregloLista = [];

function agregarTarea() {
    let tarea = document.getElementById("ingresarTarea").value;

    let lista = document.getElementById("lista");

    let elementoLista = `<li class="d-inline-block ${numeroClase}">
    ${tarea} 
    <i class="fa-solid fa-trash-can text-danger d-inline-block ${numeroClase}" onclick="borrarTarea()"></i>
    </li> <br>`;

    lista.innerHTML += elementoLista;

    numeroClase++
}

// Averiguar como eliminar elementos con una misma clase al apretar un boton.