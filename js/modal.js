const feedbackButton = document.querySelector('.feedback-button');
const modalFeedback = document.querySelector(".modal-feedback");
const feedbackClose = modalFeedback.querySelector(".modal-button-close");

feedbackButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
});

feedbackClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('modal-show');
});

