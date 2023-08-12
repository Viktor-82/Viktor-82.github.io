const swiper = new Swiper('.tc-swiper', {
    /* Важно! Если в настройках slidesPerView: 3 а в верстке всего 3 слайда то слайдер работать не будет и стрелки
    * навигации не появятся. Нужно поставить на один слайд больше чем в настройках */
    observer: true,
    observerParents: true,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 1000px
        1000: {
            slidesPerView: 3,
            spaceBetween: 31
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 55
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.tc-swiper-button-next',
        prevEl: '.tc-swiper-button-prev',
    },
    // If we need pagination
    pagination: {
        el: '.tc-swiper-pagination',
        clickable: true,
    },
});

const swiper2 = new Swiper('.mk-swiper', {
    observer: true,
    observerParents: true,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 1000px
        1000: {
            slidesPerView: 2,
            spaceBetween: 31
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 2,
            spaceBetween: 153
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.mk-swiper-button-next',
        prevEl: '.mk-swiper-button-prev',
    },
    // If we need pagination
    pagination: {
        el: '.mk-swiper-pagination',
        clickable: true,
    },
});

const swiper3 = new Swiper('.act-swiper', {
    observer: true,
    observerParents: true,
    slidesPerView: 3,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
        nextEl: '.act-swiper-button-next',
        prevEl: '.act-swiper-button-prev',
    },
    // If we need pagination
    pagination: {
        el: '.act-swiper-pagination',
        clickable: true,
    },
});

const swiper4 = new Swiper('.course-swiper', {
    observer: true,
    observerParents: true,
    slidesPerView: 3.5,
    spaceBetween: 48,
    centerSlides: true,
    loop: true,
    initialSlide: 1,

    pagination: {
        el: '.course-swiper-pagination',
        clickable: true,
    },
});