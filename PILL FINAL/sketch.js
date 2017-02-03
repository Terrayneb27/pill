var pill;
function preload() {
  img = loadImage('pill.png')
}


function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
}

var position = new p5.Vector(10,10);


// function onResize() {
//   console.log('test');
// }

function draw() {
 
 fill(0,0,0,7);
 rect(0,0,window.innerWidth,window.innerHeight);
 
 var mouse = new p5.Vector(mouseX,mouseY);
 var difference = mouse.sub(position);
 difference.normalize();
 difference.mult(3);
 position.add(difference);
 imageMode(CENTER);
 image(img,position.x,position.y, 100,100);
 
 
  
}