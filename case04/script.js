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
/* =========================
   ACTIVE SECTION
========================= */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".progress-nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const top =
      section.offsetTop - 250;

    if(scrollY >= top){

      current = section.id;

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(
      link.getAttribute("href")
      === "#" + current
    ){

      link.classList.add("active");

    }

  });

});
