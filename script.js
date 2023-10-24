// JavaScript to toggle the mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function () {
            if (navList.style.display === 'block') {
                navList.style.display = 'none';
            } else {
                navList.style.display = 'block';
            }
        });
    }
});
