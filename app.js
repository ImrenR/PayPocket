//! ********** TO ADD INCOMES ON THE FORM ***********************//

const incomeInput = document.querySelector("#incomeInput");
const added = document.querySelector("#added");
const addForm = document.querySelector("#addForm");
const showIncome = document.querySelector("#showIncome");
let incomes = JSON.parse(localStorage.getItem("incomes")) || 0; // to get number not a string to avoid such as 20002000
// JSON parse : we use this to not have string value

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  incomes = incomes + Number(incomeInput.value);
  showIncome.textContent = incomes;
  localStorage.setItem("income", incomes);
});

// ! To able to see and store your incomes:
// const seeIncomes =localStorage.getItem(incomes)
// console.log(seeIncomes)

//! ********************** EXPENSES FORM ************************* */

const date = document.querySelector("#date");
const quantity = document.querySelector("#quantity");
const placeOfExpences = document.querySelector("#placeOfExpences");
const expensesForm = document.querySelector("#expensesForm");
let listOfExpenses = JSON.parse(localStorage.getItem("expense")) ||[];

expensesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newExpenses = {
    quantity: Number(quantity.value),
    date: date.value,
    information: placeOfExpences.value,
    id: new Date().getTime(),
  };
  listOfExpenses.push(newExpenses)
  localStorage.setItem("expense", JSON.stringify(listOfExpenses));
});
const listOfExpences =JSON.parse(localStorage.getItem("expense"))