const form = document.getElementById('form')
const income = document.getElementById('income')
const food = document.getElementById('food')
const rent = document.getElementById('rent')
const clothe = document.getElementById('clothe')
const calculate = document.getElementById('calculate')
const totalExpense = document.getElementById('total-expense')
const remainBalance = document.getElementById('remain-balance')
const saveBtn = document.getElementById('save-btn')
const savePercent = document.getElementById('save-percent')
const savingAmount = document.getElementById('saving-amount')



// show input Error message =>
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error my-3'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// Show Input Success =>
function showSuccess(input,) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// Event Listener =>
form.addEventListener('submit', function (e) {
    e.preventDefault()
    // Income :
    if (income.value === '') {
        showError(income,'Income amount is required!')
    }
    else if (income.value < 0) {
        showError(income,'Input type is not valid!')
    }
    else{
        showSuccess(income)
    }
    // Food :
    if (food.value === '') {
        showError(food,'Food amount is required!')
    }
    else if (food.value < 0) {
        showError(food,'Input type is not valid!')
    }
    else{
        showSuccess(food)
    }
    // Rent :
    if (rent.value === '') {
        showError(rent,'Rent amount is required!')
    }
    else if (rent.value < 0) {
        showError(rent,'Input type is not valid!')
    }
    else{
        showSuccess(rent)
    }
    // Clothes :
    if (clothe.value === '') {
        showError(clothe,'Clothe amount is required!')
    }
    else if (clothe.value < 0) {
        showError(clothe,'Input type is not valid!')
    }
    else{
        showSuccess(clothe)
    }
    // console.log(typeof(income.value));
})



calculate.addEventListener('click', function () {
    const incomeAmount = parseInt(income.value)
    const foodAmount = parseInt(food.value)
    const rentAmount = parseInt(rent.value)
    const clotheAmount = parseInt(clothe.value)
    const total = foodAmount + rentAmount + clotheAmount
    totalExpense.innerText = total
    const remainAmount = incomeAmount - total
    
    if (incomeAmount < total) {
        alert('Expense cant greater than you income')
    }
    else{
        remainBalance.innerText = remainAmount

    }
})
saveBtn.addEventListener('click', function () {
    const savePercentAmount = parseInt(savePercent.value)
    const savingAmountValue = (income.value * savePercentAmount) / 100
    savingAmount.innerText = savingAmountValue
})