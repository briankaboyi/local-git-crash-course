const button = document.querySelector('.button');

button.addEventListener('click', function (e) {
  const button = e.target;
  if (button.style.background === 'blue') {
    button.style.background = 'red';
    button.style.color = 'white';
  } else {
    button.style.background = 'blue';
    button.style.color = 'white';
  }
});
