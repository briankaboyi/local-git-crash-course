const button = document.querySelector('.button');

button.addEventListener('click', function (e) {
  const button = e.target;
  if (button.style.background === 'rgb(121, 203, 214)') {
    button.style.background = 'rgb(214, 121, 121)';
    button.style.color = 'white';
    button.style.boxShadow = ' 0px 3px 10px -4px rgb(76, 87, 88)';
  } else {
    button.style.background = 'rgb(121, 203, 214)';
    button.style.color = 'white';
    button.style.boxShadow = ' 0px 3px 10px -4px rgb(76, 87, 88)';
  }
});
