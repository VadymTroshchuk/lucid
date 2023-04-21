






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


function smoothScrollToTop() { // adjusting scroll speed when moving to top of the page after pressing submit button and all validation check is passed 
  const scrollStep = -window.scrollY / (50 / 15); 
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

