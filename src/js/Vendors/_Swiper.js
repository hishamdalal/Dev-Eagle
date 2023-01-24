// // core version + navigation, pagination modules:
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


//? More info: https://swiperjs.com/swiper-api , https://swiperjs.com/demos

export function Swiper_run() {


    // init Swiper:
    const swiper = new Swiper('.swiper', {
        // configure Swiper to use modules
        //modules: [Navigation, Pagination],

        // Optional parameters
        direction: 'horizontal',
        loop: true,
        //lazy: true,
        autoplay: {
            pauseOnMouseEnter: true,
            delay: 3000,
            disableOnInteraction: false,
        },
        grabCursor: true,
        spaceBetween: 30,
        //slidesPerView: 3,
        //slidesPerView: "auto",
        //slidesPerColumn: 2,
        //centeredSlides: true,
        //freeMode: true,
        //mousewheel: true,
        // keyboard: {
        //     enabled: true,
        // },
        //cssMode: true,
        // grid: {
        //     rows: 2,
        // },
        /* 
        //slidesPerGroup: 3,
        //loopFillGroupWithBlank: true,
        */

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
            //type: "progressbar",
            //type: "fraction",
            //   renderBullet: function (index, className) {
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            //   },

        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },

        // breakpoints: {
        //     640: {
        //         slidesPerView: 2,
        //         spaceBetween: 20,
        //     },
        //     768: {
        //         slidesPerView: 4,
        //         spaceBetween: 40,
        //     },
        //     1024: {
        //         slidesPerView: 5,
        //         spaceBetween: 50,
        //     },
        // },

    });

}