const mobileMenu = document.querySelector('.header-hamburger-menu-container');
const mobileMenuDrawer = document.querySelector('.header-mobile');
const mobileNavbar = document.querySelector('.header-mobile-navbar');

function toggleMobileMenu() {
    // Toggle the width of the mobile menu drawer (If 0, it's 70%. If 70%, it's 0%)
    mobileMenuDrawer.style.width = mobileMenuDrawer.style.width === '0%' ? '70%' : '0%';

    if (mobileNavbar.style.display === 'none') {
        setTimeout(() => {
            mobileNavbar.style.display = 'flex';
        }, 220);
    } else {
        setTimeout(() => {
            mobileNavbar.style.display = 'none';
        }, 70);
    }
}

function closeMenuOnClickOutside(event) {
    const isClickInsideMenu = mobileMenuDrawer.contains(event.target) || mobileMenu.contains(event.target);
    
    if (!isClickInsideMenu && mobileMenuDrawer.style.width === '70%') {
        mobileMenuDrawer.style.width = '0%';
        setTimeout(() => {
            mobileNavbar.style.display = 'none';
        }, 100);
    }
}

document.addEventListener('click', closeMenuOnClickOutside);
mobileMenu.addEventListener('click', toggleMobileMenu);
