function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const modalViews =  document.querySelectorAll('.services_modal'),
      modalBtns =  document.querySelectorAll('.services_button'),
      modalClose =  document.querySelectorAll('.services_modal')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb,i) =>{
    mb.addEventListner('click', () =>{
        modal(i)
    })
})
modalClose.forEach((mc) =>{
    mc.addEventListner('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'


if (selectedTheme) {
 
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}


themeButton.addEventListener('click', () => {
    
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

function Func() {
    var name = "Hello! here i use clouser";
    function showName() {
        alert(name);
    }
    return showName;
}

var someFunc = Func();
someFunc();

//Mail Validation
var emailAddress = document.getElementById("mail");
var emailAddressValidation = function () {
  emailAddressValue = emailAddress.value.trim();
  validEmailAddress = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  emailAddressErr = document.getElementById("emailNametag");
  emailAddressErr.style.color = "red";
  if (emailAddressValue == "") {
    emailAddressErr.innerHTML = "Email Address is required";
  } else if (!validEmailAddress.test(emailAddressValue)) {
    emailAddressErr.innerHTML =
      "Email Address must be in valid formate with @ symbol";
  } else {
    emailAddressErr.innerHTML = "";
    return true;
  }
};

mail.oninput = function () {
  emailAddressValidation();
};

// Mobile Number Validation
var mobileNumber = document.getElementById("phone");

var mobileNumberValidation = function () {
  mobileNumberValue = mobileNumber.value.trim();
  validMobileNumber = /^[0-9]*$/;
  mobileNumberErr = document.getElementById("mobileTag");
    mobileNumberErr.style.color="red";
  if (mobileNumberValue == "") {
    mobileNumberErr.innerHTML = "Mobile Number is required";
  } else if (!validMobileNumber.test(mobileNumberValue)) {
    mobileNumberErr.innerHTML = "Mobile Number must be a number";
  } else if (mobileNumberValue.length != 10) {
    mobileNumberErr.innerHTML = "Mobile Number must have 10 digits";
  } else {
    mobileNumberErr.innerHTML = "";
    return true;
  }
};
phone.oninput = function () {
  mobileNumberValidation();
};