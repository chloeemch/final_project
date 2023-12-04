document.addEventListener('DOMContentLoaded', function () {
  // Initialize Swiper
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 40,
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navList = document.getElementById('nav-list');

  menuIcon.addEventListener('click', function () {
    navList.classList.toggle('show');
  });
});

