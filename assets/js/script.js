const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const sidebarClose = document.querySelector('.sidebar__close');

function openMenu() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('menu-open');
}

function closeMenu() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
}

hamburger.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

sidebarClose.addEventListener('click', closeMenu);

overlay.addEventListener('click', closeMenu);

document.querySelectorAll('.sidebar__link').forEach(link => {
    link.addEventListener('click', closeMenu);
});