document
.querySelectorAll(".zoomable")
.forEach(img => {

  img.addEventListener("click", () => {

    console.log("clicou");

    lightboxImage.src = img.src;

    lightbox.classList.add("active");

  });

});
/* =========================
   LIGHTBOX
========================= */

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-image");

const closeLightbox =
document.querySelector(".lightbox-close");

document
.querySelectorAll(".zoomable")
.forEach(img => {

  img.addEventListener("click", () => {

    lightboxImage.src = img.src;

    lightbox.classList.add("active");

  });

});

closeLightbox.addEventListener("click", () => {

  lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

  if(e.target === lightbox){

    lightbox.classList.remove("active");

  }

});

document.addEventListener("keydown", (e) => {

  if(
    e.key === "Escape" &&
    lightbox.classList.contains("active")
  ){

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
/* =========================
   BACK TO TOP
========================= */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if(window.scrollY > 800){

    backToTop.classList.add("show");

  }else{

    backToTop.classList.remove("show");

  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({

    top:0,

    behavior:"smooth"

  });

});
