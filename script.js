/* Fact Generator! */
var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
if (factButton) {
  var count = 0;

  var factList = [
    "There are over 100 million pieces of space debris orbiting earth right now!",
    "Only about 30,000 of space debris orbiting earth are being tracked right now.",
    "Even a paint chip in space can damage a satellite or other spacecraft.",
    "In 2009, two satellites collided, creating over 20,000 pieces of debris.",
    "Most space junk orbits earth near where the satellites for GPS, weather, and internet operate.",
    "It can take hundreds of years for space junk to deorbit naturally.",
    "There are no binding international laws preventing excess space debris cleanup."
  ];

  function displayFact() {
    fact.innerHTML = factList[count];
    count++;
    if (count === factList.length) {
      count = 0;
    }
  }
  factButton.addEventListener("click", displayFact);
}

// Personalize it!
var inputField = document.getElementById("userInput");
var submitBtn = document.getElementById("submitBtn");
var displayParagraph = document.getElementById("displayMessage");

// event listener
submitBtn.addEventListener("click", function () {
  // get the value
  var userAction = inputField.value;

  // Display the message
  displayParagraph.innerHTML = `🚀 Thank you for signing a petition for stricter space cleanup policies: <strong>${userAction}</strong>, together, we can keep space clean for future generations.`;
});


