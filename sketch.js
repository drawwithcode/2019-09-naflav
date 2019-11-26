let img;

function preload() {
  //preload images
  soap = loadImage('/soapy.png');
}

function setup() {
  //canvas settings + soap placement
  createCanvas(windowWidth, windowHeight);
  background("#F8EBE8");
  image(soap, 0, 0, windowWidth, windowHeight);

  //text settings
  var myText = "Please wash your fingers when entering this website.";
  push();
  textFont("Calistoga");
  textAlign(CENTER);
  textSize(10);
  fill("#A98F8F");
  text(myText, windowWidth / 2, 50);
  pop();
  fill(255, 200, 200, 20); //correct first bubble
}

function draw() {
  //doing the bubbles

  for (var i = 0; i < touches.length; i++) {

    stroke("#FFD3CA");
    strokeWeight(1);
    ellipse(touches[i].x, touches[i].y, 70);
    fill(255, 200, 200, 20);
  }
}

function touchMoved() {
  // prevent dragging the screen around
  return false;
}
