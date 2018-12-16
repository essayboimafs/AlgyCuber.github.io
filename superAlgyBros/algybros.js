console.log(7);
function character(){
  this.draw1 = function(){
  ellipse(20,20,20,20);
  }
}
let ch;
function setup(){
  createCanvas(512,512)
  ch = new character();
}
function draw(){
  ch.draw1();
}
