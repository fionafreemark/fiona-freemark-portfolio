// Mobile menu toggle:
const mobileMenu = {};

// Init function:
mobileMenu.init = () => {
  mobileMenu.closeMenuEvent();
  mobileMenu.openMenuEvent();
}


mobileMenu.menuButton = document.querySelector('.menu-button');
mobileMenu.nav = document.querySelector('.nav-container');
mobileMenu.mobileLinks = document.querySelectorAll('.nav-link');

// Event listener to listen for click, triggers menu button animation & opens menu
mobileMenu.openMenuEvent = () => {
  mobileMenu.menuButton.addEventListener('click', function () {
    mobileMenu.menuButton.classList.toggle('menu-close');
    mobileMenu.nav.classList.toggle('show-nav');
  });
}

// Event listener to listen for click, triggers menu button animation & closes menu
mobileMenu.closeMenuEvent = () => {
  // forEach loop required to assign the event listener to each individual nav-link.
  mobileMenu.mobileLinks.forEach((link) => {
    link.addEventListener('click', function () {
      mobileMenu.menuButton.classList.toggle('menu-close');
      mobileMenu.nav.classList.toggle('show-nav');
    });
  });
}


// document.addEventListener('scroll', function (){
//   console.log(window.scrollY);
// })

mobileMenu.init();
