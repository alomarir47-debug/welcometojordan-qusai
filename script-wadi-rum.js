document.addEventListener("DOMContentLoaded", () => {
    const backBtn = document.getElementById('backBtn');

    backBtn.addEventListener("click", () => {
        backBtn.classList.add("active");
        setTimeout(() => {
            window.location.href = 'page1.html'; // الانتقال مباشرة للصفحة الأولى
        }, 200);
    });
});
