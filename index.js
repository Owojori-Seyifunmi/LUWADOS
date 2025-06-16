// TOGGLE NAVBAR

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const clicks = document.querySelectorAll(".click");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});



clicks.forEach(function(click){
  click.addEventListener("click", function () {
    links.classList.remove("show-links");
  });
})


// CAROUSEL SECTION START
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// CAROUSEL SECTION END


// FAQS SECTION START

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    const btn = question.querySelector('.btn');
    btn.addEventListener('click', function(){

        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
});
// FAQS SECTION END