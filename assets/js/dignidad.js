var modalEmpatia = document.getElementById("myModal")
var modalFlorecimiento = document.getElementById("modal-florecimiento")
var btn4 = document.getElementById("myBtn4")
var closeFlorecimiento = document.getElementsByClassName("closeModal")[2]
var closeEmpatia = document.getElementsByClassName("closeModal")[4]

// When the user clicks on <span> (x), close the modal
closeEmpatia.onclick = function() {
    modalEmpatia.style.display = "none";
}
closeFlorecimiento.onclick = function() {
  modalFlorecimiento.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalFlorecimiento) {
    modalFlorecimiento.style.display = "none";
  }
};

btn4.onclick = function() {
  modalFlorecimiento.style.display = "block";
};
