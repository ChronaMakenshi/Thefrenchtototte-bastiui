function animateLights() {
    const light1 = document.querySelector('.light');
    const light2 = document.querySelector('.light2');

    // Function to reset animation class
    function resetAnimation() {
        light1.classList.remove('animate');
        light2.classList.remove('animate');
        void light1.offsetWidth; // Trigger reflow to restart animation
        void light2.offsetWidth; // Trigger reflow to restart animation
        light1.classList.add('animate');
        light2.classList.add('animate');
    }

    // Initial call to start animation
    resetAnimation();

    // Repeat animation every 5 minutes (300000 milliseconds)
    setInterval(resetAnimation, 300000);
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', animateLights);