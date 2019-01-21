console.log(18);
let lvls = [{
  world:1,
  lvl:1,
  room:0,
  displayName:'1-1',
  theme:0, //0 = overworld, 1 = underground, 3 = underwater, 4 = sky, 5 = castle
  layout:[[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [1, 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  startPoint:[3,2]
}];
/*
  0 = empty
  1 = ground
  2 = brick
  3 = hard block
  4 = coin
  5 = question block
  6 = kaizo block
  7 = pipe top
  8 = pipe shaft
  9 = question done
  10 = flagpole
*/
let currentRoom = 0;
let xPassed = 0;
function character(ox, oy){
  this.x = ox;
  this.y = oy;
  this.draw1 = function(){
    ellipse(this.x,this.y,20,20);
  }
}
/*function enemy(ox, oy){
  this.x = ox;
  this.y = oy;
  this.draw1 = function(){
    ellipse(this.x,this.y,20,20);
  }
}*/
let ch;
function setup(){
  createCanvas(512,512)
  ch = new character(lvls[currentRoom].startPoint[0]*32+16,502-lvls[currentRoom].startPoint[1]*32);
}
function draw(){
  if(lvls[currentRoom].theme==0){background(93,148,251);}
  else if(lvls[currentRoom].theme==1){}
  else if(lvls[currentRoom].theme==2){}
  else if(lvls[currentRoom].theme==3){}
  else if(lvls[currentRoom].theme==4){background(219,252,255);}
  for(let i=-4;i<((xPassed/32%1==0)?20:21);i++){
    for(let j=0;j<16;j++){
      let currentXBlock = Math.floor(xPassed/32)+i;
      if(currentXBlock>=0 && currentXBlock<lvls[currentRoom].layout.length){
        if(lvls[currentRoom].layout[currentXBlock][15-j]==1){
          fill(143,244,66);
          noStroke();
          rect(currentXBlock*32-xPassed,j*32,32,32);
        }
      }
    }
  }
  fill(255,53,35);
  ch.draw1();
}
