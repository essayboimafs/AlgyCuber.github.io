console.log(2);
let g = [0,0,0,0,0,0,0,0,0];
function setup(){
  createCanvas(194,194);
}
function draw(){
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      rect(1,1,i*64+1,j*64,1);
    }
  }
}
