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

        kitCardEl.forEach(item => {

            item.addEventListener('mouseenter', () => {
                blurKitCardImg.classList.add('kit-card__blur');
                hoverTextKitCardImg.style.opacity = 1;
            });
            
            item.addEventListener('mouseleave', () => {
                blurKitCardImg.classList.remove('kit-card__blur');
                hoverTextKitCardImg.style.opacity = 0;
            });
            
        });  
    
    // Аккордеон - Левое меню
    
    const leftMenuWr = document.querySelectorAll('.left-menu__block__wrapper');
    
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
        });
    });
});