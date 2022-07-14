import { galleryItems } from "./gallery-items.js";
const slider = document.querySelector(".slider");

const galleryMarkup = createGalleryCard(galleryItems);
slider.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryCard(images) {
  //   images.preventDefault();
  return images
    .map(({ preview, original, description }) => {
      return `
        <a class="slider__item" href="${original}">
            <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
            />
        </a>
            `;
    })
    .join("");
}

$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    dots: true,
    adaptiveHight: true,
  });
});
