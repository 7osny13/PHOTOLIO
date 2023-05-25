// listen the dropDown btn
const dropDownBtn = document.getElementById('dropdown');
// listen overlay element
const overlay = document.getElementById('overlay');
// listen close btn on overlay
const closeBtn = document.getElementsByClassName('close')[0];

// display overlay
dropDownBtn.addEventListener('click' , () => {
    overlay.style.display = 'block'
})
// hidden overlay
closeBtn.addEventListener('click' , () => {
    overlay.style.display = 'none'
})