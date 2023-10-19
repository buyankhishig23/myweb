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
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.transform = 'scale(' + Math.random() + ')';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);
