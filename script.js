// Selectors
const showBtn = document.querySelector('.show-btn');
const closeBtn = document.querySelector('.close-btn');
const modalContainer = document.querySelector('.modal-container');

const container = document.querySelector('.main-container');

// Button Opens Modal
showBtn.addEventListener('click', function () {
  modalContainer.style.visibility = 'visible';
});

// Button closes Modal
closeBtn.addEventListener('click', function () {
  modalContainer.style.visibility = 'hidden';
});
