/*Menu icon*/
function iconTransform(x) {
    x.classList.toggle("change");
}

var popup = false;
var buttons = document.getElementsByClassName("button");

/*Navigation control*/
function openNav() {
    if (!popup) {
            document.getElementById("mobile").style.height = "13em"; /*30%*/
    } else {
            document.getElementById("mobile").style.height = "0%";
    }
    popup = !popup;
}


/*Modal image*/

// #1
// Get the modal
var modal = document.getElementById("myModal1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption1");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}