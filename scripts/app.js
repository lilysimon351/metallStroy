// collect gallery images
let slides = [],
    slidesWr = document.querySelectorAll('.kind-gal__slider .swiper-wrapper');
slidesWr.forEach(item => {
    slides.push(item.innerHTML)
})

// works slider
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

// reviews slider
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

// kinds images slider
const gallerySlider = new Swiper('.kind-gal__slider', {
    loop: true,

    pagination: {
        el: '.kind-gal__pag',
        clickable: true
    },

    navigation: {
        nextEl: '.kind-gal__next',
        prevEl: '.kind-gal__prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
});

// initilize popup kinds images slider
function initGalleries() {
    const thumbsSlider = new Swiper('.popup-overlay .kind__thumbs', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        freeMode: true,
        watchSlidesProgress: true,
        direction: 'vertical'
    });
    const popupGallerySlider = new Swiper('.popup-overlay .popup-gal__slider', {
        loop: true,

        pagination: {
            el: '.popup-overlay .popup-gal__pag',
            clickable: true
        },

        navigation: {
            nextEl: '.popup-overlay .popup-gal__next',
            prevEl: '.popup-overlay .popup-gal__prev',
        },
        slidesPerView: 1,
        spaceBetween: 0,
        thumbs: {
            swiper: thumbsSlider,
        },
    });
}

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
            event.preventDefault();
            makePopupFrom(item);
            overlay.querySelector('.popup__body').addEventListener('click', (event) => {
                if (event.target.className == 'popup__close') { closePopup() }
                event.stopPropagation();
            })

        })
    });

}
// make popup cont
function makePopupFrom(item) {
    let popupCont,
        popupName = item.getAttribute('data-popup');
    overlay.classList.add('popup-overlay--opened');
    overlay.innerHTML = "";
    popupCont = document.querySelector(`.${popupName}`).cloneNode(true);
    overlay.appendChild(popupCont);
    if (popupName == 'popup__gallery') {
        let parentItem = item.parentNode.parentNode;
        childIndex = Array.prototype.indexOf.call(parentItem.parentNode.children, parentItem);

        popupCont.querySelector('.kind__thumbs-wr').innerHTML = slides[childIndex];
        popupCont.querySelector('.popup-gal__slider-wr').innerHTML = slides[childIndex];
        popupCont.querySelector('.popup__gal-body').appendChild(item.parentNode.cloneNode(true));

        initGalleries();
        let popupBtn = popupCont.querySelector('.kind-popup__btn');
        popupBtn.addEventListener('click', (event) => {
            makePopupFrom(popupBtn);
        })
    }
}
// close popup
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