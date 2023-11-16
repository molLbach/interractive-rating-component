
let buttons = document.querySelectorAll(".rank");
let submitbtn = document.querySelector(".boutouna")
let stok;
let ratetxt = document.querySelector("#textrate");
let count = document.querySelector(".countainer")
buttons.forEach(function (button) {
    button.addEventListener('click', () => {
        buttons.forEach(function (btn) {
            if (btn === button) {
                button.setAttribute('id', 'clickedButton');
            } else if (btn.getAttribute('id') === 'clickedButton') {
                btn.removeAttribute('id');
            }
        });
    });
});
submitbtn.addEventListener('click', ()=>{
stok = document.querySelector("#clickedButton").textContent;
ratetxt.textContent= `You selected ${stok} out of 5`;
count.style.display = "none";







})



