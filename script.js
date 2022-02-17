const form = document.getElementById('form')

// input
const income = document.getElementById('income')
const food = document.getElementById('food')
const rent = document.getElementById('rent')
const clothe = document.getElementById('clothe')

// Button 
const calculateBtn = document.getElementById('calculate-btn')
const saveBtn = document.getElementById('save-btn')

//amount value field
const totalExpense = document.getElementById('total-expense')
const balance = document.getElementById('remain-balance')
const savePercent = document.getElementById('save-percent')
const savingAmount = document.getElementById('saving-amount')
const remainAfterSaving = document.getElementById('remain-amount')


// show input Error message =>
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'form-control error my-3'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// Show Input Success =>
function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}


// Calculate total balance
function totalBalance(a, b, c) {
    let sum = parseInt(a.value) + parseInt(b.value) + parseInt(c.value)
    return sum
}
// Calculate Remain Balance     
function remainBalance(incomeValue, totalValue) {
    let final = parseInt(incomeValue.value) - totalValue
    return final
}
    
// Calculate Event Listener
calculateBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let total = totalBalance(food, rent, clothe)
    let remainAmount = remainBalance(income, total)

    // Error Catch
    if (parseInt(income.value) < total || parseInt(income.value)< parseInt(food.value) || parseInt(income.value) < parseInt(rent.value)|| parseInt(income.value) < parseInt(clothe.value)) {
    alert('Income Must Be Greater Than Your Expense Amount!')
    }
    else{
        totalExpense.innerText = total
        balance.innerText = remainAmount
    }

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

})












// Saving Event Listener
saveBtn.addEventListener('click', function () {
    const savePercentAmount = parseInt(savePercent.value)
    const savingAmountValue = (income.value * savePercentAmount) / 100

    let total = totalBalance(food, rent, clothe)

    const remainAmount = remainBalance(income, total)
    
    const remainNewBalance = remainAmount - savingAmountValue

    remainAfterSaving.innerText = remainNewBalance
    
    // Error Catch
    if (savingAmountValue > parseInt(income.value)) {
        alert('Income Must Be Greater Than Your Saving Amount!')
    }else if (savePercentAmount < 0) {
        alert('Field must be a valid number!')
    }
    else{
        savingAmount.innerText = savingAmountValue
    }

})