console.log(8);
let lvls = [{
  world:1,
  lvl:1,
  room:0,
  displayName:'1-1',
  theme:0, //0 = overworld, 1 = underground, 2 = island, 3 = castle, 4 = sky, 5 = underwater
  night:false,
  snow:false,
  layout:[[2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         [2, 2, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         ]
}];
/*
  0 = empty
  1 = char start
  2 = ground
  3 = brick
  4 = stair
  5 = coin
  6 = question
  7 = invis question
  8 = pipe top
  9 = pipe shaft
  10 = question done
  11 = end point
*/
let currentLvl = 0;
function character(ox, oy){
  this.x = ox;
  this.y = oy;
  this.draw1 = function(){
  ellipse(this.x,this.y,20,20);
  }
}
function enemy(ox, oy){
  this.x = ox;
  this.y = oy;
  this.draw1 = function(){
  ellipse(this.x,this.y,20,20);
  }
}
let ch;
function setup(){
  createCanvas(512,512)
  ch = new character();
}
function draw(){
  if(lvls[currentLvl].theme==0){background(93,148,251);}
  else if(lvls[currentLvl].theme==1){}
  else if(lvls[currentLvl].theme==2){}
  else if(lvls[currentLvl].theme==3){}
  else if(lvls[currentLvl].theme==4){background(219,252,255);}
  ch.draw1();
}
