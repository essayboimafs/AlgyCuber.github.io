console.log(6);
let g = [0,0,0,0,0,0,0,0,0];
let turn = 1;
function setup(){
  createCanvas(300,300);
}
function draw(){
  textAlign(CENTER);
  textSize(48);
  background(255);
  strokeWeight(3);
  line(0,100,300,100);
  line(0,200,300,200);
  line(100,0,100,300);
  line(200,0,200,300);
  for(i=0;i<9;i++){
    if(g[i]>0){text('X',i%3*100+50,Math.floor(i/3)*100+65);}
    else if(g[i]<0){text('O',i%3*100+50,Math.floor(i/3)*100+65);}
  }
}
function move(sq){
  g[sq] = turn;
  turn *= -1;
}
function mousePressed(){
  if(turn>0){
    let sqX,sqY;
    if(mouseX>0 && mouseX<100){sqX = 0;}
    else if(mouseX>100 && mouseX<200){sqX = 1;}
    else if(mouseX>200 && mouseX<300){sqX = 2;}
    if(mouseY>0 && mouseY<100){sqY = 0;}
    else if(mouseY>100 && mouseY<200){sqY = 1;}
    else if(mouseY>200 && mouseY<300){sqY = 2;}
    move(sqY*3+sqX);
  }
}
