'use strict'
//render
import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');

const galMarkup = galleryItems.map (item => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a> 
  </li>`).join('');

  gallery.insertAdjacentHTML('beforeend', galMarkup);
  
  //deleg
  const imageDeskr = document.querySelector('.lightbox__image');
const modal = document.querySelector('.js-lightbox');
  gallery.addEventListener('click', imageClicker);

  function imageClicker(event){
        event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
      return;
    }
  
    imageDeskr.src = event.target.dataset.source;
    imageDeskr.alt = event.target.getAttribute('alt');

    modal.classList.add('is-open');
  }

  //modal
  const closeBtn = document.querySelector('button[data-action = "close-lightbox"]');
 closeBtn.addEventListener('click', closer);

 function closer(){
   modal.classList.remove('is-open');
   imageDeskr.src = '';
   imageDeskr.alt = '';
 }