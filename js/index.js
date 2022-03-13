function SelfAssessment() {
    console.log(
        '70/70 \n' +
        'Вёрстка +10\n' +
        'Кнопка Play/Pause на панели управления +10\n' +
        'Прогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка +10\n' +
        'При перемещении ползунка регулятора громкости звука можно сделать звук громче или тише. Разный цвет регулятора громкости звука до и после ползунка +10\n' +
        'При клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется, если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля +10\n' +
        'Кнопка Play/Pause в центре видео +10\n' +
        'Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\n'
    )
}

SelfAssessment();


//*****  Menu *****
const btnOpen = document.querySelector('.burg-menu');
const btnClose = document.querySelector('.close');
const menu = document.querySelector('.navbar-block');
const nav_links = document.querySelectorAll('.skill-link');

const listMenu = Array.from(document.querySelectorAll('.skill-item'));
const toggle = () => {
    menu.classList.toggle('is-open');
    btnOpen.classList.toggle('is-open');
    for (i = 0; i < listMenu.length; i++) {
        listMenu[i].addEventListener('click', toggle)
    };
};
btnOpen.addEventListener('click', toggle);

function closeMenu(clicklink) {
    if (clicklink.target.classList.contains('skill-link')) {
        menu.classList.remove('is-open');
        btnOpen.classList.remove('is-open');
    }
}
nav_links.forEach((el) => el.addEventListener('click', closeMenu));



//***** portfolio-images *****
const portfolioBtns = document.querySelector('.portfolio__buttons');
const portfolioImages = document.querySelectorAll('.portfolio__card');

portfolioBtns.addEventListener('click', changeImage);

function changeImage(event) {
    if (event.target.classList.contains('portfolio__button')) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    }
}

//***** preload-images *****

function preloadImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    seasons.forEach((e) => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${e}/${i}.jpg`;
        }
    })
}
preloadImages();

//***** active button portfolio *****
const portfolioBtn = document.querySelectorAll('.active__button');

portfolioBtn.forEach(function(elem) {
    elem.addEventListener('click', changeClassActive)
});

function changeClassActive(e) {
    for (let i = 0; i < portfolioBtn.length; i++) {
        portfolioBtn[i].classList.remove('active')
    }
    e.target.classList.add('active')
}


//*****  i18 *****

const i18Obj = {
    en: {
        skills: 'Skills',
        portfolio: 'Portfolio',
        video: 'Video',
        price: 'Price',
        contacts: 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        hire: 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        winter: 'Winter',
        spring: 'Spring',
        summer: 'Summer',
        autumn: 'Autumn',
        'price-sub-title-standart': 'Standard',
        'price-sub-title-premium': 'Premium',
        'price-sub-title-gold': 'Gold',
        'price-sub-title-standart-value': '500 $',
        'price-sub-title-premium-value': '700 $',
        'price-sub-title-gold-value': '1000 $',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        order: 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message',
        'placeholder-email': 'E-mail',
        'placeholder-phone': 'Phone',
        'placeholder-message': 'Message',
    },
    ru: {
        skills: 'Навыки',
        portfolio: 'Портфолио',
        video: 'Видео',
        price: 'Цены',
        contacts: 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        hire: 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        winter: 'Зима',
        spring: 'Весна',
        summer: 'Лето',
        autumn: 'Осень',
        'price-sub-title-standart': 'Стандарт',
        'price-sub-title-premium': 'Премиум',
        'price-sub-title-gold': 'Золотой',
        'price-sub-title-standart-value': '42000 ₽',
        'price-sub-title-premium-value': '56000 ₽',
        'price-sub-title-gold-value': '80000 ₽',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        order: 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить',
        'placeholder-email': 'Почта',
        'placeholder-phone': 'Телефон',
        'placeholder-message': 'Сообщение',
    },
};

//*****  translate *****

let languageEn = document.querySelector('.languageEn');
let languageRu = document.querySelector('.languageRu');


languageEn.addEventListener('click', () => getTranslate('en'));
languageRu.addEventListener('click', () => getTranslate('ru'));


function getTranslate(lang) {
    const text = document.querySelectorAll('[data-i18]');
    text.forEach((el) => {
        el.textContent = i18Obj[lang][el.getAttribute('data-i18')]
    })
    localStorage.setItem('lang', lang)
}


//*****  Theme *****

let themeBtn = document.querySelector('.change-theme-button');
const skills = document.querySelector('.skills');
const portfolio = document.querySelector('.portfolio');
const video = document.querySelector('.video');
const price = document.querySelector('.price');
const portfolioButton = document.querySelectorAll('.portfolio__button');
const line = document.querySelectorAll('.line');
const title = document.querySelector('.section-title');
let body = document.querySelector('body')
const navbarPanelOp = document.querySelector('.navbar-panel');
const burgMenuIsOpen = document.querySelector('.burg-menu.is-open');


themeBtn.addEventListener('click', () => changeTheme(themeArr, portfolioButton, theme))

const themeArr = [
    skills,
    portfolio,
    video,
    price,
    title,
    navbarPanelOp,

];

let theme = 'dark';

let changeTheme = (themeArr, portfolioButton) => {
    line.forEach((e) => {
        e.classList.toggle('light-themeHamburger')
    })
    themeArr.forEach((e) => {
        e.classList.toggle('light-theme');
    })
    portfolioButton.forEach((e) => {
        e.classList.toggle('lightPortfolioButton')
    })
    if (theme === 'dark') {
        theme = 'light'
    } else theme = 'dark'


    if (theme === 'dark') {
        body.style.backgroundColor = '#000';
    } else {
        body.style.backgroundColor = '#fff';
    }


}

function changeThemePic() {
    themeBtn.classList.toggle('sun-moon');
};
themeBtn.addEventListener('click', changeThemePic);

//*****  Local storage *****

function setLocalStorage() {
    localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('theme')) {
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            changeTheme(themeArr, portfolioButton);
        }
    }
    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        if (lang === 'en') {
            getTranslate('en')
        } else if (lang === 'ru') {
            getTranslate('ru')
        }
    }
}
window.addEventListener('load', getLocalStorage)


//*****   button  *****

const effectBtns = document.querySelectorAll('.button');
effectBtns.forEach((el) =>
    el.addEventListener('click', function(e) {
        const x = e.pageX;
        const y = e.pageY;
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;
        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';
        this.appendChild(circle);
        setTimeout(() => circle.remove(), 500);
    })
);