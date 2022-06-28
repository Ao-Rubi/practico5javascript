let contador = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let segundos = 0;
let minutos = 0;
let horas = 0;
let t;

function tick(){
    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
        if (minutos >= 60) {
            minutos = 0;
            horas++;
        }
    }
}
function add() {
    tick();
    contador.innerHTML = (horas > 9 ? horas : "0" + horas) 
            + ":" + (minutos > 9 ? minutos : "0" + minutos)
            + ":" + (segundos > 9 ? segundos : "0" + segundos);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
start.addEventListener("click", timer);
stop.addEventListener("click", ()=> {
    clearTimeout(t)
})
reset.addEventListener("click", ()=> {
    contador.innerHTML = "00:00:00";
    segundos = 0; minutos = 0; horas = 0;
})