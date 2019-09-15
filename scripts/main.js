const detailImageSelector = '[data-image-role="target"]';
const detailTitleSelector = '[data-image-role="title"]';
const thumbnailLinkSelector = '[data-image-role="trigger"]';

function setDetails(imageUrl, titleText) {
  'use strict'
  let detailImage = document.querySelector(detailImageSelector);
  detailImage.setAttribute('src', imageUrl);

  let detailTitle = document.querySelector(detailTitleSelector);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict'
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict'
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict'
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict'
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict'
  let thumbnails = document.querySelectorAll(thumbnailLinkSelector);
  let thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  let thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
