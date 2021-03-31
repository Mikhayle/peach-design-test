import '../scss/app.scss';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// init Swiper cards:
const cards = new Swiper(`.swiper-container--cards`, {
    loop: true,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,

        },
        1024: {
            slidesPerView: 3
        },
        1300: {
            allowTouchMove: false,
            slidesPerView: 4,
        }
    },
    pagination: {
        el: `.swiper-pagination--cards`
    }
});

// init Swiper gallery:
const gallery = new Swiper(`.swiper-container--gallery`, {
    spaceBetween: 30,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--gallery',
        prevEl: '.swiper-button-prev--gallery',
    },
    pagination: {
        el: `.swiper-pagination--gallery`,
        clickable: true
    },
});

// init Swiper team:
const team = new Swiper(`.swiper-container--team`, {
    spaceBetween: 30,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next--team',
        prevEl: '.swiper-button-prev--team',
    },
});