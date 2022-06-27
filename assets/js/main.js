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
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
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
$(document).ready(function(){
  var selector = '#translate';
  $(selector).on('click', function(e){
    e.preventDefault();
    startLang( $(this) );
  });
  var startLang = function(el){
    var el = $(el);
    var text = el.attr('data-text');
    var file = el.attr('data-file');
    file = file.split(',');
    text = text.split(',');
    var index = el.attr('data-index');
    if(index >= file.length){
      index = 0;
    }
    changeName(el, text[index]);
    changeIndex(el, index);
    loadLang(file[index]);
    $('html').attr('lang', file[index]);
  };

  var changeName = function(el, name){
    $(el).html( name );
  };

  var changeIndex = function(el, index){
    $(el).attr('data-index', ++index);
  };

  var loadLang = function(lang){
    var processLang = function(data){
      var arr = data.split('\n');
      for(var i in arr){
        if( lineValid(arr[i]) ){
          var obj = arr[i].split('=>');
          assignText(obj[0], obj[1]);
        }
      }
    };
    var assignText = function(key, value){
      $('[data-lang="'+key+'"]').each(function(){
        var attr = $(this).attr('data-destine');
        if(typeof attr !== 'undefined'){
          $(this).attr(attr, value);
        }else{
          $(this).html(value);
        }
      });
    };
    var lineValid = function(line){
      return (line.trim().length > 0);
    };
    $('.loading-lang').addClass('show');
    $.ajax({
      url: 'lang/'+lang+'.txt',
      error:function(){
        alert('No se cargó traducción');
      },
      success: function(data){
        $('.loading-lang').removeClass('show');
        processLang(data);
      }
    });
  };  
});