// Get the butterfly container
const butterflyContainer = document.getElementById("butterfly-container");

// Initialize butterfly position
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Smoothly update butterfly position on mousemove
window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  gsap.to(butterflyContainer, {
    x: mouseX - butterflyContainer.offsetWidth / 2, // Center butterfly horizontally
    y: mouseY - butterflyContainer.offsetHeight / 2, // Center butterfly vertically
    duration: 0.3, // Smooth movement
    ease: "power1.out", // Ease-out effect for natural motion
  });
});
