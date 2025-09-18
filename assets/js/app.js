document.addEventListener('DOMContentLoaded', () => {

    const howSection = document.querySelector(".how");

    if (howSection) {
        const howItems = howSection.querySelectorAll(".how__item .num");
        if (howSection && howItems.length > 0) {
            let current = 0;

            setInterval(() => {
                howItems.forEach(el => el.classList.remove("active"));
                howItems[current].classList.add("active");
                current = (current + 1) % howItems.length;
            }, 2500);
        }
    }



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

    const casesSlider = new Swiper('.cases__items', {
        spaceBetween: 24,
        navigation: {
            prevEl: '.cases-btn-prev',
            nextEl: '.cases-btn-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2
            },
            560: {
                slidesPerView: 1.5
            },
            767: {
                slidesPerView: 1.5
            },
            920: {
                slidesPerView: 2.5
            },
            1200: {
                slidesPerView: 3,
            },
        }
    })


    const faqBtns = document.querySelectorAll('.faq__item button');

    if (faqBtns.length != 0) {
        faqBtns.forEach(item => {
            item.addEventListener('click', (e) => {
                let parent = e.target.closest('.faq__item');
                let text = parent.querySelector('.text');

                if (parent.classList.contains('active')) {
                    parent.classList.remove('active');
                    text.style.maxHeight = 0;
                } else {
                    faqBtns.forEach(item => {
                        item.closest('.faq__item').classList.remove('active');
                        item.nextElementSibling.style.maxHeight = 0;
                    })
                    parent.classList.add('active');
                    text.style.maxHeight = text.scrollHeight + 'px';
                }
            })
        })

        faqBtns[0].click();
    }
})


const dynamicAdaptive = new DynamicAdaptive('max');
dynamicAdaptive.init();


