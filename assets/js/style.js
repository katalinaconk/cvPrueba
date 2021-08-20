let carousel =
document.querySelector('.carousel');

function Scroll() {
    let ScrollTop =
    document.documentElement.scrollTop;
    carousel.style.transform =
    'trasnsLateY(' + scrollTop * -0.3 + 'px)';
}

window.addEventListener('scroll', scrollCarousel);