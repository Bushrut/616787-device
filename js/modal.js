const feedbackButton = document.querySelector('.feedback-button');
const modalFeedback = document.querySelector('.modal-feedback');
const modalButtonClose = modalFeedback.querySelector('.modal-button-close');
const modalMap = document.querySelector('.modal-map');
const mapLink = document.querySelector('.map-link');
const mapClose = modalMap.querySelector('.modal-button-close');
const form = modalFeedback.querySelector('form');
const login = modalFeedback.querySelector('[name=feedback-name]');
const email = modalFeedback.querySelector('[name=feedback-email]');
const message = modalFeedback.querySelector('[name=feedback-text]');

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
  modalFeedback.classList.remove("modal-error");
});

mapClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
});

form.addEventListener('submit', function(evt) {
  if (!login.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
    login.focus();
  } else if (!email.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
    email.focus();
  } else if (!message.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-error");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
    message.focus();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalMap.classList.contains("modal-show")) {
      modalMap.classList.remove("modal-show");
    }
    if (modalFeedback.classList.contains("modal-show")) {
      modalFeedback.classList.remove("modal-show");
      modalFeedback.classList.remove("modal-error");
    }
  }
});
