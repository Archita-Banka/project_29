const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2,box3,box4,box5;
var box6, box7,box8,box9;
var box10, box11,box12;
var box13, box14;
var polygon;
var slingshot;
var gameState = "onSling";
function preload() {

}

function setup(){
    createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,650,700,20);
    box1 = new Box(550,620);
    box2 = new Box(600,620);
    box3 = new Box(640,620);
    box4 = new Box(670,620);
    box5 = new Box(710,620);

    box6 = new Box(575,590);
    box7 = new Box(615,590);
    box8 = new Box(650,590);
    box9 = new Box(680,590);
  
    box10 = new Box(590,560);
    box11 = new Box(640,560);
    box12 = new Box(680,560);

    box13 = new Box(620, 530);
    box14 = new Box(670, 530);
   
    polygon = new Ball();
    slingshot = new Slingshot(polygon,{x:300,y:300});

    
    
}

    function draw(){
        background("grey");
        Engine.update(engine);
        
        ground.display();
        slingshot.display();
        polygon.display();
        
        
        fill("pink");
        box1.display();
        box2.display();  
        box3.display();  
        box4.display();  
        box5.display();
  
        fill("cyan");
        box6.display();
        box7.display();
        box8.display();
        box9.display();

        fill("lightblue");
        box10.display(); 
        box11.display(); 
        box12.display();

        fill("orange")
        box13.display();
        box14.display();
        
    }

    function mouseDragged(){
         //if (gameState !== 'launched') {
            Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
     //}
      
      }
      
      function mouseReleased(){
        slingshot.fly();
        gameState = "launched";
      }
      function keyPressed() {
        if (keyCode === 32) {

            slingshot.attach(polygon.body);
            Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
        }
      }
      