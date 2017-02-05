var letter = "fuck object based prgramming";

function setup(){
  createCanvas(1000, 1080);
  background(255);
  stroke(0,0,255);
  noFill();
  textFont("Arial");
  textSize(12);
  textAlign(CENTER, CENTER);
}

function mouseMoved(){
  background(255);
  noStroke();
  fill(0,0,255);
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function mouseDragged(){

  stroke(0,0,255);
  noFill();
  textSize((mouseX-width/2)*5+1);
  text(letter, width/2, mouseY);
}

function keyPressed() {
  if (keyCode == CONTROL) save("P_3_0_01.png");
}

function keyTyped(){
      letter = str(key);
  
}
