// Load content dynamically based on page selection
function loadPage(page) {
    const content = document.getElementById("content");

    const pages = {
        websites: `
            <h2>Websites I've Developed</h2>
            <p>Here are some examples of the websites I have worked on:</p>
            <!-- Add website details -->
        `,
        projects: `
            <h2>My Projects</h2>
            <p>Here is a collection of some notable projects I've completed:</p>
            <!-- Add project details -->
        `,
        about: `
            <h2>About Me</h2>
            <p>Hi, I'm Manuel. I specialize in Python and web development. With 5+ years of experience, I create innovative and tailored solutions for your needs.</p>
        `,
        contact: `
            <h2>Contact Me</h2>
            <p>Feel free to reach out through <a href="https://discord.com/users/639162871271653436" target="_blank">Discord</a>.</p>
        `
    };

    // Update content
    content.innerHTML = pages[page] || "<h2>Page not found</h2>";
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
