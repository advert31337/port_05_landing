(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active')
        }else{
            header.classList.remove('header_active')
        }
    }
}());

// Burger handler

(function (){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const closeMenuItem = document.querySelector('.header__nav-closer')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active')
    });

    closeMenuItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active')
    })
}());