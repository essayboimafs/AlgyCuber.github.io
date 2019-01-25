console.log(5);
let input;
let sc = [255,255,255];
let pc = [255,255,255];
let fc = [255,255,255];
function setup(){
  createCanvas(800,601);
}
function draw(){
  background(255);
  stroke(0);
  strokeWeight(1);
  fill(sc[0],sc[1],sc[2]);
  rect(0,0,600,600);
  fill(255);
  rect(650,100,150,32);
}
