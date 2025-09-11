

let greenBool = false
let darkBool = false



function setup(){
	createCanvas(windowWidth, windowHeight)
	background(255)
	
}


function draw(){
	fill(0)
	textSize(20)
	text("Press g or press d", 100, 100)

	//if day is true draw day function
	if(greenBool == true){
		
			greenScene()
		
	}

	//if night is true draw night function
	if(darkBool == true){
		
			darkScene()
		
	}
	
}


//pretend that these are individual sketches/drawings/scenes and
//you're flipping between them


function greenScene(){
	//add as much as you want to this function!

background(75, 189, 235);
  // Rectangle:
  fill(150,75,0)
  rect(180,150, 100, 1000);
  noStroke();

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

}

function darkScene(){
	//add as much as you want to this function!
background(0);
	fill(17, 125, 66)
  rect(180,150, 100, 1000);
  noStroke();

  fill(150,75,0);
  ellipse(200, 150, 100, 100);
  ellipse(220, 170, 100, 100);
  ellipse(150, 150, 100, 100);
  ellipse(200, 160, 100, 100);
  ellipse(150, 170, 100, 100);
  ellipse(200, 100, 100, 100);
  ellipse(260, 100, 100, 100);
  ellipse(120, 100, 100, 100);
  ellipse(270, 190, 100, 100);



  fill(17, 125, 66);
  triangle(300, 100, 150, 150, 250, 100);
  triangle(100, 100, 100, 150, 150, 70);
  triangle(200, 220, 220, 200, 240, 190);

  fill(1, 76, 62);

  textSize(20);
  text('☁️', 40, 100);

  textSize(50);
  text('☁️', 350, 100);

  textSize(30);
  text('☁️', 300, 60);
  text('☁️', 100, 40);

}



function keyPressed(){
	//pressing d flips day to true and night to false
	if(key === 'g'){
		greenBool = true
		darkBool = false
	
	}
	//pressing d flips night to true and day to false
	if(key === 'd'){
		greenBool = false
		darkBool = true
		
	}



}