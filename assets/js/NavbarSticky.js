window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 600) {
        document.querySelector('.h1r').style.visibility= 'visible';
    } else {
        document.querySelector('.h1r').style.visibility= 'hidden';
    }
});

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 1000) {
        document.querySelector('.h1r').style.background= 'linear-gradient(180deg, rgba(250,246,243,1) 0%, rgba(250,246,243,0.5130427170868348) 50%, rgba(250,246,243,0) 100%)';
    }
});