let bullets = 1;
let bricks = [];
let shooting = false;
let θ = null;//donkeypoop
let TAU = 2*Math.PI; //milk hates this
function deg2rad(n){return n*DEG_TO_RAD;}
function rad2deg(n){return n*RAD_TO_DEG;}
function setup(){
	createCanvas(422,522);
}
function draw(){
	background(230);
	if(!shooting){
		if(mouseX>0 && mouseX<422 && mouseY>0 && mouseY<522){
			θ = Math.atan((mouseX-211)/(509-mouseY));
			if(θ==0){}
			else if(rad2deg(θ)>85 || (mouseX>211 && θ<0)){θ = deg2rad(85);}
			else if(rad2deg(θ)<-85 || (mouseX<211 && θ>0)){θ = -deg2rad(85);}
		}
		else{θ = null;}
	}
	if(θ!=null){
		for(let i=0;i<231;i++){
			stroke(i);
			strokeWeight(2);
			line(211+2*i*Math.sin(θ),509-2*i*Math.cos(θ),211+2*(i+2)*Math.sin(θ),509-2*(i+2)*Math.cos(θ));
			if(211+2*(i+2)*Math.sin(θ)){
			line(211+2*(i+2)*Math.sin(θ),509-2*(i+2)*Math.cos(θ),-211+2*(i+2)*Math.sin(θ),509-2*(i+2)*Math.cos(θ));
			}
		}
	}
	stroke(0);
	strokeWeight(1);
	fill(66,173,244);
	rect(191,480,40,40);
}
function mousePressed(){shooting = true;}
function genLayer(){
	if(bullets<6){}
}
