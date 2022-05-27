// $(document).ready(function() {

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
    
    // const lMenu = document.querySelectorAll('.left-menu__block__wrapper');
    
    // lMenu.forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         const self = e.currentTarget;
    //         const selfAccordeonLvl1 = self.querySelector('[data-name="accordeon-lvl1"]');
    //         const selfAccordeonLvl21 = self.querySelector('[data-name="accordeon-lvl2-1"]');
    //         const selfAccordeonLvl22 = self.querySelector('[data-name="accordeon-lvl2-2"]');
    //         const selfAccordeonLvl23 = self.querySelector('[data-name="accordeon-lvl2-3"]');
            
    //         self.classList.toggle('accordeon-open');
            
    //         if (self.classList.contains('accordeon-open')) {
    //             selfAccordeonLvl21.style.maxHeight = selfAccordeonLvl21.scrollHeight + 'px';
    //             selfAccordeonLvl22.style.maxHeight = selfAccordeonLvl22.scrollHeight + 'px';
    //             selfAccordeonLvl23.style.maxHeight = selfAccordeonLvl23.scrollHeight + 'px';
    //         } else {
    //             selfAccordeonLvl21.style.maxHeight = null;
    //             selfAccordeonLvl22.style.maxHeight = null;
    //             selfAccordeonLvl23.style.maxHeight = null;
    //         }
    //     });
    // });


    // Правое меню

    // const rMenu = document.querySelectorAll('[data-name="accordeon-lvl3"]');

    // // rMenuInfo.classList.add('.none');
    // rMenu.forEach(el => {

    //     const rMenuOne = document.querySelector('[data-name="accordeon-lvl3"]');
    //     const rMenuInfo = document.querySelectorAll('.right-menu');

    //     el.addEventListener('click', (e) => {
            
    //         if(rMenuOne.classList.contains('g_36-a1')) {
    //             document.querySelector('.g_36-a1-i').classList.remove('none');
    //         } else {
    //             document.querySelector('.g_36-a1-i').classList.add('none');
    //         }

    //     });
        
    // });


    // Аккордеон левое меню 2 версия 
    // let headersAcc = ['.accordion h1','.accordion h2',' accordion h3'];

    // $('.accordion').click(function(e) {
    //     let targetAcc = e.target;
    //     let nameAcc = targetAcc.nodeName.toUpperCase();

    //     if($.inArray(nameAcc,headersAcc) > -1) {
    //         let subItemAcc = $(targetAcc).next();

    //         //slideUp all elements (except target) at current depth or greater
    //         let depthAcc = $(subItemAcc).parents().length;
    //         let allAtDepthAcc = $('.accordion div').filter(function() {
    //             if($(this).parents().length >= depthAcc && this !== subItemAcc.get(0)) {
    //                 return true;
    //             }
    //         });
    //         $(allAtDepthAcc).slideUp('fast');

    //         //slideToggle target content and adjust bottom border if necessary
    //         subItemAcc.slideToggle('fast',function() {
    //             $('.accordion:visible:last').css('border-radius','0 0 0 15px');
    //         });
    //         $(targetAcc).css({'border-bottom-right-radius':'0', 'border-bottom-left-radius':'0'});
    //     }
    // });

    var headers = ["H1","H2","H3","H4","H5","H6"];

    $(".accordion").click(function(e) {
    var target = e.target,
        name = target.nodeName.toUpperCase();
    
    if($.inArray(name,headers) > -1) {
        var subItem = $(target).next();
        
        //slideUp all elements (except target) at current depth or greater
        var depth = $(subItem).parents().length;
        var allAtDepth = $(".accordion p, .accordion div").filter(function() {
        if($(this).parents().length >= depth && this !== subItem.get(0)) {
            return true; 
        }
        });
        $(allAtDepth).slideUp("fast");
        
        //slideToggle target content and adjust bottom border if necessary
        subItem.slideToggle("fast",function() {
            $(".accordion :visible:last").css("border-radius","0 0 10px 10px");
        });
        $(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
    }
    });

// });