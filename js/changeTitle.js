  var img = document.getElementById('facialImg');
  var topPos = 0;
  var dir = 1;
  function frame() {
    if (topPos == 50) {
      dir = 1;
    }else if (topPos == 0) {
      dir = -1;
    }
    topPos += -0.5 * dir;
    img.style.top = `${topPos}px`;
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
