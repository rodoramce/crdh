var modalEmpatia = document.getElementById("myModal")
var closeEmpatia = document.getElementsByClassName("closeModal")[2]

// When the user clicks on <span> (x), close the modal
closeEmpatia.onclick = function() {
    modalEmpatia.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFlorecimiento) {
    modalFlorecimiento.style.display = "none";
  }
};