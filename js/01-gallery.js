import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const createGalleryItem = (item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = "#";

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.dataset.source = item.original;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
};

const renderGallery = (items) => {
  const galleryItems = items.map((item) => createGalleryItem(item));
  galleryContainer.append(...galleryItems);

  const overlay = document.createElement("div"); // create overlay element
  overlay.classList.add("overlay"); // add overlay class
  overlay.style.display = "none"; // hide overlay initially
  document.body.appendChild(overlay); // append overlay to body

  const modal = document.createElement("div");
  modal.classList.add("modal");
  const modalImage = document.createElement("img");
  modalImage.classList.add("gallery__image");
  modal.appendChild(modalImage);
  overlay.appendChild(modal); // append modal to overlay

  const galleryLinks = document.querySelectorAll(".gallery__link");
  galleryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      modalImage.src = event.target.dataset.source;
      overlay.style.display = "block"; // show overlay and modal
    });
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal(); // close modal and overlay on click outside
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(); // close modal and overlay on escape key
    }
  });

  function closeModal() {
    overlay.style.display = "none"; // hide overlay and modal
  }
};

renderGallery(galleryItems);
