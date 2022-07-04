// plano cartesiano (X,Y) ator
let atorX = 95;
let atorY = 356;

// comprimento e altura ator
let atorWidth = 60;
let atorHeight = 60;

let colisao = false;
let pontosJogo = 0;

function mostraAtor() {
    image(imgAtor, atorX, atorY, atorWidth, atorHeight);
}

function movAtor() {
    if (keyIsDown(UP_ARROW)) {
        atorY -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        if(podeSeMover()){
            atorY += 3;
        }
    }
}

function verificaColisao() {
    for (let i = 0; i < imgCarros.length; i++) {
        colisao = collideRectCircle(carrosX[i], carrosY[i], carrosWidth, carrosHeight, atorX, atorY, 15);
        if (colisao) {
            voltaAtor();
            if (pontosMaiorQueZero()) {
                pontosJogo -= 1;
            }
        }
    }
}

function voltaAtor() {
    atorY = 356;
}

function incluiPontos() {
    fill(color(0, 128, 0))
    textAlign(CENTER);
    textSize(25);
    text(pontosJogo, width / 5, 27);
}

function marcaPonto() {
    if (atorY < 15) {
        pontosJogo += 1;
        voltaAtor();
    }
}
function pontosMaiorQueZero() {
    return pontosJogo > 0;
}

function podeSeMover(){
    return atorY < 366;
}