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
