//форма
const agreeInput = document.getElementById('agree-input');
const emailInput = document.getElementById('email-input');
const nameInput = document.getElementById('name-input');

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(event) { 
    event.preventDefault(); 

    if (!agreeInput.checked) {
        agreeInput.style.outline = '1px solid red';
    } else {
        agreeInput.style.outline = 'none';
    }

    if (emailInput.value === '') {
        emailInput.style.outline = '1px solid red';
    } else {
        emailInput.style.outline = 'none';
    }

    if (nameInput.value === '') {
        nameInput.style.outline = '1px solid red';
    } else {
        nameInput.style.outline = 'none';
    }
});


//текущий год в футере
const yearValue = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
yearValue.textContent = currentYear


//header
document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY || window.pageYOffset;
    const headerHeight = header.offsetHeight;

    if (scrollPosition > headerHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});


//slider
document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.feedback__slider-wrapper');
    const slides = document.querySelectorAll('.feedback__slider-item');
    const prevButton = document.querySelector('.feedback__slider-button-prev');
    const nextButton = document.querySelector('.feedback__slider-button-next');
    const pagination = document.querySelector('.feedback__slider-pagination');
  
    let currentIndex = 0;
    const totalSlides = slides.length;
  
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => moveToSlide(i));
      pagination.appendChild(dot);
    }
    updatePagination();
  
    function moveToSlide(index) {
      currentIndex = index;
      updateSliderPosition();
      updatePagination();
    }
  
    function updateSliderPosition() {
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    function updatePagination() {
      const dots = document.querySelectorAll('.feedback__slider-pagination span');
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }
  
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
      updateSliderPosition();
      updatePagination();
    });
  
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
      updateSliderPosition();
      updatePagination();
    });
  });



