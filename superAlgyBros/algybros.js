console.log(6);
function character(){
  this.draw1 = function(){
  ellipse(20,20,20,20);
  }
}
let ch;
function setup(){
  ch = new character();
}
function draw(){
  ch.draw1();
}
