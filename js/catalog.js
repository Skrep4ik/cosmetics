// Для кожного елемента з класом .product-category додаємо обробник події click
document.querySelectorAll(".product-category").forEach((category) => {
    category.addEventListener("click", () => {
        // При кліку на категорію, знімаємо клас "active" з усіх категорій
        document.querySelectorAll(".product-category").forEach((item) => {
            item.classList.remove("active");
        });

        // Сховуємо всі секції контенту
        document.querySelectorAll(".content-section").forEach((section) => {
            section.style.display = "none";
        });

        // Додаємо клас "active" до категорії, на яку було натиснуто
        category.classList.add("active");

        // Отримуємо значення атрибута "data-target" цієї категорії
        const targetId = category.getAttribute("data-target");
        // Знаходимо секцію контенту за id, отриманим з атрибута "data-target"
        const targetSection = document.getElementById(targetId);

        // Якщо секція з таким id існує, відображаємо її
        if (targetSection) {
            targetSection.style.display = "grid"; // Показуємо секцію як grid
        }
    });
});