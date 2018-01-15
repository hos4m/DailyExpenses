export default store => ({
  addExpense: (state, payload) => ({ expenses: [...state.expenses, payload] })
});
