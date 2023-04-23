


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
new Swiper ('.slider' , {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    grabCursor: true,
    
    loop: true,

    spaceBetween: 20,

    autoplay: {
        delay: 5000,

        stopOnLastSlide:false,

        disableOnInteraction: false,
    },


    speed: 800,

    

});







const nameInput = document.getElementById('name-js');
const nameError = document.querySelector('.name-error');
const nameRegex = /^[a-zA-Z ]{2,30}$/; // regex for valid name;

const emailInput = document.getElementById('email-js');
const emailError = document.querySelector('.email-error');
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');// regex for valid email

const subjectInput = document.getElementById('subject-js');
const subjectError = document.querySelector('.subject-error'); // regex for valid subject
const subjectRegex = /^(?!^\d+$).{3,10}$/

const messageInput = document.getElementById('message-js');
const messageError = document.querySelector('.message-error'); // regex for valid message
console.log(messageError)
const messageRegex = new RegExp('^(?!^\\d+$).{5,20}$');

console.log(messageInput.value)
document.getElementById('form-js').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting

    if (!nameRegex.test(nameInput.value.trim())) { // check if name is valid
        nameError.style.opacity = 1;  /// if not valid make error notification  visible
        nameInput.style.border = '1px solid #e74c3c'; // if not valid make border input set to red
     
    } else {
        nameError.style.opacity = 0;  /// if  valid make error notification hidden
        nameInput.style.border = '1px solid #2ecc71';  // if  valid make border input set to green
    }


    if (!emailRegex.test(emailInput.value.trim())) { // check if email is valid

      emailError.style.opacity = 1;  /// if not valid make error notification  visible
      emailInput.style.border = '1px solid #e74c3c'; // if not valid make border input set to red
  } else {
       emailInput.style.border = '1px solid #2ecc71'// if  valid make border input set to green
      emailError.style.opacity = 0;   /// if  valid make error notification hidden
  }



  if (!subjectRegex.test(subjectInput.value.trim())) { // check if subject is valid
    subjectInput.style.border = '1px solid  #e74c3c';
    subjectError.style.opacity = 1; 
  } else {
    subjectInput.style.border = '1px solid #2ecc71'
    subjectError.style.opacity = 0; 
  }



  if (!messageRegex.test(messageInput.value.trim())) { // check if message is valid

    messageInput.style.border = '1px solid #e74c3c';
    messageError.style.opacity = 1; 
    
  } else {

    messageInput.style.border = '1px solid #2ecc71'
    messageError.style.opacity = 0; 
  }


 if(messageRegex.test(messageInput.value.trim()) && subjectRegex.test(subjectInput.value.trim()) &&  emailRegex.test(emailInput.value.trim()) && nameRegex.test(nameInput.value.trim()))  {
  nameInput.style.removeProperty('border');
  emailInput.style.removeProperty('border');
  subjectInput.style.removeProperty('border');
  messageInput.style.removeProperty('border');
  document.getElementById("form-js").reset(); 
  smoothScrollToTop()
/// if every input is valid reset our form and scroll top of our page
 }

});


function smoothScrollToTop() { // adjusting scroll speed when moving to top of the page after pressing submit button and after all validation check is passed 
  const scrollStep = -window.scrollY / (50 / 15); 
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
const header = document.querySelector('.header');
// make it work after user reload the page
window.addEventListener('DOMContentLoaded', () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 60) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // changing backround color
  } else {
    header.style.backgroundColor = ''; // remove the background color 
  }
});

window.addEventListener('scroll', () => {
  // get the current scroll position
  const scrollPos = window.scrollY;

  // setting the background color of the header based on the scroll position
  if (scrollPos > 60) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // changing backround color
  } else {
    header.style.backgroundColor = ''; // remove the background color 
  }
});



function activeLink(){
  const links = document.querySelectorAll('[data-target]');
     // get the position of the fixed header
  const header = document.querySelector('header');
  const mobNav = document.querySelector('.navbar__mob');
  const mobNavLink = document.querySelectorAll('.navbar__link-mob')
  const headerPosition = header.getBoundingClientRect().top;
  const headerHeight = header.getBoundingClientRect().height;
 
  // looping through all the links
  links.forEach(link => {
    // get the section names that correspond to the link
    const targetSections = link.dataset.target.split(' ');
    
    let isActive = false;
    let nextSectionIsActive = false;
    
    // looping through each section name
    targetSections.forEach(sectionName => {
      // getting the section that corresponds to the section name
      const section = document.getElementById(sectionName);
      // get the position of the top and bottom of the section relative to the viewport
      const sectionPosition = section.getBoundingClientRect().top;
      const sectionHeight = section.getBoundingClientRect().height;

      // if the section is within the viewport and its position is above the fixed header, setting isActive to true
      if (sectionPosition - headerPosition <= headerHeight / 2 && sectionPosition + sectionHeight - headerPosition > headerHeight / 2) {
        isActive = true;
      }
      // if the section is below the viewport and its position is above the fixed header, then  nextSectionIsActive to true
      if (sectionPosition - headerPosition > headerHeight / 2 && !nextSectionIsActive) {
        nextSectionIsActive = true;
        link.parentNode.classList.remove('active');
      }
    });
    
    // if isActive is true, then add the active class to the link, if not then remove it
    if (isActive) {
      link.parentNode.classList.add('active');
    } else if (!nextSectionIsActive) {
      link.parentNode.classList.remove('active');
    }
  });
}

// Here i calling the function when loading the page and also when user scroll
activeLink();
window.addEventListener('scroll' , activeLink)

new Swiper ('.prices-slider');