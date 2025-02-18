// Define the toggleMenu function globally so it's accessible everywhere
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    // Handle the slideshow
    const slides = document.querySelectorAll(".slide");
    
    // Only proceed if slides are present on the page
    if (slides.length > 0) {
        let slideIndex = 0;

        // Function to show the slides
        function showSlides() {
            // Hide all slides
            slides.forEach(slide => slide.style.display = "none");

            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }
            slides[slideIndex - 1].style.display = "block";  // Show the current slide
        }

        // Function to move the slides forward or backward
        window.plusSlides = function(n) {
            slideIndex += n;

            // Ensure slideIndex stays within bounds
            if (slideIndex > slides.length) { slideIndex = 1; }
            if (slideIndex < 1) { slideIndex = slides.length; }

            // Show the corresponding slide
            slides.forEach(slide => slide.style.display = "none");
            slides[slideIndex - 1].style.display = "block";
        }

        // Show the first slide immediately
        showSlides();
        // Change slide every 3 seconds
        setInterval(showSlides, 3000);
    } else {
        console.log("No slideshow elements found on this page.");
    }

    // Rating functionality
    const stars = document.querySelectorAll('.star');
    let rating = 0;

    stars.forEach(star => {
        star.addEventListener('click', function() {
            rating = this.getAttribute('data-value');
            stars.forEach(s => s.classList.remove('selected'));
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('selected');
            }
        });
    });
});
