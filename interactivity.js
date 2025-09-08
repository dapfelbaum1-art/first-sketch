function setup() {
  createCanvas(600, 600);

}
function draw(){

  if(mouseX > width/2){
    background(235,52,229)
    //fill(30,190,40)
  }else{
    background(235,229, 52)
  }
    
   //background(220); 
    
    if(mouseIsPressed==true){
     fill(30,20,190)
    }else{
      
      fill(30,190, 20)
    }
    
    if(keyIsPressed==true){ 
        strokeWeight(10)
      }else{
        strokeWeight(1)
    }
    
 ellipse(mouseX,mouseY, 20,20)
  line(pmouseX,pmouseY,mouseX,mouseY)
 // noCursor()
  
 // print(mouseX)
}