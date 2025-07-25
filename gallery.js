    // Отримуємо модальне вікно
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    // Всі картинки
    const images = document.querySelectorAll(".image img");

    images.forEach((img) => {
        img.addEventListener("click", function () {
            modal.style.display = "block";
            modalImg.src = this.src.replace("_n.jpg", "_b.jpg"); // Можна адаптувати до розміру
        });
    });

    // Закрити модалку
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Закрити по кліку поза зображенням
    modal.onclick = function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    };