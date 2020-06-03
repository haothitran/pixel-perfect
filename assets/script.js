function updateSize(){
  // get dimensions of viewport
  var width = window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;
  var height = window.innerHeight ||
               document.documentElement.clientHeight ||
               document.body.clientHeight;

  document.getElementById('browser-width').innerHTML = width;
  document.getElementById('browser-height').innerHTML = height;
};

window.onload = updateSize;     // update dimensions when page loads
window.onresize = updateSize;   // update dimensions when resizing browser
