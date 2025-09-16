document.addEventListener('DOMContentLoaded', ()=>{
    const heroSlider = new Swiper('.hero__slider-swiper', {
        slidesPerView: 1.5,
        loop: true,
        centeredSlides: true,
        initialSlide: 1,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        
    })
})