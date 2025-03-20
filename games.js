document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const totalSlides = slides.length;
  
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }
  
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
  
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
  
    // Event listeners for slider navigation buttons
    document.querySelector(".next-btn").addEventListener("click", () => {
        nextSlide();
    });
  
    document.querySelector(".prev-btn").addEventListener("click", () => {
        prevSlide();
    });
  
    // Auto-change slides every 5 seconds
    setInterval(nextSlide, 5000);
  
    // Initialize slider
    showSlide(currentSlide);
  });