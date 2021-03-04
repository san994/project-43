  const Engine = Matter.Engine;
  const World = Matter.World;
  const Event = Matter.Event;
  const Bodies = Matter.Bodies;
  const Body = Matter.Body;

var hr,sd,ms;
var num = ""

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
 
 
  
  //Engine.run(engine)
  

}

function draw() {
  background(0); 
  translate(400,200);
  rotate(-90);

  

  //Engine.update(engine);
  angleMode(DEGREES)

  hr = hour()
  ms = minute()
  sd = second()

  secondAngle = map(sd,0,60,0,360);
  minuteAngle = map(ms,0,60,0,360);
  hourAngle = map(hr,0,60,0,360);
  

  push()
  rotate(secondAngle);
  stroke("red");
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(minuteAngle)
  stroke("blue");
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  push()
  rotate(hourAngle)
  stroke("green");
  strokeWeight(7)
  line(0,0,100,0)
  pop()

   strokeWeight(9)
   noFill()
   stroke("red")
   arc(0,0,270,270,0,secondAngle);
   stroke("green")
   arc(0,0,310,310,0,hourAngle);
   stroke("blue")
   arc(0,0,290,290,0,minuteAngle);
 
}