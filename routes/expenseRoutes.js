const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseController");

// Dashboard
router.get("/", expenseController.getDashboard);

// Show Add Expense Form
router.get("/add", expenseController.showAddExpense);

// Add Expense
router.post("/add", expenseController.addExpense);

// Show Edit Expense Form
router.get("/edit/:id", expenseController.showEditExpense);

// Update Expense
router.post("/edit/:id", expenseController.updateExpense);

// Delete Expense
router.get("/delete/:id", expenseController.deleteExpense);

module.exports = router;