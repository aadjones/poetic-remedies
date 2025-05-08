let clickCount = 0;
let currentCard = null;

const card = document.getElementById("card");
const drawButton = document.getElementById("draw-button");
const flipSound = document.getElementById("flip-sound");

drawButton.addEventListener("click", () => {
  fetch("remedies.json")
    .then(res => res.json())
    .then(data => {
      const cardData = data[Math.floor(Math.random() * data.length)];
      currentCard = cardData;
      renderCard(cardData);
      currentState = "front";
      card.classList.remove("flipped", "dual");
      clickCount = 0;
    });
});

card.addEventListener("click", () => {
    if (!currentCard) return;
    playFlipSound();
  
    clickCount++;
  
    if (clickCount % 2 === 1) {
      // odd clicks: back face
      card.classList.add("flipped");
      card.classList.remove("dual");
    } else {
      // even clicks: dual (front + remedy overlay)
      card.classList.remove("flipped");
      card.classList.add("dual");
    }
  });
  
function renderCard(cardData) {
    const image = document.getElementById("front-image");
    image.src = cardData.image;
    image.alt = cardData.poeticName;
    image.style.display = "block"; // show the image
  
    document.querySelector(".poetic-name").textContent = cardData.poeticName;
    document.querySelector(".description").textContent = cardData.description;
    document.querySelector(".remedy-name-overlay").textContent = `(${cardData.remedyName})`;
    document.querySelector(".remedy-name-back").textContent = cardData.remedyName;
  
    // Hide idle message, show content
    document.getElementById("idle-message").style.display = "none";
    document.getElementById("active-content").style.display = "block";
  }
  

function playFlipSound() {
  flipSound.currentTime = 0;
  flipSound.play();
}
