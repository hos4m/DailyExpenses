export default store => ({
  addExpense: data => state => ({ expenses: [...expenses, data] })
});
