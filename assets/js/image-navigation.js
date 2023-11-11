document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.querySelector(".main-image img");
  const thumbnails = document.querySelectorAll(".thumbs-navigation img");
  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  document.body.appendChild(lightbox);

  // Função para mudar a imagem principal
  function changeMainImage(imgSrc) {
    mainImage.src = imgSrc;
  }

  // Evento de clique nas miniaturas
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      changeMainImage(this.dataset.target);
    });
  });

  // Evento de clique na imagem principal para abrir o lightbox
  mainImage.addEventListener("click", function () {
    const lightboxImage = document.createElement("img");
    lightboxImage.src = this.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(lightboxImage);
    lightbox.style.display = "flex";
  });

  // Evento de clique no lightbox para fechar
  lightbox.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  // Carrossel automático para mobile
  if (window.innerWidth <= 600) {
    let currentThumbIndex = 0;
    setInterval(() => {
      currentThumbIndex = (currentThumbIndex + 1) % thumbnails.length;
      changeMainImage(thumbnails[currentThumbIndex].dataset.target);
    }, 3000); 
  }
});
