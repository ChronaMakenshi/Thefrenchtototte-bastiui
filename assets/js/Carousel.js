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