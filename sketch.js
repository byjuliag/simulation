function setup() {
  createCanvas(800, 500);
  background(255);
}

function draw() {
  // Draw something here
  if (mouseIsPressed) {
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
  }
}

// Function to change the background color
function changeBackground(color) {
  background(color);
}
