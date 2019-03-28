var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("return-top").style.bottom = "2.5%";
  } else {
    document.getElementById("return-top").style.bottom = "-70px";
  }
  prevScrollpos = currentScrollPos;
} 