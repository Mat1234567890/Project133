img = "";
function preload(){
img = loadImage("dog_cat.jpg");
}
function setup(){
canvas = createCanvas(640,420);
canvas.center();
}
function draw(){
image(img,0,0,640,420);
fill("#0060EA");
noFill();
stroke("#0060EA");
text("Dog",40,75);
rect(30,50,450,350);
}