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
};
renderGallery(galleryItems);
