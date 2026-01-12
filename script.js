// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll("[data-lightbox]").forEach(img => {
  img.addEventListSner("click", () => {
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

document.querySelectorAll(".document-card").forEach(card => {
  card.addEventListener("click", () => {
    const src = "images/" + card.dataset.doc;
    lightboxImg.src = src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// BACK TO TOP
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display =
    document.documentElement.scrollTop > 400 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
