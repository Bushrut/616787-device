const feedbackButton = document.querySelector('.feedback-button');
const modalFeedback = document.querySelector('.modal-feedback');
const modalButtonClose = modalFeedback.querySelector('.modal-button-close');
const modalMap = document.querySelector('.modal-map');
const mapLink = document.querySelector('.map-link');
const mapClose = modalMap.querySelector('.modal-button-close');

feedbackButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
});

mapLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
});

modalButtonClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('modal-show');
});

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});
