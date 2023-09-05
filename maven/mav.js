const one = document.querySelector(".one")
const two = document.querySelector(".two")
const btn = document.querySelector("#menu-bar")
const inputField = document.querySelector("#input-field")
const subBtn = document.querySelector("#sub-btn")
btn.addEventListener("click", function(){
    one.classList.toggle("reveal")
    two.classList.toggle("reveal")
})
subBtn.addEventListener("click", function(){
    inputField.value = " "
})