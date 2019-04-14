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

var modal = document.getElementById('myModal');
var link = document.getElementsByClassName("open-modal");
var modalImage = document.getElementById('modal-img');
var cardName = document.getElementById('modalCardName');
var span = document.getElementsByClassName("close")[0];

for (i = 0; i < link.length; i++) {
    link[i].onclick = function () {
      var newName = this.innerHTML;
      cardName.innerHTML = newName;
      modalImage.src = '../source_images/' + newName + '.jpg';
      modal.style.display = "block";
    }
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modalImage.src = "./card-back-default.jpg"
        modal.style.display = "none";
    }
}