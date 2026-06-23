/* =========================
   LIGHTBOX
========================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.querySelector(".lightbox-close");

document.querySelectorAll(".zoomable").forEach(img => {

  img.addEventListener("click", () => {

    lightboxImage.src = img.src;
    lightbox.classList.add("active");

  });

});

closeLightbox.addEventListener("click", () => {

  lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

  if (e.target === lightbox) {

    lightbox.classList.remove("active");

  }

});

document.addEventListener("keydown", (event) => {

  if (
    event.key === "Escape" &&
    lightbox.classList.contains("active")
  ) {

    lightbox.classList.remove("active");

  }

});
