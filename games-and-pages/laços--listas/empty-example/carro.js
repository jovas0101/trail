let carrosX = [600, 600, 600, 600, 600, 600];
let carrosY = [40, 96, 150, 210, 270, 318];

let velocidadeCarros = [3.4, 5, 3.2, 4.2,5,2.0];

let carrosWidth = 40;
let carrosHeight = 40;


function mostraCarro() {
    for (let i = 0; i < imgCarros.length; i++) {
        image(imgCarros[i], carrosX[i], carrosY[i], carrosWidth, carrosHeight);
    }
}

function movCarro() {
    for (let i = 0; i < imgCarros.length; i++) {
        carrosX[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicial() {
    for (let i = 0; i < imgCarros.length; i++) {
        if (passouTodaTela(carrosX[i])) {
            carrosX[i] = 600;
        }
    }
}

function passouTodaTela(carrosX) {
    return carrosX < - 50;
}

