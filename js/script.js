// Togle class active

const navbarNav = document.querySelector('.navbar-nav');


// Ketika Hamburger-Menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
    return console.log('OK')
};


// remove sidebar
const sidebar = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});