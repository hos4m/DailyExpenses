import { AsyncStorage } from 'react-native';
import { cloneDeep } from 'lodash';

export default store => ({
  addExpense: async (state, payload) => {
    await AsyncStorage.setItem('expenses', JSON.stringify([...state.expenses, payload]));
    return { expenses: [...state.expenses, payload] };
  },

  deleteExpense: async (state, id) => {
    const expenses = cloneDeep(state.expenses);
    const newExpenses = expenses.filter(expense => expense.id !== id);

    await AsyncStorage.setItem('categories', JSON.stringify(newExpenses));
    store.setState({ expenses: newExpenses });
  }
});
