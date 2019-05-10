window.onload = (function(){

    const introductionSection = document.querySelector('.introduction-section');
    const scrollButton = document.querySelector('.scroll-button');

    if(scrollButton && window.scrollTo) {
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: introductionSection.offsetTop,
                behavior: 'smooth'
            });
        });
    }


    const AdvantagesCarousel = new Swiper('.advantages-section__carousel', {
        slidesPerView: 3,
        spaceBetween: 62,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

})();