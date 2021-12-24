// .scroll-minimized is a class used to apply header-minimized to a navbar
const headers = document.getElementsByTagName("header");
if (headers[0].classList.contains('scroll-minimized')) {
    window.addEventListener('scroll', () => {
        const Scroll = window.scrollY
        if (Scroll > 0) {
            // Consider first element in array is obviously the first header
            headers[0].classList.add('header-minimized')
        } else {
            headers[0].classList.remove('header-minimized')
        }
    })
}