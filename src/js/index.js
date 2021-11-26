@@include('slick.min.js');

// testWebP----------------------------------
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {  
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

// ibg---------------------------------------
function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

window.onload = function () {
  document.addEventListener('click', documentActions);

  function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.classList.contains('search-form__icon')) {
      document.querySelector('.search-form').classList.toggle('active');
    } else if (!targetElement.closest('.search-form') && document.querySelector('.search-form.active')) {
      document.querySelector('.search-form').classList.remove('active');
    }

    if (targetElement.classList.contains('menu__icon')) {
      document.querySelector('.menu__icon').classList.toggle('active');
      document.querySelector('.menu__body').classList.toggle('active');
      document.querySelector('body').classList.toggle('lock');
    }

    if (targetElement.classList.contains('modal-link')) {
      e.preventDefault();
      document.querySelector('.modal').classList.add('open');
    }

    if (targetElement.classList.contains('modal__close') || targetElement.classList.contains('modal')) {
      document.querySelector('.modal').classList.remove('open');
    }
  }

  const form = document.querySelector('.form__body');
  form.addEventListener('submit', formSend);

  function formSend(e) {
    e.preventDefault();

    let errorCount = formValidate(form);

    if (errorCount === 0) {
      document.querySelector('.error-span').remove();
    } else {
      if (document.querySelector('.error-span')) {
        return;
      }

      const errorSpan = document.createElement('span');
      errorSpan.classList.add('error-span');
      errorSpan.innerText = 'Заполните обязательные поля';
      errorSpan.style.color = 'red';
      errorSpan.style.display = 'block';
      errorSpan.style.margin = '0px 5px';
      errorSpan.style.padding = '5px 0px';
      errorSpan.style.textAlign = 'center';

      form.appendChild(errorSpan);
    }
  }

  function formValidate(form) {
    let errorCount = 0;
    let formReq = document.querySelectorAll('.req');

    formReq.forEach((input) => {
      formRemoveError(input);
      if (input.value === '') {
        formAddError(input);
        errorCount++;
      }
    })

    return errorCount;
  }

  function formAddError(input) {
    input.parentElement.classList.add('error');
    input.classList.add('error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
  }
}

$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 300,
    easing: 'linear',
    infinite: false,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    slidesPerRow: 1,
    vertical: false,
    verticalSwiping: false,
    fade: false,
    // asNavFor: 'sliderClass',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
    mobileFirst: false,
    // appendArrows: $('.blockClass'),
    // appendDots: $('.blockClass'),
  });
});
