console.log(11);
let sc = [255,255,255];
let pc = [255,255,255];
let fc = [255,255,255];
let cmd = '';
function setup(){
  createCanvas(601,601);
  document.body.innerHTML += '<input id="inp">';
  inp.style.position = 'absolute';
  inp.style.left = '650px';
  inp.style.top = '100px';
  inp.width = '400px';
}
function draw(){
  background(255);
  stroke(0);
  strokeWeight(1);
  fill(sc[0],sc[1],sc[2]);
  rect(0,0,600,600);
  
}
function keyPressed(k){
  
}
