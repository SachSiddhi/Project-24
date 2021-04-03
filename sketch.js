const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1;
var stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9,stone10;
var iron1,iron2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    rubber1 = new Rubber(800,100,90);

    stone1 = new Stone(500,120,22);
    stone2 = new Stone(520,120,22);
    stone3 = new Stone(540,120,22);
    stone4 = new Stone(560,120,22);
    stone5 = new Stone(590,120,22);
    stone6 = new Stone(350,120,22);
    stone7 = new Stone(400,120,22);
    stone8 = new Stone(440,120,22);
    stone9 = new Stone(460,120,22);
    stone10 = new Stone(480,120,22);
 
    iron1 = new Iron(650,90,100,100);
    iron2 = new Iron(150,110,80,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber1.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    stone8.display();
    stone9.display();
    stone10.display();
    iron1.display();
    iron2.display();
}