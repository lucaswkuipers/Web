// Box
var box = document.querySelector(".box");

var posX = 0;
var posY = 0;

function move(key) {
  switch (key) {
    case "d":
      posX += 10;
      break;
    case "a":
      posX -= 10;
      break;
    case "s":
      posY += 10;
      break;
    case "w":
      posY -= 10;
      break;
  }
  // X direction continuos screen
  if (posX >= window.innerWidth) {
    posX = -50;
  }
  if (posX < -50) {
    posX = window.innerWidth;
  }
  // Y direction continuos screen
  if (posY >= window.innerHeight) {
    posY = -50;
  }
  if (posY < -50) {
    posY = window.innerHeight;
  }

  box.style.transform = `translate(${posX}px, ${posY}px)`;
}

// Controlller
var controller = document.querySelector("input#myInput");

controller.addEventListener("keydown", function (event) {
  move(event.key);
});
