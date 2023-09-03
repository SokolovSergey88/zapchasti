const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoHeight: true,

  breakpoints: {
    320: {
    slidesPerView: 1,
    }
  },
  
  breakpoints: {
    899: {
    slidesPerView: 1,
    }
  },

  breakpoints: {
    1199: {
    slidesPerView: 2,
    }
  },

  speed: 800,


  spaceBetween: 10,

  loop: true,

  autoplay : {
    delay: 2000,
    disableOnInteraction: false
  }
});