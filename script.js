document.addEventListener("DOMContentLoaded", () => {

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  /* =========================
     PROJECT & ENV IMAGES
  ========================== */
  document.querySelectorAll("[data-lightbox]").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  /* =========================
     DOCUMENT CARDS
  ========================== */
  document.querySelectorAll(".document-card").forEach(card => {
    card.addEventListener("click", () => {
      const docFile = card.getAttribute("data-doc");
      lightboxImg.src = `Images/${docFile}`;
      lightbox.style.display = "flex";
    });
  });

  /* =========================
     CLOSE LIGHTBOX
  ========================== */
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    }
  });

  /* =========================
     BACK TO TOP
  ========================== */
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    backToTop.style.display =
      document.documentElement.scrollTop > 400 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

});
