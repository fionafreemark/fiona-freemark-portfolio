// Mobile menu toggle:
const mobileMenu = {};

// Init function:
mobileMenu.init = () => {
  mobileMenu.closeMenuEvent();
  mobileMenu.openMenuEvent();
  mobileMenu.menuScrollEvent();
  // mobileMenu.elementPosition();
}


mobileMenu.menuButton = document.querySelector('.menu-button');
mobileMenu.nav = document.querySelector('.nav-container');
mobileMenu.mobileLinks = document.querySelectorAll('.nav-link');
mobileMenu.menuButtonLines = document.querySelectorAll('.menu-open');

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

// Scroll Event to change the hamburger menu from blue to orange so it displays on the dark background of the Skills Section.
// mobileMenu.menuScrollEvent = () => {
//   document.addEventListener('scroll', () => {
//     // console.log(Math.floor(window.scrollY));
//     if (Math.floor(window.scrollY) > 1705 && Math.floor(window.scrollY) < 2205) {
//       console.log(window.scrollY);  
//       mobileMenu.menuButtonLines.forEach((line) => {
//           line.classList.add('scroll-on');
//         })
//       } else {
//       mobileMenu.menuButtonLines.forEach((line) => {
//         line.classList.remove('scroll-on');
//       })
//       };
//   })
// }

// Scroll event to change the mobile menu button from navy to orange when its hovering over the "skills" section.
mobileMenu.skillsSection = document.getElementById('skills');
mobileMenu.skillsPosition = mobileMenu.skillsSection.getBoundingClientRect();
// console.log(mobileMenu.skillsPosition);
mobileMenu.projectSection = document.getElementById('projects');
mobileMenu.projectPosition = mobileMenu.projectSection.getBoundingClientRect();
// console.log(mobileMenu.projectPosition);
mobileMenu.skillsPositionY = mobileMenu.skillsPosition.y;
mobileMenu.projectPositionY = mobileMenu.projectPosition.y;
// console.log(mobileMenu.skillsPositionY);
// console.log(mobileMenu.projectPositionY);

mobileMenu.menuScrollEvent = () => {
  document.addEventListener('scroll', () => {
    // console.log(Math.floor(window.scrollY));
    if (Math.floor(window.scrollY) > mobileMenu.skillsPositionY && Math.floor(window.scrollY) < mobileMenu.projectPositionY) {
      console.log(window.scrollY);  
      mobileMenu.menuButtonLines.forEach((line) => {
          line.classList.add('scroll-on');
        })
      } else {
      mobileMenu.menuButtonLines.forEach((line) => {
        line.classList.remove('scroll-on');
      })
      };
  })
}

// MDN Links:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect


mobileMenu.init();
