var scroll = document.getElementById('scroll')

window.onscroll = function () {
  if (window.pageYOffset >= 600) {
      scroll.style.display = "block";
  }else{
    scroll.style.display = "none";
  }
}
window.onclick = function() {
  window.scrollTo(0, 0);
}
