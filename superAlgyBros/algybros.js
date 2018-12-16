console.log(4);
function character(){
  this.draw1 = function(){
  ellipse(20,20,20,20);
  }
}
var ch;
function setup{
  ch = new character();
}
function draw(){
  ch.draw;
}
