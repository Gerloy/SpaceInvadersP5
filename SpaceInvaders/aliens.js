function dibujaAliens() {

  // dibujar alien
  fill(255);
  //image(alienImage, a1x, a1y, aWidth, aHeight);
  //image(alienImage, a2x, a1y, aWidth, aHeight);
  //image(alienImage, a3x, a1y, aWidth, aHeight);
  //image(alienImage, a4x, a1y, aWidth, aHeight);
  //image(alienImage, a5x, a1y, aWidth, aHeight);
  //image(alienImage, a6x, a1y, aWidth, aHeight);
  //image(alienImage, a7x, a1y, aWidth, aHeight);
  //image(alienImage, a8x, a1y, aWidth, aHeight);
  //image(alienImage, a9x, a1y, aWidth, aHeight);
  //image(alienImage, a10x, a2y, aWidth, aHeight);
  //image(alienImage, a11x, a2y, aWidth, aHeight);
  //image(alienImage, a12x, a2y, aWidth, aHeight);
  //image(alienImage, a13x, a2y, aWidth, aHeight);
  //image(alienImage, a14x, a2y, aWidth, aHeight);
  //image(alienImage, a15x, a2y, aWidth, aHeight);
  //image(alienImage, a16x, a2y, aWidth, aHeight);
  //image(alienImage, a17x, a2y, aWidth, aHeight);
  //image(alienImage, a18x, a2y, aWidth, aHeight);
  
  //Dibujar aliens V2
  var contador = 0;
  for (x=0; x<9; x++){   //Va de 0 a 8 como esta ordenado el array
    for (y=0; y<2; y++){ //Va de 0 a 1 como esta ordenado el array
      if (avivo[contador]){ //Si el alien esta vivo lo dibuja, sino no
        image(alienImage, apx[x]+movalposx, apy[y]+movalposy, aWidth, aHeight);
      }
      contador ++;
    }
  }
}

function checkearColisiones(){

  //Cheacker Colisiones V1
  //if (r1x >= a1x - aWidth/2 && r1x <= a1x + aWidth/2 && r1y >= a1y - aHeight/2 && r1y <= a1y + aHeight/2) {

  //  score = score+1;
  //  a1x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a2x - aWidth/2 && r1x <= a2x + aWidth/2 && r1y >= a1y - aHeight/2 && r1y <= a1y + aHeight/2) {

  //  score = score+1;
  //  a2x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a3x - aWidth/2 && r1x <= a3x + aWidth/2 && r1y >= a1y - aHeight/2 && r1y <= a1y + aHeight/2) {

  //  score = score+1;
  //  a3x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a4x - aWidth/2 && r1x <= a4x + aWidth/2 && r1y >= a1y - aHeight/2 && r1y <= a1y + aHeight/2) {

  //  score = score+1;
  //  a4x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a5x - aWidth/2 && r1x <= a5x + aWidth/2 && r1y >= a1y - aHeight/2 && r1y <= a1y + aHeight/2) {

  //  score = score+1;
  //  a5x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a6x - aWidth/2 && r1x <= a6x + aWidth/2 && r1y >= a1y - aHeight/2 && r1y <= a1y + aHeight/2) {

  //  score = score+1;
  //  a6x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a7x - aWidth/2 && r1x <= a7x + aWidth/2 && r1y >= a1y - aHeight/2 && r1y <= a1y + aHeight/2) {

  //  score = score+1;
  //  a7x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a8x - aWidth/2 && r1x <= a8x + aWidth/2 && r1y >= a1y - aHeight/2 && r1y <= a1y + aHeight/2) {

  //  score = score+1;
  //  a8x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a9x - aWidth/2 && r1x <= a9x + aWidth/2 && r1y >= a1y - aHeight/2 && r1y <= a1y + aHeight/2) {

  //  score = score+1;
  //  a9x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a10x - aWidth/2 && r1x <= a10x + aWidth/2 && r1y >= a1y - aHeight/2 && r1y <= a2y + aHeight/2) {

  //  score = score+1;
  //  a10x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a11x - aWidth/2 && r1x <= a11x + aWidth/2 && r1y >= a2y - aHeight/2 && r1y <= a2y + aHeight/2) {

  //  score = score+1;
  //  a11x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a12x - aWidth/2 && r1x <= a12x + aWidth/2 && r1y >= a2y - aHeight/2 && r1y <= a2y + aHeight/2) {

  //  score = score+1;
  //  a12x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a13x - aWidth/2 && r1x <= a13x + aWidth/2 && r1y >= a2y - aHeight/2 && r1y <= a2y + aHeight/2) {

  //  score = score+1;
  //  a13x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a14x - aWidth/2 && r1x <= a14x + aWidth/2 && r1y >= a2y - aHeight/2 && r1y <= a2y + aHeight/2) {

  //  score = score+1;
  //  a14x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a15x - aWidth/2 && r1x <= a15x + aWidth/2 && r1y >= a2y - aHeight/2 && r1y <= a2y + aHeight/2) {

  //  score = score+1;
  //  a15x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a16x - aWidth/2 && r1x <= a16x + aWidth/2 && r1y >= a2y - aHeight/2 && r1y <= a2y + aHeight/2) {

  //  score = score+1;
  //  a16x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a17x - aWidth/2 && r1x <= a17x + aWidth/2 && r1y >= a2y - aHeight/2 && r1y <= a2y + aHeight/2) {

  //  score = score+1;
  //  a17x = -1000;
  //  r1Position = 2;
  //}
  //if (r1x >= a18x - aWidth/2 && r1x <= a18x + aWidth/2 && r1y >= a2y - aHeight/2 && r1y <= a2y + aHeight/2) {

  //  score = score+1;
  //  a18x = -1000;
  //  r1Position = 2;
  //}
  
  //Checkear Colisiones V2
  var contador = 0;
  for (x=0; x<9; x++){   //Va de 0 a 8 como esta ordenado el array
    for (y=0; y<2; y++){ //Va de 0 a 2 como esta ordenado el array
      if (avivo[contador]){ //Si el alien esta vivo checkea, sino no
        if (r1x >= apx[x]+movalposx - aWidth/2 && r1x <= apx[x]+movalposx + aWidth/2 && r1y >= apy[y]+movalposy - aHeight/2 && r1y <= apy[y]+movalposy + aHeight/2){
          score += 1;
          avivo[contador] = false;
          r1Position = 2;
        }
      }
      contador ++;
    }
  }
  
}

function updateRect(){
  movalposx += velx;
  if ((movalposx<=aWidth*0.5 && velx<0) || (movalposx>=width-movalWidth+aWidth*0.5 && velx>0)){
    movalposy+=aHeight;
    velx *= -1;
  }
}
