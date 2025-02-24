document.addEventListener("DOMContentLoaded", () => {
    let totalExpenses = 0;

    // Get references to the expense input fields
    const breakfastInput = document.getElementById('expense-breakfast');
    const lunchInput = document.getElementById('expense-lunch');
    const dinnerInput = document.getElementById('expense-dinner');
    const miscInput = document.getElementById('expense-misc');
    const totalExpensesDisplay = document.getElementById('total-expenses');
    
    // Full Day Expense Button
    const fullDayButton = document.querySelector('[data-expense="fullDay"]');
    
    // Expense buttons
    const breakfastButton = document.querySelector('[data-expense="breakfast"]');
    const lunchButton = document.querySelector('[data-expense="lunch"]');
    const dinnerButton = document.querySelector('[data-expense="dinner"]');
    const miscButton = document.querySelector('[data-expense="misc"]');

    // Helper function to update the total expenses display
    const updateTotalExpenses = () => {
        totalExpensesDisplay.textContent = totalExpenses.toFixed(2);
    };

    // Handle the Breakfast expense
    breakfastButton.addEventListener('click', () => {
        const breakfastPrice = parseFloat(breakfastInput.value) || 0;
        totalExpenses += breakfastPrice;
        updateTotalExpenses();
    });

    // Handle the Lunch expense
    lunchButton.addEventListener('click', () => {
        const lunchPrice = parseFloat(lunchInput.value) || 0;
        totalExpenses += lunchPrice;
        updateTotalExpenses();
    });

    // Handle the Dinner expense
    dinnerButton.addEventListener('click', () => {
        const dinnerPrice = parseFloat(dinnerInput.value) || 0;
        totalExpenses += dinnerPrice;
        updateTotalExpenses();
    });

    // Handle the Miscellaneous expense
    miscButton.addEventListener('click', () => {
        const miscPrice = parseFloat(miscInput.value) || 0;
        totalExpenses += miscPrice;
        updateTotalExpenses();
    });

    // Handle the Full Day expense (sum of all expenses including miscellaneous)
    fullDayButton.addEventListener('click', () => {
        const fullDayExpense = (parseFloat(breakfastInput.value) || 0) + 
                               (parseFloat(lunchInput.value) || 0) + 
                               (parseFloat(dinnerInput.value) || 0) + 
                               (parseFloat(miscInput.value) || 0);
        totalExpenses += fullDayExpense;
        updateTotalExpenses();
    });
    
    // Reset Expenses Button
    const resetButton = document.getElementById('reset-expenses');
    resetButton.addEventListener('click', () => {
        totalExpenses = 0;
        updateTotalExpenses();
        // Optionally, clear all input fields too
        breakfastInput.value = '';
        lunchInput.value = '';
        dinnerInput.value = '';
        miscInput.value = '';
    });
});
