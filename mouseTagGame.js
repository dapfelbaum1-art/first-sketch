

let bird 
//position of the bird 

let birdX
let birdY

//bird speed 
let birdXspeed = 3
let birdYspeed = 3

let score = 0 

let mouseDist 

let startGameBool = true
let winGameBool = false 

function preload(){
	bird = loadImage('bird.jpg')

}

function setup (){
	createCanvas (windowWidth, windowHeight)

	birdX = windowWidth/2
	birdY = windowHeight/2 

	imageMode(CENTER)

}

function draw (){
	if(startGameBool == true){
		startGame ()



	}


	if (winGameBool == true){
		winGame ()

	}

}

//function that starts game 
function startGame (){
	background (0)
	fill (255)
	textSize (40)
	text ('Tag the bird! Your score is: ' + score + ' points!' , 10,100)


	mouseDist = dist(mouseX,mouseY, birdX, birdY)

	birdX = birdX + birdXspeed
	birdY = birdY + birdYspeed 

if (birdX>= windowWidth - 25|| birdX <= 25){

	birdXspeed = birdXspeed * -1 

}

if (birdY >= windowHeight - 25 || birdY <= 25){
	birdYspeed = birdYspeed * -1 

}

if(mouseDist < 25){
	score++
	birdX = random (26, windowWidth - 26)
	birdY = random (26, windowHeight -26)
	birdXspeed = birdXspeed  * 1.3 
	birdYspeed = birdYspeed * 1.3
}


if (score == 5){
	startGameBool = false
	winGameBool =true 

}


image (bird, birdX, birdY, 50,50)
}


//win screen function 
function winGame (){
	background (random (255), random (255), random (255))
	fill (255)
	textSize (40)
	text('You Win!!',10,100)

	image (bird, windowWidth/2, windowHeight/2, 200, 200)

}