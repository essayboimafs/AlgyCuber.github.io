console.log(13);
let sc = [255,255,255];
let pc = [255,255,255];
let fc = [255,255,255];
let cmd = '';
function setup(){
  createCanvas(601,601);
}
function draw(){
  background(255);
  stroke(0);
  strokeWeight(1);
  fill(sc[0],sc[1],sc[2]);
  rect(0,0,600,600);
}
