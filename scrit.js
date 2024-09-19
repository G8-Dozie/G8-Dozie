const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav")
const navLinks = document.querySelector("nav ul")

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
};

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.classList.add('bg-[#fff]', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme','dark:shadow/20' );
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border', 'dark:border-[#fff]/50', 'dark:hover-bg-transparent')
    } else {
        navBar.classList.remove('bg-[#fff]', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme','dark:shadow/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border', 'dark:border-[#fff]/50', 'dark:hover-bg-transparent')
    }
})

//--------------dark and light mood---------------------
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
function toggleTheme() {
    document.documentElement.classList.toggle('dark')

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light'
    }
}