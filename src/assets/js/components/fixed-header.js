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
