const openBtn = document.querySelector('.main__btn');
const form = document.querySelector('.contact-form');
const closeBtn = document.querySelector('.main__close');
const sendBtn = document.querySelector('.main__send');

const toggleModal = (showModal) => {
  if (showModal) {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
};

openBtn.addEventListener('click', function () {
  toggleModal(true);
});

closeBtn.addEventListener('click', function () {
  toggleModal(false);
});

window.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    toggleModal(false);
  }
});

const validateUser = function (e) {
  const userName = e.target[0].value;
  const userEmail = e.target[1].value;
  const userMessage = e.target[2].value;

  console.log(userName, userEmail, userMessage);
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  validateUser(e);
});
