// ✨ Welcome to the script!
// This file controls how the card flips, draws new content, and plays sound
// You can tweak the logic without needing to know advanced JS

// Track how many times the card has been clicked (used to determine state)
let clickCount = 0;

// Store the currently drawn card's data
let currentCard = null;

// Get references to DOM elements we'll need
const card = document.getElementById("card");
const drawButton = document.getElementById("draw-button");
const flipSound = document.getElementById("flip-sound");

// Handle drawing a new card
drawButton.addEventListener("click", () => {
  // Load remedy data from JSON
  fetch("remedies.json")
    .then((res) => res.json())
    .then((data) => {
      // Pick a random remedy from the list
      const cardData = data[Math.floor(Math.random() * data.length)];
      currentCard = cardData;

      // Update the UI with the selected remedy
      renderCard(cardData);

      // Reset state to initial front view
      card.classList.remove("flipped", "dual");
      clickCount = 0;
    });
});

// Handle card flipping logic
card.addEventListener("click", () => {
  // Don't do anything if no card has been drawn yet
  if (!currentCard) return;

  playFlipSound(); // optional sound effect

  clickCount++;

  if (clickCount % 2 === 1) {
    // Odd clicks (1, 3, 5...): show back of the card
    card.classList.add("flipped");
    card.classList.remove("dual");
  } else {
    // Even clicks (2, 4, 6...): show dual state (front + remedy name)
    card.classList.remove("flipped");
    card.classList.add("dual");
  }
});

// Update the card with new remedy content
function renderCard(cardData) {
  const image = document.getElementById("front-image");

  // Set the background image for the card
  image.src = cardData.image;
  image.alt = cardData.poeticName;
  image.style.display = "block";

  // Set the poetic title and description
  document.querySelector(".poetic-name").textContent = cardData.poeticName;
  document.querySelector(".description").textContent = cardData.description;

  // Set remedy name in parentheses (for dual/front view)
  document.querySelector(
    ".remedy-name-overlay"
  ).textContent = `(${cardData.remedyName})`;

  // Set remedy name on the back face
  document.querySelector(".remedy-name-back").textContent = cardData.remedyName;

  // Hide the idle message and show the real card content
  document.getElementById("idle-message").style.display = "none";
  document.getElementById("active-content").style.display = "block";
}

// Reset and play the flip sound (if available)
function playFlipSound() {
  flipSound.currentTime = 0;
  flipSound.play();
}
