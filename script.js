document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.getElementById('carouselExample');
    
    // Bootstrap carousel initialization
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000,  // Auto-slide interval (2 seconds)
        wrap: true       // Makes the carousel loop infinitely
    });

    // Optional: Pause the carousel on hover
    carouselElement.addEventListener('mouseenter', () => {
        carousel.pause();
    });

    // Resume carousel when mouse leaves the carousel
    carouselElement.addEventListener('mouseleave', () => {
        carousel.cycle();
    });
});

document.getElementById("subscribe-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    alert("Thank you for subscribing!"); // Show alert when the form is submitted
});

