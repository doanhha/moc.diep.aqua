new Swiper('.card-wrapper', {
  speed: 800,
  grabCursor: true,
  spaceBetween: 20,

  // Căn giữa đúng cho nhiều slide
  slidesPerView: 3,              // giá trị mặc định (trên desktop)
  centeredSlides: true,
  centeredSlidesBounds: true,     // 🔑 giúp căn giữa “đều 2 bên”

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  breakpoints: {
    0:    { slidesPerView: 1 },
    768:  { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});


