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
        greetingElement.textContent = "Өглөөний мэнд миний веб хуудсанд тавтай морил.";
    } else if (currentHour < 18) {
        greetingElement.textContent = "Өдрийн мэнд миний веб хуудсанд тавтай морил.";
    } else {
        greetingElement.textContent = "Оройн мэнд миний веб хуудсанд тавтай морил.";
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (rest of the existing JS code) ...

    const toggleDetailsBtn = document.getElementById('toggleDetails');
    const detailedInfo = document.querySelector('.detailed-info');

    toggleDetailsBtn.addEventListener('click', function() {
        if (detailedInfo.style.display === 'none') {
            detailedInfo.style.display = 'block';
            toggleDetailsBtn.textContent = 'Хураах';
        } else {
            detailedInfo.style.display = 'none';
            toggleDetailsBtn.textContent = 'Дэлгэрэнгүй';
        }
    });
});
