const incomeInput = document.querySelector("#incomeInput")
const added = document.querySelector("#added")
const addForm = document.querySelector("#addForm")
let incomes = 0;

addForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  incomes = Number(incomeInput.value)
 console.log(incomes);
 localStorage.setItem('income', incomes)
})

// ! To able to see and store your incomes:
// const seeIncomes =localStorage.getItem(incomes)
// console.log(seeIncomes)