import { showLoader, hideLoader, createGalleryMarkup, showMessage } from "./js/render-functions.js";
import { getImages } from "./js/pixabay-api.js";

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const keyword = searchInput.value.trim();

  if (keyword === '') {
    return;
  }

    showLoader();
    
  const images = await getImages(keyword);

  hideLoader();

  if (images.length === 0) {
    showMessage('Sorry, there are no images matching your search query. Please try again!');
    return;
  }

  document.querySelector('.gallery').innerHTML = '';
  createGalleryMarkup(images);
});
