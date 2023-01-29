// Mobile menu toggle feature:
const mobileMenu = {};

// Init function:
mobileMenu.init = () => {
  mobileMenu.closeMenuEvent();
  mobileMenu.openMenuEvent();
  mobileMenu.menuScrollEvent();
}

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

// Scroll event to change the mobile menu button from navy to orange when its hovering over the "skills" section.
// Find the y-axis position of the skills section:
mobileMenu.skillsSection = document.getElementById('skills');
mobileMenu.skillsPosition = mobileMenu.skillsSection.getBoundingClientRect();
console.log(mobileMenu.skillsPosition);
mobileMenu.skillsPositionY = mobileMenu.skillsPosition.y;
// Find the y-axis position of the projects section:
mobileMenu.projectSection = document.getElementById('projects');
mobileMenu.projectPosition = mobileMenu.projectSection.getBoundingClientRect();
mobileMenu.projectPositionY = mobileMenu.projectPosition.y;

// Event listener to add a contrasting colour to my menu button when it scrolls over the dark background of my "skills section":
mobileMenu.menuScrollEvent = () => {
  document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    // console.log(Math.floor(window.scrollY));
    // If the window scroll position is > the position of skills section AND the window scroll position is < the position of the projects section, then run a forEach loop to add the class "scroll-on" to each line that makes up my hamburger menu.
    if (Math.floor(window.scrollY / 1.13) >= mobileMenu.skillsPositionY && Math.floor(window.scrollY / 1.12) <= mobileMenu.projectPositionY) {
      // console.log(window.scrollY);  
      mobileMenu.menuButtonLines.forEach((line) => {
        line.classList.add('scroll-on');
      })
      // Else statement to remove "scroll-on" class, otherwise the contrasting colour remains.
    } else {
      mobileMenu.menuButtonLines.forEach((line) => {
        line.classList.remove('scroll-on');
      })
    };
  })
}

// Calling the init function.
mobileMenu.init();
