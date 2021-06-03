// =include components/player.js
let sidebarBurger = document.querySelector('.header__nav_burger')
    let headerNav = document.querySelector('.header__nav-list')
    window.addEventListener('click', e => {
        if (e.target == sidebarBurger || (e.target !== headerNav && sidebarBurger !== e.target && headerNav.classList.contains('header__nav-list--active'))){
            headerNav.classList.toggle('header__nav-list--active')
        }
    })
