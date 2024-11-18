
// Load content dynamically
function loadPage(page) {
    const content = document.getElementById('content');
    
    // Example content for different pages
    const pages = {
        websites: `
            <h2>My Websites</h2>
            <p>Here are some of the websites I have developed.</p>
            <!-- Add more content about websites -->
        `,
        projects: `
            <h2>My Projects</h2>
            <p>Details about my projects will go here.</p>
            <!-- Add project details -->
        `,
        about: `
            <h2>About Me</h2>
            <p>I'm Manuel, a freelance Discord Bot Developer...</p>
        `,
        contact: `
            <h2>Contact Me</h2>
            <p>Contact me through <a href="https://discord.com/users/639162871271653436" target="_blank">Discord</a>!</p>
        `
    };

    // Load the corresponding page content
    content.innerHTML = pages[page];
}

// Show the image in the lightbox
function showImage(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = src;
    lightbox.style.display = "flex";
}

// Close the lightbox
function closeImage() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

