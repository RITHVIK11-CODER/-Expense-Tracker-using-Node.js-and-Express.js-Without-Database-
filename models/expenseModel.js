// Array to store all transactions
let expenses = [];

// Get all transactions
function getAllExpenses() {
    return expenses;
}

// Add a new transaction
function addExpense(expense) {
    expenses.push(expense);
}

// Get one transaction by index
function getExpenseById(id) {
    return expenses[id];
}

// Update a transaction
function updateExpense(id, updatedExpense) {
    expenses[id] = updatedExpense;
}

// Delete a transaction
function deleteExpense(id) {
    expenses.splice(id, 1);
}

module.exports = {
    getAllExpenses,
    addExpense,
    getExpenseById,
    updateExpense,
    deleteExpense
};