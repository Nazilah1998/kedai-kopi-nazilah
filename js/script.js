const navbarNav = document.querySelector('.navbar-nav');

/*  Ketika Hamburger di Klik */

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

/*  Klik di Luar slidebar untuk menghilangkan Navbar */

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


