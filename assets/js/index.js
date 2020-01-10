// const modalDialogosAbiertos = document.querySelector('#myModal2');
const modalFundamentosDH = document.querySelector('#myModalFundamentosDH');
const modalComites = document.querySelector('#myModal3')
const btnDialogosAbiertos = document.querySelector('#myBtn2');
const myBtn3 = document.querySelector('#myBtn3');
const closeModal = document.querySelectorAll('.closeModal');
const modal = document.querySelector('.modal');
// const dialogosAbiertosImg = document.querySelector('#dialogosAbiertosImg');
const myBtnFundamentosDH = document.querySelector('#myBtnFundamentosDH');

btnDialogosAbiertos.addEventListener('click', () => {
    modalDialogosAbiertos.style.display = 'block';
    if(event.target === closeModal[1]){
        modalDialogosAbiertos.style.display = 'none';
    }
})

myBtn3.addEventListener('click', () => {
    modalComites.style.display = 'block';
    if(event.target === closeModal[3]){
        modalComites.style.display = 'none';
    }
})

myBtnFundamentosDH.addEventListener('click', () => {
    modalFundamentosDH.style.display = 'block';
    if(event.target === closeModal[2]){
        modalFundamentosDH.style.display = 'none';
    }
})

window.onclick = (event) => {
    if (event.target == modalDialogosAbiertos) {
      modalDialogosAbiertos.style.display = 'none';
    }

    if(event.target === modalComites)
    modalComites.style.display = 'none';


  if(event.target == modalFundamentosDH)
  modalFundamentosDH.style.display = 'none';

  }