const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const finalMessage = document.getElementById("finalMessage");
const cuteGif = document.getElementById("cuteGif");

let buttonScale = 1;

// Yes button click response
yesButton.onclick = function () {
  showFinalPage();
};

// No button behavior to grow the "Yes" button
noButton.onclick = function () {
  buttonScale += 0.2;
  yesButton.style.transform = `scale(${buttonScale})`;

  if (buttonScale > 3) {
    yesButton.textContent = "JUST SAY YES! 😅";
  }
};

// Show the final message with a cute GIF
function showFinalPage() {
  // Add a cute GIF URL
  cuteGif.src = "https://media1.tenor.com/m/yMjbC5MEv5UAAAAC/hug-squeeze.gif"; // Replace with your own GIF URL
  finalMessage.classList.remove("hidden");

  // Hide the buttons and main container
  document.querySelector(".container").style.display = "none";
}
