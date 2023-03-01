//Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
//ketika menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Click di luar sidebar untuk menghilangkan nav 
const menu = documen.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.constains(e.target) && !navbarNav.constains(e.target)) {
        navbarNav.classList.remove('active');
    }
});