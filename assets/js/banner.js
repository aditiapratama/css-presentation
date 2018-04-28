setTimeout( () => {
  var m1 = document.getElementById('row-4');
  var m2 = document.getElementById('main');
  m2.style.visibility = 'visible';
  var m3 = m2.offsetHeight;
  m2.style.visibility = 'hidden';
  if (m3 > m1.offsetHeight) {
    m1.style.backgroundSize = 'contain';
  }
}, 1000);