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

// CHECK IF ALL IMAGES ARE LOADED

var imgs = document.images,
    len = imgs.length,
    counter = 0;
[].forEach.call( imgs, function( img ) {
  img.addEventListener( 'load', incrementCounter, false );
} );
function incrementCounter() {
  counter++;
  if ( counter === len ) {
      console.log( 'All images loaded!' );
      var root = document.getElementById('container');
      root.classList.remove('preload');
  }
}