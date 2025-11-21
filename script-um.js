document.addEventListener("DOMContentLoaded", () => {
    const backBtn = document.getElementById('backBtn');

    backBtn.addEventListener("click", () => {
        backBtn.classList.add("active");
        setTimeout(() => {
            window.location.href = 'page6.html'; // الانتقال مباشرة للصفحة الأولى
        }, 200);
    });
});
