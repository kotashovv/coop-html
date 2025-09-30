document.addEventListener('DOMContentLoaded', () => {


    const headerJs = document.querySelector('.header-js');
    if (headerJs) {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                headerJs.classList.add('sticky');
            } else {
                headerJs.classList.remove('sticky');
            }
        });
    }

    const tabHeads = document.querySelectorAll('[data-tabs] .item-head');


    if (tabHeads.length != 0) {
        const tabContents = document.querySelectorAll('.serv6__body .serv6__item');

        tabHeads.forEach((head, index) => {
            head.addEventListener("click", () => {

                tabHeads.forEach(h => h.classList.remove("active"));
                tabContents.forEach(c => c.classList.remove("active"));

                const contentIndex = index % 2;
                tabHeads.forEach((h, i) => {

                    if (i % 2 === contentIndex) h.classList.add("active");
                });
                tabContents[contentIndex].classList.add("active");
            });
        });
    }

    const callModalBtn = document.querySelector(".call-popup");
    if (callModalBtn) {
        const modal = document.querySelector('.case-popup');
        const popupItem = modal.querySelector('.case-popup__item');
        const closeBtn = modal.querySelector('.case-popup__btn-close');


        callModalBtn.addEventListener('click', (e) => {
            e.preventDefault();

            if (modal.classList.contains('active')) {
                closeModal();
            } else {
                openModal();
            }
        });


        function openModal() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }


        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }


        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                closeModal();
            });
        }


        modal.addEventListener('click', (e) => {

            if (!popupItem.contains(e.target)) {
                closeModal();
            }
        });


        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }




    const tabButtons = document.querySelectorAll('.techno__tab');
    if (tabButtons.length != 0) {
        const tabItems = document.querySelectorAll('.techno__tab-item');


        function switchTab(index) {

            tabButtons.forEach(button => button.classList.remove('active'));


            if (tabButtons[index]) {
                tabButtons[index].classList.add('active');
            }


            tabItems.forEach(item => {
                if (item.classList.contains('active')) {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.classList.remove('active');
                    }, 200);
                }
            });


            setTimeout(() => {
                if (tabItems[index]) {
                    tabItems[index].classList.add('active');
                    tabItems[index].style.opacity = '0';

                    setTimeout(() => {
                        tabItems[index].style.opacity = '1';
                    }, 10);
                }
            }, 200);
        }


        tabButtons.forEach((button, index) => {
            button.addEventListener('click', function () {
                switchTab(index);
            });
        });


        tabItems.forEach(item => {
            item.style.transition = 'opacity 0.2s ease-in-out';
            item.style.opacity = '0';
        });


        setTimeout(() => {
            if (tabItems[0]) {
                tabItems[0].classList.add('active');
                tabItems[0].style.opacity = '1';
            }
            if (tabButtons[0]) {
                tabButtons[0].classList.add('active');
            }
        }, 100);
    }



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


