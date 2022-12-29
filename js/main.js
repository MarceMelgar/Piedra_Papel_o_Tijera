let puntosJugador = 0;
let puntosPC = 0;

let instrucciones = document.querySelector ("#instrucciones");
let contenedorPuntosJugador = document.querySelector ("#puntos-jugador");
let contenedorPuntosPC = document.querySelector ("#puntos-computadora");
let mensaje = document.querySelector ("#mensaje");
let contenedorMensajeGano = document.querySelector ("#mensaje-gano");
let elegirArma = document.querySelector ("#elegir-arma");
let imgJugador = document.querySelector ("#imgJugador");
let imgComputadora = document.querySelector ("#imgComputadora");

let contenedorEleccionJugador = document.querySelector ("#eleccion-jugador");
let contenedorEleccionPC = document.querySelector ("#eleccion-computadora");

let botonesArmas = document.querySelectorAll (".arma");

botonesArmas.forEach(boton => {
    boton.addEventListener ("click", iniciarTurno);
})

function iniciarTurno (e) {
    let eleccionJugador = e.currentTarget.id;
    imgJugador.src = "./images/" + eleccionJugador + ".png"; 
    
    const intervaloPC = setInterval(function() {
        eleccionPC = Math.floor(Math.random() * 3);    
        if (eleccionPC === 0) {
            eleccionPC = "piedra"
        } else if (eleccionPC === 1) {
            eleccionPC = "papel"
        } else if (eleccionPC === 2) {
            eleccionPC = "tijera"
        }
        imgComputadora.src = "./images/" + eleccionPC + ".png";
    }, 200);

    setTimeout(function(){
        clearInterval(intervaloPC);
        let eleccionPC = Math.floor(Math.random() * 3);    
        if (eleccionPC === 0) {
            eleccionPC = "piedra"
        } else if (eleccionPC === 1) {
            eleccionPC = "papel"
        } else if (eleccionPC === 2) {
            eleccionPC = "tijera"
        }
        
        imgComputadora.src = "./images/" + eleccionPC + ".png";
        
        if (
        (eleccionJugador === "piedra" && eleccionPC === "tijera") || 
        (eleccionJugador === "tijera" && eleccionPC === "papel") ||
        (eleccionJugador === "papel" && eleccionPC === "piedra") 
        ) {
            ganaJugador();
        } else if (
            (eleccionPC === "piedra" && eleccionJugador === "tijera") || 
            (eleccionPC === "tijera" && eleccionJugador === "papel") ||
            (eleccionPC === "papel" && eleccionJugador === "piedra") 
        ) {
            ganaComputadora();
        } else {
            empate();
        }
        if (puntosJugador === 3 || puntosPC === 3) {
            if (puntosJugador === 3) {
                instrucciones.innerText = "Ganaste la partida, ¡Felicitaciones! 🤓"
            }
            if (puntosPC === 3) {
                instrucciones.innerText = "Perdiste 😢"
            }
            instrucciones.classList.remove("ocultar")
            elegirArma.classList.add("ocultar");
            mensaje.classList.add("ocultar");
            reiniciar.classList.remove("ocultar");
            reiniciar.addEventListener("click", reiniciarJuego)
        } 
        contenedorMensajeGano.add("ocultar");
    }, 2000)

    mensaje.classList.remove("ocultar");
    contenedorMensajeGano.innerText = "Eligiendo..."
    contenedorEleccionJugador.innerText = eleccionJugador;
    contenedorEleccionPC.innerText = eleccionPC;

}

function ganaJugador() {
    puntosJugador++
    contenedorPuntosJugador.innerText = puntosJugador;
    contenedorMensajeGano.innerText = "Ganaste un punto 🥳";
}

function ganaComputadora() {
    puntosPC++
    contenedorPuntosPC.innerText = puntosPC;
    contenedorMensajeGano.innerText = "La máquina ganó 1 punto 🥵";
}

function empate() {
    contenedorMensajeGano.innerText = "Empate";
}

function reiniciarJuego() {
    reiniciar.classList.add("ocultar");
    elegirArma.classList.remove("ocultar");
    mensaje.classList.add("ocultar");
    puntosJugador = 0;
    puntosPC = 0;
    contenedorPuntosJugador.innerText = puntosJugador;
    contenedorPuntosPC.innerText = puntosPC;
    instrucciones.classList.add("ocultar");
}

