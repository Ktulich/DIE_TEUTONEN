$(document).ready(function() {

// Кнопка в начало страницы

const backTopBtn = document.querySelector('.backtop-arrow a');
const backTopBtnText = document.querySelector('.backtop-arrow .backtop-arrow__text')

backTopBtn.classList.add('none');
backTopBtn.style.opacity = 0.5;

    // Скрытие кнопки при скролле выше 500px

    document.addEventListener('scroll', function () {
        if(window.pageYOffset > 500){
            backTopBtn.classList.remove('none');
        }else{
            backTopBtn.classList.add('none');
        }
    });
    
// Подсказка при наведении
    
backTopBtn.addEventListener('mouseover', function () {
    backTopBtnText.classList.remove('visually-hidden-text');
    backTopBtn.style.opacity = 1;
})
    
backTopBtn.addEventListener('mouseout', function () {
    backTopBtnText.classList.add('visually-hidden-text');
    backTopBtn.style.opacity = 0.5;
})

// Тень у хеадера при скролле

const headerTop = document.querySelector('.header__top');

    // Появление тени при скролле ниже px

    document.addEventListener('scroll', function () {
        if(window.pageYOffset > 100){
            headerTop.classList.add('shadow');
        }else{
            headerTop.classList.remove('shadow');
        }
    });

// Текст при наведении на карточку на странице китов

const kitCardEl = document.querySelectorAll('.kit-card__el');

const blurKitCardImg = document.querySelector('.kit-card__img');
const hoverTextKitCardImg = document.querySelector('.kit-card__img-hovertext');


    // Появление и исчезновение текста

    kitCardEl.forEach(function (item) {

        item.addEventListener('mouseenter', function () {
            blurKitCardImg.style.filter = "blur(3px)";
            hoverTextKitCardImg.style.opacity = 1;
        });
        
        item.addEventListener('mouseleave', function () {
            blurKitCardImg.style.filter = "blur(0px)";
            hoverTextKitCardImg.style.opacity = 0;
        });
        
    })

});

// Аккордеон - Левое меню

    // LVL1
    // const accordeonLvl1 = document.querySelectorAll('[data-name="accordeon-lvl1"]');

    // accordeonLvl1.forEach((item) => {
    //         item.addEventListener('click', () => {
    //             let accordeonLvl2 = item.querySelectorAll('.left-menu__lvl2');

    //             if (accordeonLvl2.style.maxHeight) {
    //                 document.querySelectorAll('.left-menu__lvl2').forEach((item) => item.style.maxHeight = null);
    //             } else {
    //                 document.querySelectorAll('.left-menu__lvl2').forEach((item) => item.style.maxHeight = null);
    //                 accordeonLvl2.style.maxHeight = accordeonLvl2.scrollHeight + 'px';
    //             }
    //         });
    //     })

    document.addEventListener('DOMContentLoaded', () => {
        const leftMenuWr = document.querySelectorAll('.left-menu__wrapper');

        leftMenuWr.forEach(el => {
            el.addEventListener('click', (e) => {
                const self = e.currentTarget;
                const selfAccordeonLvl1 = self.querySelector('[data-name="accordeon-lvl1"]');
                const selfAccordeonLvl2 = self.querySelector('[data-name="accordeon-lvl2"]');

                self.classList.toggle('accordeon-open');

                if (self.classList.contains('accordeon-open')) {
                    selfAccordeonLvl2.style.maxHeight = selfAccordeonLvl2.scrollHeight + 'px';
                } else {
                    selfAccordeonLvl2.style.maxHeight = null;
                }
            })
        })
    })