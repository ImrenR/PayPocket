const add = document.querySelector("add")
const incomeInput = document.querySelector("incomeInput")
const addForm = document.querySelector("addForm")
let income = 0;

addForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  income = incomeInput.value

})