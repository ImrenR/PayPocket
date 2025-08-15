//! ********** TO ADD INCOMES ON THE FORM ***********************//

const incomeInput = document.querySelector("#incomeInput");
const added = document.querySelector("#added");
const addForm = document.querySelector("#addForm");
const showIncome = document.querySelector("#showIncome");
let incomes = JSON.parse(localStorage.getItem("incomes")) || 0;

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  incomes = incomes + Number(incomeInput.value);
  incomes = showIncome.textContent
  console.log(incomes);
  localStorage.setItem("income", incomes);
});

// ! To able to see and store your incomes:
// const seeIncomes =localStorage.getItem(incomes)
// console.log(seeIncomes)

//! ******************************************************** */
