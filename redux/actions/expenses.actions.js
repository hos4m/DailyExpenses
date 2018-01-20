import { AsyncStorage } from 'react-native';

export default store => ({
  addExpense: async (state, payload) => {
    await AsyncStorage.setItem('expenses', JSON.stringify([...state.expenses, payload]));
    return { expenses: [...state.expenses, payload] };
  }
});
