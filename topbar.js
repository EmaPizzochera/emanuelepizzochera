// JavaScript to inject the top bar into the page
document.addEventListener("DOMContentLoaded", function() {
    // Create the top bar container
    const topBar = document.createElement("div");
    topBar.className = "top-bar";
    topBar.innerHTML = `
        <div class="name">Emanuele Pizzochera</div>
        <div class="topnav">
            <a href="/emanuelepizzochera/index.html">Home</a>
            <a href="/emanuelepizzochera/cv.html">CV</a>
            <a href="#research">Research</a>
            <a href="#teaching">Teaching</a>
            <a href="/emanuelepizzochera/contact.html">Contacts</a>
        </div>
    `;
    
    // Insert the top bar at the beginning of the body to ensure it scrolls with content
    document.body.prepend(topBar);
    
    // Optional: Automatically highlight the current page link
    document.querySelectorAll('.topnav a').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});
