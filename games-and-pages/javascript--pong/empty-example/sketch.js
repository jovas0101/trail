function setup() {
    createCanvas(600, 400);
}
function draw() {
    background(0);
    // função bolinha
    bolinha();
    movBola();
    colisaoBola();
    // função raquete
    raquete(raqX, raqY);
    movRaquete();
    colisaoRaquete();
    colisaoBibliotecaRaq(raqX, raqY);
    raqueteOponente(raqXOponente, raqYOponente);
    movRaqOponente();
    colisaoBibliotecaRaqOpo(raqXOponente, raqYOponente);
    //placar
    placarJogo();
    marcaPontos();
}
// variáveis da bolinha
let bolaX = 300;
let bolaY = 200;
let diametro = 23;
let raio = diametro / 2;
// velocidade da bolinha
let bolaVx = 6;
let bolaVy = 6;
// variáveis raquete
let raqX = 5;
let raqY = 150;
let raqWidth = 10;
let raqHeight = 90;
let colidiu = false;
// variáveis do oponente
let raqXOponente = 585;
let raqYOponente = 150;
// velocidade raquete oponente
let raqVx;
let raqVy;
//placar do jogo
let meusPontos = 0;
let opoPontos = 0;
// bolinha
function bolinha() {
    circle(bolaX, bolaY, diametro);
}

function movBola() {
    bolaX += bolaVx;
    bolaY += bolaVy;
}
function colisaoBola() {

    if (bolaX + raio > width || bolaX - raio < 0) {
        bolaVx *= -1;
    }

    if (bolaY + raio > height || bolaY - raio < 0) {
        bolaVy *= -1;
    }

}
// raquete
function raquete(x, y) {
    rect(x, y, raqWidth, raqHeight)
}
function movRaquete() {

    if (keyIsDown(UP_ARROW)) {
        raqY -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
        raqY += 10;
    }

}
function colisaoRaquete() {

    if (bolaX - raio < raqX + raqWidth && bolaY - raio < raqY + raqHeight && bolaY + raio > raqY) {
        bolaVx *= -1;
    }
}
function colisaoBibliotecaRaq(x, y) {
    colidiu = collideRectCircle(raqX, raqY, raqWidth, raqHeight, bolaX, bolaY, raio);

    if (colidiu) {
        bolaVx *= -1;
    }
}
// função oponente
function raqueteOponente(x, y) {
    rect(x, y, raqWidth, raqHeight);
}

function movRaqOponente() {

    if (keyIsDown(87)) {
        raqYOponente -= 10;
    }
    if (keyIsDown(83)) {
        raqYOponente += 10;
    }
}

function colisaoBibliotecaRaqOpo(x, y) {
    colidiu = collideRectCircle(x, y, raqWidth, raqHeight, bolaX, bolaY, raio);

    if (colidiu) {
        bolaVx *= -1;
    }
}
// placar
function placarJogo() {
    stroke(255);
    textAlign(CENTER);
    textSize(20);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(opoPontos, 470, 26)
}

function marcaPontos() {
    if (bolaX > 590) {
        meusPontos += 1;
    }
    if (bolaX < 10) {
        opoPontos += 1;
    }
}
//---> Editor de código online: https://editor.p5js.org/
// Biblioteca: https://github.com/bmoren/p5.collide2D.git