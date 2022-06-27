function obtenerFecha() {
    let fecha = new Date();

    let semanas = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    let fechaReloj = document.getElementById("fecha");
    fechaReloj.innerHTML = `${semanas[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}`

    // Arreglar valores de un digito
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let horas = fecha.getHours();

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    if (horas < 10) {
        horas = "0" + horas;
    }

    let horaReloj = document.querySelector("#hora");
    // horaReloj.innerHTML = `${horas}:${minutos}:${segundos}`
    horaReloj.innerHTML = fecha.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit',second: "2-digit" , hour12: true })
}

setInterval(obtenerFecha, 1000)