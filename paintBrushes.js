
let bird
let ellipseBrushBool=false
let squareBrushBool=false
let birdBrushBool=false


function preload (){
	bird = loadImage ('bird.jpg')
}


function setup (){
	createCanvas (windowWidth,windowHeight)
	background (255)
	rectMode (CENTER)
	imageMode (CENTER)
}
function draw (){
	fill(0)
	textSize(20)
	text ("Press e for ellipse brush, press s for square brush, and any function for background", 100,100)

	if(squareBrushBool == true){
		if(mouseIsPressed==true){
		squareBrush()	
	}

	}
	if(ellipseBrushBool == true){
		if(mouseIsPressed==true){
		ellipseBrush()
	}
	}
	if(birdBrushBool == true){
		if(mouseIsPressed == true){
			birdBrush()
		}
	}

	//birdBrush()

print(ellipseBrushBool)

}

function ellipseBrush(){
	fill(random(255),random (255),random (255))
	ellipse (mouseX, mouseY, 50,50)

}

function squareBrush(){
	fill(random(255))
	rect(mouseX,mouseY, 100,100)

	function birdBrush(){
		image (bird,mouseX,mouseY,100,100)

}

	
function keyPressed(){
	if(key==='e'){
		ellipseBrushBool=true
		squareBrushBool=false
	}
	if(key==='s'){
		ellipseBrushBool=false
		squareBrushBool=true
	}


//background color change 
if(mouseIsPressed == true){ background(255, 0, 0);
} else {
background(0, 0, 255);
}


//background restart 
if(key === 'c'){
  background(255);
}

}
