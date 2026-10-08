import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });

    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(({ hits: images }) => {
      if (images.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        createGallery(images);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message || 'An error occurred while fetching images',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
