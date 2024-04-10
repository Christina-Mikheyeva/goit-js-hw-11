import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector('.loader');

function showLoader() {
  loader.classList.add('active');
}

function hideLoader() {
  loader.classList.remove('active');
}

function createGalleryMarkup(images) {
  const galleryMarkup = images.map(image => `
    <div class="gallery-item">
      <a href="${image.largeImageURL}" class="lightbox">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p>
          <i class="fa fa-heart"></i> ${image.likes}
        </p>
        <p>
          <i class="fa fa-eye"></i> ${image.views}
        </p>
        <p>
          <i class="fa fa-comment"></i> ${image.comments}
        </p>
        <p>
          <i class="fa fa-download"></i> ${image.downloads}
        </p>
      </div>
    </div>
  `).join('');

  document.querySelector('.gallery').innerHTML = galleryMarkup;

  const lightbox = new SimpleLightbox('.lightbox');
  lightbox.refresh();
}

function showMessage(message) {
  iziToast.show({
    title: 'Пошук зображень',
    message,
    position: 'topRight',
  });
}

export { showLoader, hideLoader, createGalleryMarkup, showMessage };
