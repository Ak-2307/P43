var hr, hrAngle;
var mn, mnAngle;
var sc, scAngle;



function setup() {
  createCanvas(800,400);
 
 angleMode(DEGREES); 


}

function draw() {
  background("black");  
  
 translate(200,200);

   hr = hour();
   mn = minute();
   sc = second();

   scAngle = map(sc, 0, 60, 0, 360);
   hrAngle = map(hr%12, 0, 12, 0, 360);
   mnAngle = map(mn, 0, 60, 0, 360);

   //drawing the seconds hand
   push();
   rotate(scAngle);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,100,0);
   pop();

   stroke(255,0,0);
   noFill();
   arc(0,0,200,200,0,scAngle);
  
   
   //drawing the minutes hand
   push();
   rotate(mnAngle);
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,70,0);
   pop();
   
   stroke(0,255,0);
   noFill();
   arc(0,0,150,150,0,scAngle);

   //drawing the hour hand
   push();
   rotate(hrAngle);
   stroke(0,0,255);
   strokeWeight(7);
   line(0,0,40,0);
   pop();

   stroke(0,0,255);
   noFill();
   arc(0,0,70,70,0,scAngle);


  drawSprites();
}