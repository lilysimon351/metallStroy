const workSlider = new Swiper('.work__slider', {
    loop: true,
    pagination: {
        el: '.work__pag',
        clickable: true
    },

    navigation: {
        nextEl: '.work__next',
        prevEl: '.work__prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    effect: 'fade',
});

const reviewSlider = new Swiper('.review__slider', {
    loop: true,

    pagination: {
        el: '.review__pag',
        clickable: true
    },

    navigation: {
        nextEl: '.review__next',
        prevEl: '.review__prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    effect: 'fade',
});
const gallerySlider = new Swiper('.gallery__slider', {
    loop: true,

    pagination: {
        el: '.gallery__pag',
        clickable: true
    },

    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
});

// YT
let videoCont = document.querySelector('.feedback__video');
videoCont.addEventListener("click", function() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.getAttribute('data-src') + "?rel=0&showinfo=0&autoplay=1");
    this.innerHTML = "";
    this.appendChild(iframe);
});

// popups
let popups = document.querySelectorAll('.open-popup'),
    overlay = document.querySelector('.popup-overlay');
if (popups) {
    popups.forEach(item => {
        item.addEventListener('click', (event) => {
            popupName = item.getAttribute('data-popup');
            event.preventDefault();
            overlay.classList.add('popup-overlay--opened');
            overlay.innerHTML = "";
            overlay.appendChild(document.querySelector(`.${popupName}`).cloneNode(true));
            overlay.querySelector('.popup__body').addEventListener('click', (event) => {
                if (event.target.className == 'popup__close') { closePopup() }
                event.stopPropagation();
            })
        })
    });

}
overlay.addEventListener('click', (event) => {
    closePopup()
})

function closePopup() {
    overlay.classList.remove('popup-overlay--opened');
    overlay.innerHTML = "";
}

// show mob menu
let hoverItems = ['.header__burger', '.header__nav', '.footer__burger', '.footer__nav', ]
hoverItems.forEach(item => {
    item = document.querySelector(item);
    if (item) {
        item.addEventListener('mouseenter', (event) => {
            showNav(item)
        })
        item.addEventListener('mouseleave', (event) => {
            showNav(item)
        })
    }

});

function showNav(elem) {
    elem.parentNode.querySelector('.nav').classList.toggle('nav--shown')
    elem.parentNode.querySelector('.burger').classList.toggle('burger--active')
}