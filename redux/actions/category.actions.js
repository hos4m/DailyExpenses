import { AsyncStorage } from 'react-native';

export default store => ({
  getCategories: async state => {
    const result = await AsyncStorage.getItem('categories');
    const categories = result ? [...state.categories, ...JSON.parse(result)] : [];
    store.setState({ categories });
  },

  addCategory: async (state, payload) => {
    await AsyncStorage.setItem('categories', JSON.stringify([...state.categories, payload]));
    store.setState({ categories: [...state.categories, payload] });
  }
});
