
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
	text ("Press e for ellipse brush, press s for square brush, and b for green!!", 100,100)

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
		//if(mouseIsPressed == true){
			birdBrush()
		//}
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
}



function birdBrush(){

		

  // Rectangle:

  fill(25, 181, 51);
  ellipse(200, 150, 100, 100);
  ellipse(220, 170, 100, 100);
  ellipse(150, 150, 100, 100);
  ellipse(200, 160, 100, 100);
  ellipse(150, 170, 100, 100);
  ellipse(200, 100, 100, 100);
  ellipse(260, 100, 100, 100);
  ellipse(120, 100, 100, 100);
  ellipse(270, 190, 100, 100);

ellipse(mouseX,mouseY, 20,20)
  line(pmouseX,pmouseY,mouseX,mouseY)
 // noCursor()

  fill(222, 219, 24);
  ellipse(1, 1, 100, 100);

  fill(17, 125, 66);
  triangle(300, 100, 150, 150, 250, 100);
  triangle(100, 100, 100, 150, 150, 70);
  triangle(200, 220, 220, 200, 240, 190);

  fill(140, 76, 62);

  textSize(20);
  text('☁️', 40, 100);

  textSize(50);
  text('☁️', 350, 100);

  textSize(30);
  text('☁️', 300, 60);
  text('☁️', 100, 40);

  image(bird, 500 / 2, 300 / 2, 30, 30);
	

}

	
function keyPressed(){
	if(key==='e'){
		ellipseBrushBool=true
		squareBrushBool=false
		birdBrushBool = false
	}
	if(key==='s'){
		ellipseBrushBool=false
		squareBrushBool=true
		birdBrushBool = false
	}

	//background restart 
	if(key === 'b'){
		birdBrushBool = true
	  ellipseBrushBool=false
		squareBrushBool=false
	}

	if(key === 'c'){
		background(255)
	}

}
