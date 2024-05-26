import "./app.css";

// MenuBurger et le sticky

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


// let sidenav = document.getElementById("mySidenav");
// let openBtn = document.getElementById("openBtn");
// let closeBtn = document.getElementById("closeBtn");
//
// openBtn.onclick = openNav;
// closeBtn.onclick = closeNav;
//
// /* Set the width of the side navigation to 250px */
// function openNav() {
//     sidenav.classList.add("active");
// }
//
// /* Set the width of the side navigation to 0 */
// function closeNav() {
//     sidenav.classList.remove("active");
// }

// div star

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

//carrousel

document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let items = carousel.querySelectorAll(".item");
    let dotsContainer = document.querySelector(".dots");
    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");

    // Insert dots into the DOM
    items.forEach((_, index) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    let dots = document.querySelectorAll(".dot");

    // Function to show a specific item
    function showItem(index) {
        items.forEach((item, idx) => {
            item.classList.remove("active");
            dots[idx].classList.remove("active");
            if (idx === index) {
                item.classList.add("active");
                dots[idx].classList.add("active");
            }
        });
        updateButtons(index);
    }

    // Function to update button visibility and position
    function updateButtons(index) {
        if (index === 0) {
            prevButton.classList.add("hidden", "hidden-prev");
        } else {
            prevButton.classList.remove("hidden", "hidden-prev");
        }

        if (index === items.length - 1) {
            nextButton.classList.add("hidden", "hidden-next");
        } else {
            nextButton.classList.remove("hidden", "hidden-next");
        }
    }

    // Event listeners for buttons
    prevButton.addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains("active")
        );
        showItem((index - 1 + items.length) % items.length);
    });

    nextButton.addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains("active")
        );
        showItem((index + 1) % items.length);
    });

    // Initial state
    updateButtons(0);

    // Uncomment if dots are used for navigation
    // dots.forEach((dot) => {
    //     dot.addEventListener("click", () => {
    //         let index = parseInt(dot.dataset.index);
    //         showItem(index);
    //     });
    // });
});

/// image select

// image totototte avec la souris

let isDragging = false;

function onMouseMove(e) {
    if (!isDragging) return;

    const image = document.getElementById('follow-image');
    const container = document.querySelector('.block5');

    // Calcul de la position relative de la souris ou du toucher dans le conteneur
    const rect = container.getBoundingClientRect();
    const mouseX = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;

    // Définit les limites pour la position left
    const minLeft = -650;
    const maxLeft = 50;

    // Calcule la nouvelle position de l'image sur l'axe X (de droite à gauche)
    const containerWidth = rect.width;
    const imageWidth = image.offsetWidth;

    // Calcule la nouvelle position en pourcentage pour rendre le mouvement fluide
    let newPosX = (1 - (mouseX / containerWidth)) * (containerWidth - imageWidth);

    // Applique les limites
    if (newPosX < minLeft) {
        newPosX = minLeft;
    } else if (newPosX > maxLeft) {
        newPosX = maxLeft;
    }

    // Met à jour la position de l'image
    image.style.left = `${newPosX}px`;
}

document.addEventListener('mousedown', function(e) {
    const image = document.getElementById('follow-image');

    if (e.target === image) {
        isDragging = true;
        document.addEventListener('mousemove', onMouseMove);
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
});

document.addEventListener('touchstart', function(e) {
    const image = document.getElementById('follow-image');

    if (e.target === image) {
        isDragging = true;
        document.addEventListener('touchmove', onMouseMove);
    }
});

document.addEventListener('touchend', function() {
    isDragging = false;
    document.removeEventListener('touchmove', onMouseMove);
});




