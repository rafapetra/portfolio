// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

modalImg.onclick = function () {
  modal.style.display = "none";
};

var modal2 = document.getElementById("myModal-2");

var img2 = document.getElementById("myImg2");
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function () {
  modal2.style.display = "block";
  modalImg2.src = this.src;
};

modalImg2.onclick = function () {
  modal2.style.display = "none";
};

let x = document.getElementById("close2");
x.onclick = function () {
  modal2.style.display = "none";
};


var modal3 = document.getElementById("myModal-3");

var img3 = document.getElementById("myImg3");
var modalImg3 = document.getElementById("img03");
img3.onclick = function () {
  modal3.style.display = "block";
  modalImg3.src = this.src;
};

modalImg3.onclick = function () {
  modal3.style.display = "none";
};

let close3 = document.getElementById("close3");
close3.onclick = function () {
  modal3.style.display = "none";
};