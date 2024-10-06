// Select elements
const menuToggle = document.getElementById('menuToggle');
const overlayMenu = document.getElementById('overlayMenu');
const overlayNavLinks = document.querySelectorAll('.overlay-nav a'); // Select all overlay nav links

// Function to open the overlay menu
menuToggle.addEventListener('click', function() {
    overlayMenu.classList.add('active'); // Add active class to show the menu
});

// Function to close the overlay menu on swipe
let startX;

overlayMenu.addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX; // Get the initial touch position
});

overlayMenu.addEventListener('touchmove', function(event) {
    const currentX = event.touches[0].clientX; // Get current touch position
    if (currentX > startX + 50) { // Check if the swipe distance is greater than 50px
        overlayMenu.classList.remove('active'); // Remove active class to hide the menu
    }
});

// Function to close the overlay when clicking outside the content
overlayMenu.addEventListener('click', function(event) {
    if (!event.target.closest('.overlay-content')) { // Check if the click is outside the content
        overlayMenu.classList.remove('active'); // Remove active class to hide the menu
    }
});

// Function to close the overlay when a menu item is clicked
overlayNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        overlayMenu.classList.remove('active'); // Remove active class to hide the menu
    });
});


// JavaScript to add stars to the home section
function createStars() {
  const homeSection = document.querySelector('.home-section');
  const starCount = 100; // Adjust the number of stars as needed

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomly assign a speed class (fast, medium, slow)
    const speedClass = ['fast', 'medium', 'slow'][Math.floor(Math.random() * 3)];
    star.classList.add(speedClass);

    // Randomize star position
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;

    homeSection.appendChild(star);
  }
}

// Call the createStars function after the DOM is fully loaded
window.addEventListener('DOMContentLoaded', createStars);


// Smooth scrolling
document.querySelectorAll('a.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

