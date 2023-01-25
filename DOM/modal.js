const buttonOpenModal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')
buttonOpenModal.onclick = function(){
    modalWrapper
    .classList
    .remove('invisible')
}
document.addEventListener(
    'keydown',function(event){
const isEscKey = event.key === 'Escape'
if(isEscKey){
    modalWrapper.classList.add('invisible')
}
    }
)
//deu errado e não sei consertar, descobro o erro, faltava um ponto