let modalEmpatia = document.querySelector("#myModal")
let modalEstructura = document.querySelector('#myModal-estructura')
let modalRedParticipacion = document.querySelector('#myModal-participacion')
let closeModal = document.querySelectorAll('.closeModal')
let myBtnEstructura = document.querySelector('#myBtn6')
let myBtnEmpatia = document.querySelector('#myBtn')
let myBtnRedParticipacion = document.querySelector('#myBtn7')


// When the user clicks on <span> (x), close the modal
myBtnEstructura.addEventListener('click' , () => {
  modalEstructura.style.display = 'block';
})

myBtnEmpatia.addEventListener('click', () => {
  modalEmpatia.style.display = 'block';
})

myBtnRedParticipacion.addEventListener('click', () => {
  modalRedParticipacion.style.display = 'block';
})

closeModal[0].addEventListener('click',() => {
  modalEstructura.style.display = 'none';
})

closeModal[1].addEventListener('click', () => {
  modalRedParticipacion.style.display = 'none';
})

closeModal[2].addEventListener('click', () => {
  modalEmpatia.style.display = 'none';
})

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
