//! ********** TO ADD INCOMES ON THE FORM ***********************//

const incomeInput = document.querySelector("#incomeInput"); 
const added = document.querySelector("#added");
const addForm = document.querySelector("#addForm");
const showIncome = document.querySelector("#showIncome");
let incomes = JSON.parse(localStorage.getItem("myIncomes")) || 0; // to avoid strings we used Parse: such as 20002000 will be with parse 2000
// JSON parse : we use this to not have string value

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  incomes = incomes + Number(incomeInput.value);
  
  localStorage.setItem("myIncomes", incomes);
});

// ! To able to see and store your incomes:
// const seeIncomes =localStorage.getItem(incomes)
// console.log(seeIncomes)

//! ********************** EXPENSES FORM ************************* */

const date = document.querySelector("#date");
const quantity = document.querySelector("#quantity");
const placeOfExpences = document.querySelector("#placeOfExpences");
const expensesForm = document.querySelector("#expensesForm");
const expensesTable = document.querySelector("#expensesTable");

let listOfExpenses = JSON.parse(localStorage.getItem("expense")) || [];

expensesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newExpenses = {
    quantity: Number(quantity.value),
    date: date.value,
    information: placeOfExpences.value,
    id: new Date().getTime(),
  };
  listOfExpenses.push(newExpenses);
  localStorage.setItem("expense", JSON.stringify(listOfExpenses));
    expencesOfTable(newExpenses)
 
});

listOfExpenses.forEach((expenses) => {
  expencesOfTable(expenses);
});

//! **************** PRINTING THE VALUES ON THE TABLE**********************************************************/


// if you need to update the values all the time you need to use functions!
function expencesOfTable({ id, quantity, date, information }) {
  expensesTable.innerHTML += `
  <tr>
              <th scope="row">${information}</th>
              <td>${quantity}</td>
              <td>${date}</td>
              <td> <i class="fa-solid fa-trash-can text-danger ms-4"
              style = "cursor:pointer" id=${id}> </td>
            </tr> 
            `;

  document.querySelectorAll(".fa-trash-can").forEach((item) => {
     item.onclick=()=>{
      item.parentElement.parentElement.remove()
      listOfExpenses = listOfExpenses.filter((items)=> items.id != item.id)
      localStorage.setItem("expense", JSON.stringify(listOfExpenses));
     }
  });
}

//! ******************* CALCULATION ***********************************************/

const showExpenses = document.querySelector("#showExpenses")
const showMoneyLeft = documentquerySelector("#showMoneyLeft")



function hesaplaGoster () {
  const harcamaToplami = listOfExpenses.reduce((acc,item)=> acc + item.quantity , 0)
  const gelir = JSON.parse(localStorage.getItem("myIncomes"))
  showIncome.textContent = gelir;
  showExpenses.textContent = harcamaToplami
  showMoneyLeft.textContent =  gelir - harcamaToplami
}
hesaplaGoster()


//! ************************************* CLEAR ALL *************************************************/

const clearIt = document.querySelector("#clearIt")

clearIt.addEventListener("click", ()=>{
  incomeInput.value= ""
  listOfExpenses.value= []
  myIncomes= 0
  expencesOfTable.innerHTML =""
  hesaplaGoster()
  localStorage.removeItem("expence")
  localStorage.removeItem("myIncomes")

})