document.querySelectorAll(".product-category").forEach((category) => {
    category.addEventListener("click", () => {
        
        document.querySelectorAll(".product-category").forEach((item) => {
            item.classList.remove("active");
        });

        document.querySelectorAll(".content-selection").forEach((section) => {
            section.style.display = "none";
        });

        category.classList.add("active");
        const targetId = category.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = "grid";
        }
    });
});