//const slider = document.querySelector('.slider1');//document.querySelector('.slider');
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prevButton');
const nextbutton = document.querySelector('.nextButton');
//const slides = Array.from(slider.querySelectorAll('.block_s1'));//slider.querySelectorAll('img'));
const slides = Array.from(slider.querySelectorAll('.blocks2'));//slider.querySelectorAll('img'));

const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPrevSlide);
nextbutton.addEventListener('click', showNextSlide);

function showPrevSlide() {
   slideIndex = (slideIndex - 1 + slideCount) % slideCount;
   updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
 }

 function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } 
        else {
            slide.style.display = 'none';
        }
    });
 }

 updateSlider();
//=======================================================================================================

const slider1 = document.querySelector('.slider1');
const prevButton1 = document.querySelector('.prevButton1');
const nextbutton1 = document.querySelector('.nextButton1');
const slides1 = Array.from(slider1.querySelectorAll('.block_s1'));

const slideCount1 = slides1.length;
let slideIndex1 = 0;

prevButton1.addEventListener('click', showPrevSlide1);
nextbutton1.addEventListener('click', showNextSlide1);

function showPrevSlide1() {
    slideIndex1 = (slideIndex1 - 1 + slideCount1) % slideCount1;
    updateSlider1();
}

function showNextSlide1() {
    slideIndex1 = (slideIndex1 + 1) % slideCount1;
    updateSlider1();
}

function updateSlider1() {
    slides1.forEach((slide, index) => {
        if (index === slideIndex1) {
            slide.style.display = 'block';
        }
        else {
            slide.style.display = 'none';
        }
    });
}

updateSlider1();
