



function setup(){
	createCanvas(windowWidth, windowHeight)

	for(let i = 0; i<windowWidth; i=i+10){
		line(i, 0, i, windowHeight)
		print(i)

	}

	for(let i = 0; i<windowHeight; i=i+10){
		line(0, i, windowWidth, i)
	}


	// for(let i = 0; i < 500; i++){
	// 	ellipse(random(windowWidth), random(windowHeight), 50, 50)
	// }
}


function draw(){
	//background(255)
	for(let i = 0; i<windowWidth; i=i+50){
		line(mouseX, mouseY, i, windowHeight)
		//ellipse(mouseX, i, i, 50)
		//print(i)

	}

	// for(let i = 0; i < 500; i++){
	// 	fill(random(255), random(255), random(255))
	// 	ellipse(random(windowWidth), random(windowHeight), 50, 50)
	// }

}