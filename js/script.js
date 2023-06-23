// Get the modal
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal-2");
var modal3 = document.getElementById("myModal-3");
var modal4 = document.getElementById("myModal-4");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");

var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");

var span = document.getElementsByClassName("close")[0];
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");

img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
};

span.onclick = function() {
  modal.style.display = "none";
};

modalImg.onclick = function() {
  modal.style.display = "none";
};

img2.onclick = function() {
  modal2.style.display = "block";
  modalImg2.src = this.src;
};

close2.onclick = function() {
  modal2.style.display = "none";
};

modalImg2.onclick = function() {
  modal2.style.display = "none";
};

img3.onclick = function() {
  modal3.style.display = "block";
  modalImg3.src = this.src;
};

close3.onclick = function() {
  modal3.style.display = "none";
};

modalImg3.onclick = function() {
  modal3.style.display = "none";
};

img4.onclick = function() {
  modal4.style.display = "block";
  modalImg4.src = this.src;
};

close4.onclick = function() {
  modal4.style.display = "none";
};

modalImg4.onclick = function() {
  modal4.style.display = "none";
};
