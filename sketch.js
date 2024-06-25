//variáveis da bolinha
let xbolinha = 100;
letybolinha = 200;
let diametro = 22;
let raio= diametro / 2;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//velocidadeda bolinha 
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete 
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

fuction =esDoOponente
   createCanvas (600,400);
}

fuction draw () {
   brackground(0);
   mostraBolinha();
   movimentoBolinha();
   verificaColisaoBorda();
   mostraRaquete(xRaquete, yRaquete);
   movimentaMinharaquete()
   verificaColisaoraquete(xRaquete, yRaquete);
   verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
   mostraRaquete(xRaqueteOponente, yRaqueteOponente);
   movimntaRaqueteOponente();
}
fuction mostraBolinha() {
   circle(xBolinha, yBolinha, diametro);
}

fuction movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

fuction verificaColisaoBorda () {
  if (xBolinha + raio > width || xBolinha - raio <0) {
   velocidadeYBolinha *= -1;   
  }
  if
  