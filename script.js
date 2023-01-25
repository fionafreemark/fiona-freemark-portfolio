// Mobile Menu Toggle

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle("active");

  const navButton = document.querySelector('.mobile-nav-menu');
  navButton.addEventListener('click', function () {
    navButton.classList.toggle("inactive");
    console.log('off');
  })
});

// Mobile Menu Scroll Colour Change

const scrollElements = document.querySelectorAll('scroll');

const watch = document.querySelector('.watch');

function obCallBack(payload) {
  console.log(payload[0].isIntersecting);
  if (payload[0].isIntersecting === true) {
    scrollElements.classList.add('.scrolled');
  }
}

const ob = new IntersectionObserver(obCallBack);
ob.observe(watch);