
const mobNav = document.querySelector('.navbar__mob');
const hamburger = document.querySelector('.hamburger');
const hamburgerLine = document.querySelectorAll('.hamburger-line')
const body = document.body;
const overlay = document.querySelector('.overlay');
const mobNavLink = document.querySelector('.navbar__link-mob')
mobNavLink.classList.add('active')

hamburger.addEventListener('click', showBurgerMenu); // activate burger menu functions  //
overlay.addEventListener('click' , hideBurgerMenu);
mobNav.addEventListener('click' , hideMenuLink);


function showBurgerMenu() { // toggle menu when click  burger //
  hamburger.removeEventListener('click', showBurgerMenu);
  hamburger.classList.toggle('active');
  hamburgerLine.forEach( (item) => {
    item.classList.toggle('active');
  })
  body.classList.toggle('lock');
  mobNav.classList.toggle('active');
  body.classList.toggle('active');
  overlay.classList.toggle('active'); 

  setTimeout(() => {
    hamburger.addEventListener('click', showBurgerMenu);
  }, 500);
}


function hideBurgerMenu() {   // Remove burger if burger was clicked // 
  hamburger.classList.remove('active');
  hamburgerLine.forEach( (item) => {
    item.classList.remove('active');
  })
  body.classList.remove('lock');
  mobNav.classList.remove('active');
  overlay.classList.remove('active');
 
 
};



function hideMenuLink(e){   // Remove menu if click one of menu links // 
 
  if (e.target.classList.contains('navbar__link-mob')) {
    hamburger.classList.remove('active');
    body.classList.remove('lock');
    mobNav.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.removeEventListener('click', showBurgerMenu);
    hamburgerLine.forEach( (item) => {
      item.classList.remove('active');
    })
    setTimeout(() => {
      hamburger.addEventListener('click', showBurgerMenu);
    }, 500);
  }
  
};

