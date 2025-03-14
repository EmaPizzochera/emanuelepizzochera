document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const menuToggle = document.getElementById("menuToggle");

    menuToggle.addEventListener("click", function () {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
        } else {
            menu.classList.add("active");

            // Reveal links with animation when menu opens
            setTimeout(() => {
                document.querySelectorAll(".menu a").forEach((link, index) => {
                    setTimeout(() => {
                        link.style.opacity = "1";
                        link.style.transform = "translateX(0)";
                    }, 100 * index); // Adds delay effect for each item
                });
            }, 100);
        }
    });

    // Close menu when clicking outside of menu
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");

            // Hide links immediately when menu closes
            document.querySelectorAll(".menu a").forEach((link) => {
                link.style.opacity = "0";
                link.style.transform = "translateX(20px)";
            });
        }
    });
});
