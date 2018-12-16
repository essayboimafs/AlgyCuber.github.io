console.log(8);
let lvls = [{
  world:1,
  lvl:1,
  coincash:false,
  displayName:'1-1',
  theme:0, //0 = overworld, 1 = underground, 2 = island, 3 = castle, 4 = sky, 5 = underwater
  night:false,
  snow:false
}];
let currentLvl = 0;
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
  if(lvls[currentLvl].theme==0){background(93,148,251);}
  else if(lvls[currentLvl].theme==1){}
  else if(lvls[currentLvl].theme==2){}
  else if(lvls[currentLvl].theme==3){}
  else if(lvls[currentLvl].theme==4){background(219,252,255);}
  ch.draw1();
}
