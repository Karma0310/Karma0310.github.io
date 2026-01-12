document.addEventListener("DOMContentLoaded", () => {

  // LIGHTBOX ELEMENTS
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // PROJECT IMAGES
  document.querySelectorAll("[data-lightbox]").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  // DOCUMENT CARDS
  document.querySelectorAll(".document-card").forEach(card => {
    card.addEventListener("click", () => {
      const src = "images/" + card.getAttribute("data-doc");
      lightboxImg.src = src;
      lightbox.style.display = "flex";
    }); 
     document.addEventListener("keydown", e => {
       if (e.key === "Escape") {
      lightbox.style.display = "none";
       }
      });
  });

  // CLOSE LIGHTBOX
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

  // BACK TO TOP
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 400) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });



});
