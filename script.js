document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    setInterval(function() {
        slides[currentSlide].style.opacity = '0';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = '1';
    }, 3000);

    // Dynamic greeting based on time of day
    const greetingElement = document.getElementById('dynamicGreeting');
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        greetingElement.textContent = "Good Morning! Welcome to my portfolio.";
    } else if (currentHour < 18) {
        greetingElement.textContent = "Good Afternoon! Welcome to my portfolio.";
    } else {
        greetingElement.textContent = "Good Evening! Welcome to my portfolio.";
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (rest of the existing JS code) ...

    const toggleDetailsBtn = document.getElementById('toggleDetails');
    const detailedInfo = document.querySelector('.detailed-info');

    toggleDetailsBtn.addEventListener('click', function() {
        if (detailedInfo.style.display === 'none') {
            detailedInfo.style.display = 'block';
            toggleDetailsBtn.textContent = 'Read Less';
        } else {
            detailedInfo.style.display = 'none';
            toggleDetailsBtn.textContent = 'Read More';
        }
    });
});
