window.addEventListener('scroll', function() {
    const hiddenStar = document.getElementById('hiddenStar');
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 7200) { // Adjust this value based on when you want the div to appear
        hiddenStar.classList.add('show');
    }
    // else {
    //     hiddenStar.classList.remove('show');
    // }
});