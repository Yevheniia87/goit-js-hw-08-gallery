 "use strict";
import images from "./gallery-items.js";
 
 const ulRef = document.querySelector('.js-gallery');
 const btnEl = document.querySelector('button[data-action ="close-lightbox"]');
 const divModalEl = document.querySelector('.lightbox__content');
 const modalImgRef = document.querySelector('.lightbox__image');
 const modalRef = document.querySelector('.lightbox');
 
const createGalleryList = images.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link"
    href="${original}">
    <img loading="lazy" class="gallery__image" src="${preview}"
    data-source="${original}"
    alt="${description}"/></a></li>`;
}).join('');

ulRef.insertAdjacentHTML('afterbegin', createGalleryList);

ulRef.addEventListener('click', openGalleryClick);
btnEl.addEventListener('click', removeOpenImg);
divModalEl.addEventListener('click', closeLightbox);

function openGalleryClick(evt) {
      evt.preventDefault();
     if (!evt.target.classList.contains('gallery__image')) {
     return;
     }
         
         modalImgRef.src = evt.target.dataset.source;
         modalImgRef.alt = evt.target.alt;
  
  modalRef.classList.add('is-open');
  
  window.addEventListener("keyup", clickKey);
  // if (evt.target.nodeName !== 'IMG') {
  //   return;
  // }
  // if (evt.target.nodeName === 'IMG') {
  //   modalRef.classList.add('is-open');
  //    modalImgRef.src = evt.target.dataset.source;
  //         modalImgRef.alt = evt.target.alt;
  // }
 };
function removeOpenImg(evt) {
    //   const currentOpenImg = document.querySelector('.lightbox.is-open');
    //  if (evt.target === evt.currentTarget) {
    //      return;
    //  }
        modalRef.classList.remove('is-open');
        modalImgRef.src = '';
  modalImgRef.alt = '';
  window.removeEventListener("keyup", clickKey);
   
  };
function closeLightbox(evt) {
  if (evt.target === evt.currentTarget) {
    removeOpenImg();
  } 
};
function clickKey(evt) {
  if (evt.code === "Escape") {
    removeOpenImg();
  }
}