let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) { 
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel"); 
  let dots = document.getElementsByClassName("punto"); 
  
  if (n > slides.length) {slideIndex = 1} 
