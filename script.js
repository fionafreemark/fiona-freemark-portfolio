// Mobile menu toggle feature:
const mobileMenu = {};

// Init function:
mobileMenu.init = () => {
  mobileMenu.closeMenuEvent();
  mobileMenu.openMenuEvent();
}

// Targeting elements:
mobileMenu.menuButton = document.querySelector('.menu-button');
mobileMenu.nav = document.querySelector('.nav-container');
mobileMenu.mobileLinks = document.querySelectorAll('.nav-link');
mobileMenu.menuButtonLines = document.querySelectorAll('.menu-open');

// Event listener to listen for click, triggers menu button animation & opens menu:
mobileMenu.openMenuEvent = () => {
  mobileMenu.menuButton.addEventListener('click', () => {
    mobileMenu.menuButton.classList.toggle('menu-close');
    mobileMenu.nav.classList.toggle('show-nav');
  });
}

// Event listener to listen for click, triggers menu button animation & closes menu:
mobileMenu.closeMenuEvent = () => {
  // forEach loop required to assign the event listener to each individual nav-link:
  mobileMenu.mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.menuButton.classList.toggle('menu-close');
      mobileMenu.nav.classList.toggle('show-nav');
    });
  });
}

// Calling the init function.
mobileMenu.init();
