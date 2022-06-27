class Persona {
    constructor(nombre, edad, sexo, peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }

    mostrarGeneracion() {
        if (this.edad <= 28) {
            alert(`Tu generacion es: Generacion Z <br>
            Su caracteristica es: Irreverencia`)
        } else if (this.edad > 28 && this.edad <= 41) {
            alert(`Tu generacion es: Generacion Y (Millennials) <br>
            Su caracteristica es: Frustracion`)
        } else if (this.edad > 41 && this.edad <= 53) {
            alert(`Tu generacion es: Generacion X <br>
            Su caracteristica es: Obseción por el éxito`)
        } else if (this.edad > 53 && this.edad <= 73) {
            alert(`Tu generacion es: Baby Boom <br>
            Su caracteristica es: Ambición`)
        } else if (this.edad > 73 && this.edad <= 92) {
            alert(`Tu generacion es: Silent generation (Niños de la pos-gerra) <br>
            Su caracteristica es: Austeridad`)
        }
    }

    esMayorDeEdad(){
        if (this.edad >= 18) {
            alert(`<br>Eres mayor de edad.`)
        } else {
            alert(`<br>Eres menor de edad.`)
        }
    }

    mostrarDatos(){
        document.write(`
        Datos de la persona:<br>
        Nombre: ${this.nombre}.<br>
        Edad: ${this.edad}.<br>
        Sexo: ${this.sexo}.<br>
        Peso: ${this.peso}.<br>
        Altura: ${this.altura}.<br>
        Nacimiento: ${this.nacimiento}.<br>
        `)
    }

    generarDNI(){
        let dni = Math.floor(Math.random() * (100000000 - 10000000) + 10000000);
        return document.write(`<br>DNI: ${dni}`)
    }
}

function datosDePersona(Fnombre, Fedad, Fsexo, Fpeso, Faltura, Fnacimiento) {
    Fnombre = document.querySelector("#nombreIngresado").value;
    Fedad = document.querySelector("#edadIngresada").value;
    Fsexo = document.querySelector("#sexoIngresado").value;
    Fpeso = document.querySelector("#pesoIngresado").value;
    Faltura = document.querySelector("#alturaIngresada").value;
    Fnacimiento = document.querySelector("#anioIngresado").value;

    const nuevaPersona = new Persona(Fnombre,Fedad,Fsexo,Fpeso,Faltura,Fnacimiento);
    return nuevaPersona
}

let enviar = document.getElementById("botonEnviar");
enviar.addEventListener("click", datosDePersona)

let obtenerGeneracion = document.getElementById("generacion");
obtenerGeneracion.addEventListener("click", ()=> {nuevaPersona.mostrarGeneracion()})

// Preguntar si se puede usar las funciones de la clase al apretar un boton y de que forma.
// Y en caso de estar mal la forma de crear el objeto, preguntar como se hace.



