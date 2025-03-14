document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");
    const menuToggle = document.getElementById("menuToggle");

    // Ensure menu toggle button is always visible
    menu.style.right = "-250px"; // Keep menu hidden initially
    menuToggle.style.right = "10px"; // Keep the button visible

    menuToggle.addEventListener("mouseover", function () {
        menu.classList.add("active");
        menu.style.right = "0"; // Move menu into view when hovering over toggle
    });

    menu.addEventListener("mouseleave", function () {
        menu.style.right = "-250px"; // Hide menu when mouse leaves
    });
});
