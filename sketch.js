let bird;

function preload() {
  bird = loadImage('bird.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // draws runs in a loop
  background(75, 189, 235);

    if(mouseIsPressed==true){
     fill(30,30,30)
    }else{
      
      fill(30,100, 20)
    }


  // Rectangle:
  rect(width / 2.6, height / 4, 100, 600);
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