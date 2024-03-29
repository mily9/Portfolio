/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
  linkWork.forEach(l=> l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
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

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true,

})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__social, .home__scroll`, {delay: 900, origin: 'bottom'})


/*=============== MULTILANGUAGE ===============*/


const selectedEnglish = document.getElementById("eng");
const selectedEspanol = document.getElementById("esp");
const selectedFrench = document.getElementById("fr");
const hidden = "display:none;";
const shown = "display:block;";

const allEnglishText = document.getElementsByClassName("eng");
const allEspanolText = document.getElementsByClassName("esp");
const allSlovakText = document.getElementsByClassName("fr");

//SHOW ALL ENGLISH TEXT
function showEnglishText() {
  for (element in allEnglishText) {
     allEnglishText[element].style = shown;
  }
  for (element in allEspanolText) {
    allEspanolText[element].style = hidden;
  }
  for (element in allSlovakText) {
    allSlovakText[element].style = hidden;
  }
}
//SHOW ALL SPANISH TEXT
function showSpanishText() {
  for (element in allEnglishText) {
    allEnglishText[element].style = hidden;
  }
  for (element in allEspanolText) {
    allEspanolText[element].style = shown;
  }
  for (element in allSlovakText) {
    allSlovakText[element].style = hidden;
  }
}
//SHOW ALL SLOVAK TEXT
function showSlovakText() {
  for (element in allEnglishText) {
    allEnglishText[element].style = hidden;
  }
  for (element in allEspanolText) {
    allEspanolText[element].style = hidden;
  }
  for (element in allSlovakText) {
    allSlovakText[element].style = shown;
  }
}

//ENGLISH-> ALL OTHERS SWITCHED OFF
selectedEnglish.addEventListener("click", () => {
  selectedEnglish.classList.add("langSelected");
  selectedEspanol.classList.remove("langSelected");
  selectedFrench.classList.remove("langSelected");
 
  showEnglishText();
});

//SPANISH-> ALL OTHERS SWITCHED OFF
selectedEspanol.addEventListener("click", () => {
  selectedEspanol.classList.add("langSelected");
  selectedEnglish.classList.remove("langSelected");
  selectedFrench.classList.remove("langSelected");
 
  showSpanishText();
});
 
//SLOVAK-> ALL OTHERS SWITCHED OFF
selectedFrench.addEventListener("click", () => {
  selectedFrench.classList.add("langSelected");
  selectedEspanol.classList.remove("langSelected");
  selectedEnglish.classList.remove("langSelected");
 
  showSlovakText();
});

//ENGLISH-> ALL OTHERS SWITCHED OFF
selectedEnglish.addEventListener("click", () => {
  selectedEnglish.classList.add("langSelected");
  selectedEspanol.classList.remove("langSelected");
  selectedFrench.classList.remove("langSelected");
 
  showEnglishText();
  localStorage.setItem("languageActive", "english");
});
 
//SPANISH-> ALL OTHERS SWITCHED OFF
selectedEspanol.addEventListener("click", () => {
  selectedEspanol.classList.add("langSelected");
  selectedEnglish.classList.remove("langSelected");
  selectedFrench.classList.remove("langSelected");
 
  showSpanishText();
  localStorage.setItem("languageActive", "espanol");
});

//SLOVAK-> ALL OTHERS SWITCHED OFF
selectedFrench.addEventListener("click", () => {
  selectedFrench.classList.add("langSelected");
  selectedEspanol.classList.remove("langSelected");
  selectedEnglish.classList.remove("langSelected");
 
  showSlovakText();
  localStorage.setItem("languageActive", "slovak");
});

//LOCAL STORAGE ADDON
switch (localStorage.getItem("languageActive")) {
 
  case "english":
    selectedEnglish.classList.add("langSelected");
    showEnglishText();
    break;

  case "espanol":
    selectedEspanol.classList.add("langSelected");
    showSpanishText();
    break;

  case "slovak":
    selectedFrench.classList.add("langSelected");
    //console.log("slovak on");
    showSlovakText();
    break;

  default:
    //default ENGLISH text shown, all others disabled
//default -> no local storage exists
    selectedEnglish.classList.add("langSelected");
    showEnglishText();
}
