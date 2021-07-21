!(function(d){
  // CAROUSEL
  let slideName = "carousel-slide", 
      slides = d.getElementsByClassName(slideName), 
      totalSlides = slides.length,
      slide = 0,
      moving = true;

  function setSlideClasses(){
    slides[totalSlides - 1].classList.add('prev');
    slides[0].classList.add('active');
    slides[1].classList.add('nxt');
  }

  function setEventListeners(){
    let next = d.getElementsByClassName('next')[0],
        prev = d.getElementsByClassName('previous')[0];
    
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  function moveNext(){
    if (slide === (totalSlides-1)){
      slide = 0;
    } else {
      slide++;
    }
    console.log("I'm trying to slide forwards");
    moveCarouselTo(slide);
  }

  function movePrev() {
    if (slide === 0) {
      slide = (totalSlides - 1);
    } else {
      slide--; 
    }
    console.log("I'm trying to slide backwards");
    moveCarouselTo(slide);
  }

  function moveCarouselTo(slide){
    let newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;
    
    if ((totalSlides - 1) > 3) {
      // Checks and updates if the new slides are out of bounds
      if (newPrevious <= 0) {
        oldPrevious = (totalSlides - 1);
      } else if (newNext >= (totalSlides - 1)){
        oldNext = 0;
      }
      // Checks and updates if slide is at the beginning/end
      if (slide === 0) {
        newPrevious = (totalSlides - 1);
        oldPrevious = (totalSlides - 2);
        oldNext = (slide + 1);
      } else if (slide === (totalSlides -1)) {
        newPrevious = (slide - 1);
        newNext = 0;
        oldNext = 1;
      }

      slides[oldPrevious].className = slideName;
      slides[oldNext].className = slideName;
      // Add new classes
      slides[newPrevious].className = slideName + " prev";
      slides[slide].className = slideName + " active";
      slides[newNext].className = slideName + " nxt";

    }
  }

  function setSlideDots() {
    let dots = d.getElementsByClassName('.dots')[0];
    
  }
  function initCarousel() {
    setSlideClasses();
    setEventListeners();
    moving = false;
  }

  initCarousel();

  
  // FAQ TOGGLE
  let faq = document.getElementsByClassName('faq')[0];

  faq.addEventListener('click', function(event) {
    if (!event.target.matches('.plus')) return;

    let question =  event.target, 
        qa =  question.closest(".qa"),
        qas = faq.querySelectorAll(".qa");
    
    qas.forEach(answer => {
      if (answer == qa) return; 
      answer.classList.remove("show")
    });
    
    qa.classList.toggle("show");
    // qa.querySelector('.plus').classList.add('.minus');

  }, false);
  
}(document));