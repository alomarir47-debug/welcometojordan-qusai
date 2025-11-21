document.addEventListener("DOMContentLoaded", () => {

    const title = document.getElementById("title");
    const startBtn = document.getElementById("startBtn");
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const prev = document.querySelector('.arrow-left');
    const next = document.querySelector('.arrow-right');

    // --- حركة كلمة JORDAN ---
    let opacity = 0;
    let pos = 50;
    let titleAnim = setInterval(() => {
        opacity += 0.03;
        pos -= 1;
        title.style.opacity = opacity;
        title.style.transform = `translateY(${pos}px) scale(${1 + opacity * 0.05})`;
        if (opacity >= 1) clearInterval(titleAnim);
    }, 20);

    // --- حركة زر ابدأ ---
    let btnOpacity = 0;
    let btnPos = 30;
    setTimeout(() => {
        let btnAnim = setInterval(() => {
            btnOpacity += 0.04;
            btnPos -= 1;
            startBtn.style.opacity = btnOpacity;
            startBtn.style.transform = `translateY(${btnPos}px)`;
            if (btnOpacity >= 1) clearInterval(btnAnim);
        }, 18);
    }, 1200);

    // --- Hover على الزر ---
    startBtn.addEventListener("mouseover", () => {
        startBtn.style.backgroundColor = "#d4af7f";
        startBtn.style.boxShadow = "0 0 15px 3px rgba(212,175,127,0.6)";
    });
    startBtn.addEventListener("mouseout", () => {
        startBtn.style.backgroundColor = "#b38b6d";
        startBtn.style.boxShadow = "none";
    });

    // --- عند الضغط على الزر ---
    startBtn.addEventListener("click", () => {
        startBtn.classList.add("active");
        setTimeout(() => {
            window.location.href = "page1.html";
        }, 300);
    });

    // --- Slider مستمر ودائري بالـ pixels ---
    if(sliderWrapper) {
        const slides = sliderWrapper.querySelectorAll('.slide');
        // نسخ الصور لمضاعفة العدد للسلاسة
        sliderWrapper.innerHTML += sliderWrapper.innerHTML;
        const allSlides = sliderWrapper.querySelectorAll('.slide');
        let x = 0;
        const speed = 0.5; // تعديل السرعة حسب الحاجة

        function animateSlider() {
            x -= speed;
            const totalWidth = slides.length * (300 + 10); // عرض كل صورة + margin
            if(x <= -totalWidth){
                x = 0;
            }
            sliderWrapper.style.transform = `translateX(${x}px)`;
            requestAnimationFrame(animateSlider);
        }
        animateSlider();

        // الأسهم للتنقل اليدوي
        prev.addEventListener('click', () => {
            x += 310; // عرض صورة + margin
        });
        next.addEventListener('click', () => {
            x -= 310;
        });
    }
});
