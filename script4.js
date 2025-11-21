document.addEventListener("DOMContentLoaded", () => {

    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prev = document.querySelector('.arrow-left');
    const next = document.querySelector('.arrow-right');
    const moveBtn = document.getElementById('moveBtn');
    const heroTitle = document.getElementById('heroTitle');

    // --- حركة العنوان مثل الصفحة الرئيسية ---
    let opacity = 0;
    let pos = 50;
    let scale = 0.95;

    let titleAnim = setInterval(() => {
        opacity += 0.03;
        pos -= 1;
        scale += 0.0009;
        heroTitle.style.opacity = opacity;
        heroTitle.style.transform = `translateY(${pos}px) scale(${scale})`;
        if(opacity >= 1) clearInterval(titleAnim);
    }, 20);

    // --- حركة الصور المستمرة ---
    if(sliderWrapper) {
        const slides = sliderWrapper.querySelectorAll('.slide');
        sliderWrapper.innerHTML += sliderWrapper.innerHTML; // تكرار الصور للسلاسة
        let x = 0;
        const speed = 0.5;

        function animateSlider() {
            x -= speed;
            const totalWidth = slides.length * (300 + 10);
            if(x <= -totalWidth) x = 0;
            sliderWrapper.style.transform = `translateX(${x}px)`;
            requestAnimationFrame(animateSlider);
        }
        animateSlider();

        // الأسهم للتنقل اليدوي
        prev.addEventListener('click', () => { x += 310; });
        next.addEventListener('click', () => { x -= 310; });
    }

    // --- زر الانتقال ---
    moveBtn.addEventListener("click", () => {
        moveBtn.classList.add("active");
        setTimeout(() => {
            window.location.href = 'nextpage.html';
        }, 300);
    });

});
