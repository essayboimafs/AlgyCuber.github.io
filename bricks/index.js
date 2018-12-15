console.log(11);
let bullets = 1;
let g = [];
let shooting = false;
let θ = null;
let TAU = 2*Math.PI; //milk hates this
function deg2rad(n){return n*DEG_TO_RAD;}
function rad2deg(n){return n*RAD_TO_DEG;}
function setup(){
	createCanvas(422,522);
	for(let i=0;i<13;i++){
		g.push([]);
		for(let j=0;j<6;j++){
			g[i].push(0); //positive = brick, 0 = blank, -1 = bullet
		}
	}
	textAlign(CENTER);
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
		if(θ!=null){
			let θy = 1;
			let center = [211,509];
			let zeroI = 0;
			for(let i=0;i<231;i++){
				stroke(i);
				strokeWeight(2);
				line(center[0]+2*(i-zeroI)*Math.sin(θ),
				     center[1]-2*(i-zeroI)*Math.cos(θ)*θy,
				     center[0]+2*(i-zeroI+2)*Math.sin(θ),
				     center[1]-2*(i-zeroI+2)*Math.cos(θ)*θy);
				if(center[0]+2*(i-zeroI+2)*Math.sin(θ)>width || center[0]+2*(i-zeroI+2)*Math.sin(θ)<0){
					center = [center[0]+2*(i-zeroI+2)*Math.sin(θ),center[1]-2*(i-zeroI+2)*Math.cos(θ)*θy];
					zeroI = i;
					θ = -θ;
				}
				for(let k=0; k<13; k++){
					for(let j=0; j<6; j++){
						if(g[k][j]>0 && center[0]+2*(i-zeroI+2)*Math.sin(θ)>j*70+1 && center[0]+2*(i-zeroI+2)*Math.sin(θ)<j*70+71&&center[1]-2*(i-zeroI+2)*Math.cos(θ)*θy<i*40+41&&center[1]-2*(i-zeroI+2)*Math.cos(θ)*θy>i*40+1){
							center = [center[0]+2*(i-zeroI+2)*Math.sin(θ),center[1]-2*(i-zeroI+2)*Math.cos(θ)*θy];
							zeroI = i;
							θy = -θy;
						}
					}
				}
			}
		}
	}
	stroke(0);
	strokeWeight(1);
	fill(66,173,244);
	rect(191,480,40,40);
	//update
	for(let i=0;i<13;i++){
		for(let j=0;j<6;j++){
			if(g[i][j]>0){
				fill(152,244,66);
				rect(j*70+1,i*40+1,70,40);
				fill(0);
				text(g[i][j],j*70+36,i*40+25);
			}
			else if(g[i][j]<0){
				fill(220,232,242);
				ellipse(j*70+36,i*40+21,16,16);
			}
		}
	}
	
}
function mousePressed(){shooting = true;}
function genLayer(){
	function shiftDown(){}
	function genBullet(){}
	function genBrick(){}
	if(bullets<6){}
}
