document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');

    // Change background color on scroll
    window.addEventListener('scroll', function () {
        if (this.window.scrollY >50){
            navbar.computedStyleMap.backgroundColor = '#1e1e1e';
        } else {
            navbar.computedStyleMap.backgroundColor = '#333';
        }
    });
});