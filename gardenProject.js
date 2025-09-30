
let pink
let basket
let garden
let rose
let roseCut


//empty flower arrays
let pinkx = []
let pinky = []

let redx = []
let redy = []


let flower1Number = 10

let flower2Number = 20 

let score = 0

let collectFlowersBool = true

let finshedCollectingBool = false

function preload(){
  pink = loadImage('pinkFlower.png') 
  rose = loadImage ('redRose.png')
  basket = loadImage('basket.png') 
  garden = loadImage ('garden.jpg')
  rose = loadImage('redRose.png')
  roseCut = loadImage('redRoseCut.png')

}

// PINK
function setup(){
 createCanvas(windowWidth, windowHeight)
 imageMode(CENTER)

  //adding multiple numbers to the flower arrays

 for(i = 0; i< flower1Number; i++){
  pinkx.push(random(windowWidth))
  pinky.push(random(windowHeight/2, windowHeight))
}

for(i = 0; i< flower2Number; i++){
  redx.push(random(windowWidth))
  redy.push(random(windowHeight/2, windowHeight))
}



}



function draw(){



  if(collectFlowersBool == true){
    startGame()
  }

  if(finshedCollectingBool == true){

    winGame()
  }

  
}
//RED 





function mousePressed(){
  if(collectFlowersBool == true){
  //chakc if mouse is over red
 for(let i = 0; i < redx.length; i++){
  if(dist(mouseX,mouseY,redx[i],redy[i])< 25){
    redx.splice(i, 1)
    redy.splice(i, 1)
    score++ 
  }

}

for(let i = 0; i < pinkx.length; i++){
  if(dist(mouseX,mouseY,pinkx[i],pinky[i]) < 25){
    pinkx.splice(i, 1)
    pinky.splice(i, 1)
      score++   // increase score when pink is collected
    }

  }
  }

    //check if mouse is over pink

}

function keyPressed(){

  if(key == 'x'){
    // x.push(random(windowWidth))
    // y.push(random(windowHeight))



    print(x)
  }
}

  //function that starts game 
function startGame(){
  

  background(255)
  image(garden, windowWidth/2, windowHeight/2, windowWidth,windowHeight)

  fill (255)
  textSize (40)
  text ('Collect all flowers to win!!!' , 10,100)
  text ('You have ' +score+ ' out of 30', 10, 150)

      //parse through the flower arrays, display flowers
      //
  if (score == 30){
    collectFlowersBool = false
    finshedCollectingBool =true 
  }
//PINK

  for(let i = 0; i < pinkx.length; i++){
    image(pink, pinkx[i], pinky[i], 50, 50)
  }

      //delete object if your mouse is close
      //if(dist(mouseX, mouseY, pinkx[i], pinky[i])< 25){
    // pinkx.splice(i, 1)
    // pinky.splice(i, 1)
  

  for(let i = 0; i < redx.length; i++){
    image(rose, redx[i], redy[i], 50, 50)
  }


  

  






    //checking to see if a flower is collected, if so show the flower image in basket
   // if(pinkx.length < flower1Number){
   //      image(pink, mouseX - 20, mouseY-10, 50, 50)
   //  }

  image(basket, mouseX, mouseY, 150,100)

  if (redx.length < flower2Number){
    image (roseCut, mouseX-10, mouseY-20, 50, 50)

    print("got red")

  }
  if (pinkx.length < flower1Number){
    image (pink, mouseX+20, mouseY-20, 40, 50)
  }


  noCursor()

}

function winGame(){
  background (random (255), random (255), random (255))
  fill (255)
  textSize (40)
  text('You Win!!',10,100)

  image (pink, windowWidth/2, windowHeight/2, 200, 200)

}
