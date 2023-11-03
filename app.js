const button = document.querySelector('.button');

button.addEventListener('click', function (e) {
  const button = e.target;

  if (button.classList.contains('default')) {
    button.classList.remove('default');
    button.classList.add('blue');
    button.color = 'white';
    button.boxShadow = '0px 3px 10px -4px rgb(76, 87, 88)';
  } else if (button.classList.contains('blue')) {
    button.classList.remove('blue');
    button.classList.add('red');
    button.color = 'white';
    button.boxShadow = '0px 3px 10px -4px rgb(76, 87, 88)';
  } else if (button.classList.contains('red')) {
    button.classList.remove('red');
    button.classList.add('default');
    button.color = 'white';
    button.boxShadow = '0px 3px 10px -4px rgb(76, 87, 88)';
  }
});
