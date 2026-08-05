const expenseModel = require("../models/expenseModel");

// Display Dashboard
exports.getDashboard = (req, res) => {
    const expenses = expenseModel.getAllExpenses();

    let totalIncome = 0;
    let totalExpense = 0;

    expenses.forEach(expense => {
        if (expense.type === "Income") {
            totalIncome += Number(expense.amount);
        } else {
            totalExpense += Number(expense.amount);
        }
    });

    const balance = totalIncome - totalExpense;

    res.render("index", {
        expenses,
        totalIncome,
        totalExpense,
        balance
    });
};

// Show Add Expense Page
exports.showAddExpense = (req, res) => {
    res.render("addExpense");
};

// Add Expense
exports.addExpense = (req, res) => {
    const { title, amount, type } = req.body;

    expenseModel.addExpense({
        title,
        amount,
        type
    });

    res.redirect("/");
};

// Show Edit Page
exports.showEditExpense = (req, res) => {
    const id = req.params.id;
    const expense = expenseModel.getExpenseById(id);

    res.render("editExpense", {
        id,
        expense
    });
};

// Update Expense
exports.updateExpense = (req, res) => {
    const id = req.params.id;
    const { title, amount, type } = req.body;

    expenseModel.updateExpense(id, {
        title,
        amount,
        type
    });

    res.redirect("/");
};

// Delete Expense
exports.deleteExpense = (req, res) => {
    const id = req.params.id;

    expenseModel.deleteExpense(id);

    res.redirect("/");
};