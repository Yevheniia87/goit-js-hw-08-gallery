"use strict";
import images from "./gallery-items.js";

const ulRef = document.querySelector('.js-gallery');
const divEl = document.querySelector('.js-lightbox');
const btnEl = document.querySelector('button[data-action ="close-lightbox"]');
const divModalEl = document.querySelector('.lightbox__content');
const overEl = document.querySelector('.lightbox__overlay');



const createGalleryList = images.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link"
    href="${original}">
    <img class="gallery__image"src="${preview}"
    data-source="${original}"
    alt="${description}"/></a></li>`;
}).join('');
ulRef.insertAdjacentHTML('beforeend', createGalleryList);
