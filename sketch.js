const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;


  
    slingshot1 = new Slingshot(pendulum.body,{x:400, y:420});
    slingshot2 = new Slingshot(pendulum.body,{x:800, y:420});
    slingshot3 = new Slingshot(pendulum.body,{x:1200, y:420});
    slingshot4 = new Slingshot(pendulum.body,{x:1600, y:420});

    pendulum1 = new Pendulum(400,420,200) 
    pendulum2 = new Pendulum(800,420,200)
    pendulum3 = new Pendulum(1200,420,200)
    pendulum4 = new Pendulum(1600,420,200)
    


}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    


   
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum.body, {x: mouseX , y: mouseY});
}


// function mouseReleased(){
//     slingshot.fly();
// }

// function keyPressed(){
//     if(keyCode === 32){
//         slingshot.attach(bird.body);
//     }
// }