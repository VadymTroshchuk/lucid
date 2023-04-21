



const header = document.querySelector('.header');
window.addEventListener('scroll', () => {

  window.addEventListener('scroll', () => {
    // get the current scroll position
    const scrollPos = window.scrollY;
  console.log(scrollPos)
    // setting the background color of the header based on the scroll position
    if (scrollPos > 60) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // changing backround color
    } else {
      header.style.backgroundColor = ''; // remove the background color 
    }
  });

})

