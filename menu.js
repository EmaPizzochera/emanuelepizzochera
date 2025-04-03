document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html")
        .then(response => response.text())
        .then(data => {
            const menuContainer = document.getElementById("menu-container");
            if (!menuContainer) return;
            
            menuContainer.innerHTML = data;

            const menu = document.getElementById("menu");
            const menuToggle = document.getElementById("menuToggle");

            if (!menu || !menuToggle) return;

            // Toggle menu on button click
            menuToggle.addEventListener("click", function (event) {
                event.stopPropagation();
                menu.classList.toggle("active");
            });

            // Close menu when clicking outside
            document.addEventListener("click", function (event) {
                if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                    menu.classList.remove("active");
                }
            });
        })
        .catch(error => console.error("Error loading menu:", error));
});
