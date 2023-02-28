import { galleryItems } from "./gallery-items.js";
// Change code below this line
import SimpleLightbox from "./node_modules/dist/simple-lightbox.js";
import "./node_modules/dist/simplelightbox/dist/simple-lightbox.min.css";
const galleryContainer = document.querySelector(".gallery");

const createGalleryItem = (item) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
};

const galleryItemsElements = galleryItems.map((item) =>
  createGalleryItem(item)
);
galleryContainer.append(...galleryItemsElements);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true, // włączenie podpisów
  captionDelay: 250, // opóźnienie pojawiania się podpisu
  captionsData: "alt", // wykorzystanie atrybutu alt jako treści podpisu
});

console.log(galleryItems);
