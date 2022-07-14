import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

const galleryMarkup = createGalleryCard(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

gallery.insertAdjacentElement("beforeend", galleryMarkup);

function createGalleryCard(images) {
  //   images.preventDefault();
  return images
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
            />
        </a>
            `;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  /* options */
  captions: true,
  captionsData: "alt",
  captionSelector: "img",
});
