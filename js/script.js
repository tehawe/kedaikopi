// Togle class active

const navbarNav = document.querySelector('.navbar-nav');


// Ketika Hamburger-Menu diklik
document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// togle class active cari form
const cari = document.querySelector('.cari');
const cariBox = document.querySelector('#cari-box');

document.querySelector('#btn-cari').onclick = (e) => {
    cari.classList.toggle('active');
    cariBox.focus();
    e.preventDefault();
};

// toggle class active keranjang
const keranjang = document.querySelector('.keranjang');

document.querySelector('#btn-keranjang').onclick = (e) => {
    keranjang.classList.toggle('active');
    e.preventDefault();
};

// remove elemen
const sidebar = document.querySelector('#hamburger-menu');
const btnCari = document.querySelector('#btn-cari');
const btnKeranjang = document.querySelector('#btn-keranjang');

document.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!btnCari.contains(e.target) && !cari.contains(e.target)) {
        cari.classList.remove('active');
    }

    if (!btnKeranjang.contains(e.target) && !keranjang.contains(e.target)) {
        keranjang.classList.remove('active');
    }
});
