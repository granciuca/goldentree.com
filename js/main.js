'use strict'


const swiperRev1 = new Swiper(".slide-rev-1", {

    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination-slide-rev-1",
    },
    breakpoints: {
      0:{
          slidesPerView: 1,
      },
      675:{
          slidesPerView: 2,
      },
      1025:{
          slidesPerView: 3,
      }
  }
  });


 let swiperThumb2 = new Swiper(".swiper-thumb2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
 let swiperThumb1 = new Swiper(".swiper-thumb1", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperThumb2,
    },
  });



function refDrop()
{
  const item = document.querySelectorAll('.reference');
  
  item.forEach(element => {
    const symb = element.querySelector('.ref-symb');
    element.addEventListener('click', () => {
      element.classList.toggle('active');
      symb.classList.toggle('active');
}, false)
  });
}
refDrop();


function showBlock(contentId) {
  const elements = Array.from(document.getElementsByClassName('usage-item'));
  for (const element of elements) {
    element.style.display = element.id === contentId ? 'block' : 'none';
  }
}
showBlock('1');


function usageBtn()
{
  const usageBtn = document.querySelectorAll('.usage');

  usageBtn.forEach(element => {
    element.addEventListener('click', () => {
      usageBtn.forEach(btn => btn.classList.remove('_active'));
      element.classList.add('_active');
    })
  });
}

usageBtn();


function reviewChangeBlock(){
  const checkbox = document.querySelector('.rev');
const userReviews =  document.querySelector('.reviews-user');
const userQuestion =  document.querySelector('.user-question');
const revForm =  document.querySelector('.rev-form');
const questionForm =  document.querySelector('.question-form');
const qstForm =  document.querySelector('.qst-form');
const rvForm =  document.querySelector('.rv-form');

checkbox.addEventListener('click', () =>{
  if (checkbox.checked) {
    userReviews.classList.add('display-none');
    revForm.classList.add('display-none');
    qstForm.classList.add('display-none');
    rvForm.classList.add('display-none');
    questionForm.classList.remove('display-none');
    userQuestion.classList.remove('display-none');
    
  }else{
    userReviews.classList.remove('display-none');
    revForm.classList.remove('display-none');
    questionForm.classList.add('display-none');
    userQuestion.classList.add('display-none');
    qstForm.classList.add('display-none');
  }
})


revForm.addEventListener('click', () =>{
  if(!userReviews.classList.contains('display-none')){
    userReviews.classList.add('display-none');
    rvForm.classList.remove('display-none');
  }else{
    rvForm.classList.add('display-none');
    userReviews.classList.remove('display-none');
  }
})

questionForm.addEventListener('click', () =>{
  if(!userQuestion.classList.contains('display-none')){
    userQuestion.classList.add('display-none');
    qstForm.classList.remove('display-none');
  }else{
    qstForm.classList.add('display-none');
    userQuestion.classList.remove('display-none');
  }
})
}

reviewChangeBlock();