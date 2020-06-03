/*------------------------------------------------------------------------------
-- // JAVASCRIPT
------------------------------------------------------------------------------*/

function updateSize(){
  // get dimensions of browser viewport
  var width = window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;
  var height = window.innerHeight ||
               document.documentElement.clientHeight ||
               document.body.clientHeight;

  // change the content of HTML element
  document.getElementById('browser-width').innerHTML = width;
  document.getElementById('browser-height').innerHTML = height;
};

window.onload = updateSize;     // update dimensions when page loads
window.onresize = updateSize;   // update dimensions when resizing browser
