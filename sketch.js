var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);

  gui = new Gui();
  let gui_setup = new dat.GUI();

  gui_setup.addColor(gui, "background");
  gui_setup.add(gui, 'distance', 0, 300).step(1);
  gui_setup.add(gui, 'weight', 0, 15).step(1);
}

function draw() {
  background(gui.background)
  let layers = random(15)
  for (let i = 0; i <= windowWidth; i += windowWidth * 0.25) {
    for (let y = 0; y <= windowHeight; y += windowHeight * 0.25) {
      squarepattern(i, y, gui.distance, layers);
    }
  }
  noLoop()
}

function mousePressed() {
  loop()
}

function squarepattern(xPos, yPos, steps, num) {

  for (var i = 0; i <= num; i++) {

    noFill();
    strokeWeight(gui.weight);
    rectMode(CENTER)
    rect(xPos, yPos, steps * i, steps * i);
  }
}

function Gui() {
  this.background = '#fff';
  this.distance = 32;
  this.weight = 11;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}