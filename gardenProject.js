
let furby
let basket
let garden
let rose

//empty flower arrays
let pinkx = []
let pinky = []

let redx = []
let redy = []


let flower1Number = 10

let flower2Number = 20 


function preload(){
  furby = loadImage('pinkFlower.png') 
  rose = loadImage ('redRose.png')
  basket = loadImage('basket.png') 
  garden = loadImage ('garden.jpg')

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


}

// RED
function setup(){
 createCanvas(windowWidth, windowHeight)
 imageMode(CENTER)

  //adding multiple numbers to the flower arrays

   for(i = 0; i< flower2Number; i++){
      redx.push(random(windowWidth))
      redy.push(random(windowHeight/2, windowHeight))
   }

}

function draw(){
  background(255)
image(garden, windowWidth/2, windowHeight/2, windowWidth,windowHeight)
        
      //parse through the flower arrays, display flowers
      //

//PINK
    
    for(let i = 0; i < pinkx.length; i++){
      image(furby, pinkx[i], pinky[i], 50, 50)

      //delete object if your mouse is close

      if(dist(mouseX, mouseY, pinkx[i], pinky[i])< 25){
        pinkx.splice(i, 1)
        pinky.splice(i, 1)
      }

    }
//RED 
    for(let i = 0; i < redx.length; i++){
      image(rose, redx[i], redy[i], 50, 50)


    }

    //checking to see if a flower is collected, if so show the flower image in basket
   if(pinkx.length < flower1Number){
        image(furby, mouseX - 20, mouseY-10, 50, 50)
    }

    image(basket, mouseX, mouseY, 150,100)
    noCursor()
}



function mousePressed(){
  //chakc if mouse is over red
     for(let i = 0; i < redx.length; i++){
      if(dist(mouseX,mouseY,redx[i],redy[i])< 25){
        redx.splice(i, 1)
        redy.splice(i, 1)
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
