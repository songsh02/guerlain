document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav');
    var menuBtn = document.querySelector('.menu_button');
    var closeBtn = document.querySelector('.close_button');

    menuBtn.addEventListener('click', function() {
        nav.style.opacity = '1';
        nav.style.display = 'block';
        nav.style.transition = 'opacity 0.3s ease-out';
    });

    closeBtn.addEventListener('click', function() {
        nav.style.opacity = '0';
        setTimeout(function() {
            nav.style.display = 'none';
        }, 500); 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 24
    });
});
