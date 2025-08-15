const incomeInput = document.querySelector("#incomeInput")
const added = document.querySelector("#added")
const addForm = document.querySelector("#addForm")
let incomes = 0;

addForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  incomes = Number(incomeInput.value)
 console.log(incomes);
})