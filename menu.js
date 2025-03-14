document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    menu.style.right = "-250px"; // Ensure it's hidden initially

    menuToggle.addEventListener("click", function () {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        } else {
            menu.classList.add("active");
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});
