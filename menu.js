document.addEventListener("DOMContentLoaded", function () {
    fetch("menu.html") // Load the menu
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-container").innerHTML = data;

            // Add event listener for menu toggle
            document.getElementById("menuToggle").addEventListener("click", function () {
                document.getElementById("menu").classList.toggle("active");
            });

            // Close menu when clicking outside
            document.addEventListener("click", function (event) {
                const menu = document.getElementById("menu");
                const menuToggle = document.getElementById("menuToggle");

                if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                    menu.classList.remove("active");
                }
            });
        });
});
