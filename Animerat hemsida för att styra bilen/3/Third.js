// Add event listener to start button
document.getElementById('finish').addEventListener('click', function(){
  // Redirect to third.html when start button is clicked
  window.location.href = '/4/Forth.html';
});
var upButton = document.getElementById("up");
var leftButton = document.getElementById("left");
var downButton = document.getElementById("down");
var rightButton = document.getElementById("right");

upButton.addEventListener("click", function(){
  // Send command to move the car forward
  console.log("Moving forward");
});
leftButton.addEventListener("click", function(){
  // Send command to turn the car left
  console.log("Turning left");
});
downButton.addEventListener("click", function(){
  // Send command to move the car backward
  console.log("Moving backward");
});
rightButton.addEventListener("click", function(){
  // Send command to turn the car right
  console.log("Turning right");
});