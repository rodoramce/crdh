let modalEmpatia = document.querySelector("#myModal")
let modalEstructura = document.querySelector('#myModal-estructura')
let modalRedParticipacion = document.querySelector('#myModal-participacion')
let closeModal = document.querySelector(".closeModal")
let myBtnEstructura = document.querySelector('#myBtn6')
let myBtnEmpatia = document.querySelector('#myBtn')
let myBtnRedParticipacion = document.querySelector('#myBtn7')


// When the user clicks on <span> (x), close the modal
closeModal.onclick = () => {
    modalEmpatia.style.display = "none";
    modalEstructura.style.display ="none";
    modalRedParticipacion.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === modalEmpatia ) {
    modalEmpatia.style.display = "none";
  }
  
  if (event.target === modalEstructura){
    modalEstructura.style.display = "none";
  }
  
   if(event.target === modalRedParticipacion){
    modalRedParticipacion.style.display = "none";
  }
};

myBtnEstructura.onclick = () => {
  modalEstructura.style.display = "block";
};

myBtnEmpatia.onclick = () => {
  modalEmpatia.style.display = "block";
}

myBtnRedParticipacion.onclick = () => {
  modalRedParticipacion.style.display = "block";
}