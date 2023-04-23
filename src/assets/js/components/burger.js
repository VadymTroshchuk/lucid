


const mobNav = document.querySelector('.navbar__mob');
const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelectorAll('.hamburger-line');
const body = document.body;
const overlay = document.querySelector('.overlay');
const mobNavLink = document.querySelector('.navbar__link-mob');

// checking if the burger menu was previously active
const isBurgerMenuActive = localStorage.getItem('burgerMenuActive') === 'true';

if (isBurgerMenuActive) { 
  // then add  active classes if the burger menu was previously active
  hamburger.classList.add('active');
  hamburgerLine.forEach((item) => {
    item.classList.add('active');
  });
  body.classList.add('lock');
  mobNav.classList.add('active');
  body.classList.add('active');
  overlay.classList.add('active');
}

hamburger.addEventListener('click', toggleBurgerMenu);
overlay.addEventListener('click', hideBurgerMenu);
mobNav.addEventListener('click', hideMenuLink);
window.addEventListener('resize', handleResize);

function toggleBurgerMenu() {
  const isActive = hamburger.classList.contains('active');
  
  // here saving the state of the burger menu 
  localStorage.setItem('burgerMenuActive', !isActive);

  hamburger.classList.toggle('active');
  hamburgerLine.forEach((item) => {
    item.classList.toggle('active');
  });
  body.classList.toggle('lock');
  mobNav.classList.toggle('active');
  body.classList.toggle('active');
  overlay.classList.toggle('active');
}

function hideBurgerMenu() { // Remove burger if burger was clicked
  hamburger.classList.remove('active');
  hamburgerLine.forEach((item) => {
    item.classList.remove('active');
  });
  body.classList.remove('lock');
  mobNav.classList.remove('active');
  overlay.classList.remove('active');
  
  // saving the state of the burger menu
  localStorage.setItem('burgerMenuActive', false);
}

function hideMenuLink(e) { //removing menu if click one of menu links
  if (e.target.classList.contains('navbar__link-mob')) {
    hamburger.classList.remove('active');
    body.classList.remove('lock');
    mobNav.classList.remove('active');
    overlay.classList.remove('active');
    hamburgerLine.forEach((item) => {
      item.classList.remove('active');
    });

    // saving the state of the burger menu
    localStorage.setItem('burgerMenuActive', false);
  }
}

function handleResize() { // function handles the resizing of the window and updates burger menu state
  const isBurgerMenuActive = localStorage.getItem('burgerMenuActive') === 'true';
  const currentWidth = window.innerWidth;
  // if window width is 756px or greater, hide the burger menu and reset its state
  if (currentWidth >= 756) {
    body.classList.remove('lock');
    overlay.classList.remove('active');
    mobNav.classList.remove('active');
    hamburger.classList.remove('active');
    hamburgerLine.forEach((item) => {
      item.classList.remove('active');
    });
    // if the window width is less than 756px and the burger menu was previously active, then show the burger menu 
  } else if (isBurgerMenuActive) {
    body.classList.add('lock');
    overlay.classList.add('active');
    mobNav.classList.add('active');
    hamburger.classList.add('active');
    hamburgerLine.forEach((item) => {
      item.classList.add('active');
    });
  } //if the window width is less than 756px and the burger menu was not previously active, then hide the burger menu 
  else {
    body.classList.remove('lock');
    overlay.classList.remove('active');
    mobNav.classList.remove('active');
    hamburger.classList.remove('active');
    hamburgerLine.forEach((item) => {
      item.classList.remove('active');
    });
  }
}