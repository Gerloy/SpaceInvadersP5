//global

var p1x = 300;
var p1y = 475;
var pWidth = 50;
var pHeight = 30;
var pSpeed = 3;
var derecha = false;
var izquierda = false;


//aliens
var a1y = 150;
var a2y = 210;
var a1x = 50;
var a2x = 110;
var a3x = 170;
var a4x = 230;
var a5x = 290;
var a6x = 350;
var a7x = 410;
var a8x = 470;
var a9x = 530;
var a10x = 50;
var a11x = 110;
var a12x = 170;
var a13x = 230;
var a14x = 290;
var a15x = 350;
var a16x = 410;
var a17x = 470;
var a18x = 530;

var aWidth = 40;
var aHeight = 40;

//Aliens V2
//var apx = [50,110,170,230,290,350,410,470,530]; //Posicion de aliens en X
//var apy = [150,210];                            //Posicion de aliens en y
//Estos estan con las posiciones en relacion al rectangulo
var apx = [0,60,120,180,240,300,360,420,480]; //Posicion de aliens en X
var apy = [0,60];                            //Posicion de aliens en y
var avivo = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true] //Condicion de vida de los aliens. Va de 0 a 17

//Rectangulo que define el movimiento de los aliens
var movalposx = 50;
var movalposy = 150;
var velx = 1;

var movalWidth = 520; //Width  del rectangulo = 530+40-50 (posX del ultimo alien + width de los aliens - posX del primer alien)  
var movalHeight = 100;//Height  del rectangulo = 210+40-150 (posY del ultimo alien + height de los aliens - posY del primer alien)  

//rocket
var r1x = p1x;
var r1y = p1y;
var r1Position = 0;
var rWidth = 5;
var rHeight = 15;
var rSpeed = 5;
var fire = false;

//contador
var score = 0;

//multimedia
var playerImage;
var alienImage;
var jefeImage;

//estados
var estado = 0;



function setup() {
  createCanvas(600, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);
} //close setup


function draw() {

  if (estado == 0) {
    inicio();
  } else if (estado == 1) {
    juego();
  } else if (estado == 2) {
    lose();
  } else if (estado == 3) {
    win();
  }





  if (estado == 0) {
    score = 0;
    if (mouseIsPressed) {
      estado = 1;
    }
  } else if ( estado == 1 ) {
    if (score >= 18) {
      estado = 3;
    }
  }
} // close draw


function keyPressed() {

  if (keyCode == LEFT_ARROW) {
    //p1x = p1x-pSpeed;
    izquierda = true;
  }

  if (keyCode == RIGHT_ARROW) {
    //p1x = p1x+pSpeed;
    derecha = true;
  }
  
  if (key == "s") {
    fire = true;
  }
}

function keyReleased() {

  if (keyCode == LEFT_ARROW) {
    //p1x = p1x-pSpeed;
    izquierda = false;
  }

  if (keyCode == RIGHT_ARROW) {
    //p1x = p1x+pSpeed;
    derecha = false;
  }
  
  if (key == "s") {
    fire = false;
  }
}

//function keyTyped() {
//  if (key == "s") {
//    fire = true;
//  } else {
//    fire = false;
//  }
//}

function updateNave(){
  if (izquierda){
    p1x -= pSpeed;
  }
  if (derecha){
    p1x += pSpeed;
  }
}

function preload() {

  playerImage = loadImage("./datan't/nave.png");
  alienImage = loadImage("./datan't/alien.png");
  jefeImage = loadImage("./datan't/jefe.png");
}
