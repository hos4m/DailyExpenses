import { AsyncStorage } from 'react-native';
import deepClone from '../../utils/deepClone';

export default store => ({
  getCategories: async (state) => {
    const result = await AsyncStorage.getItem('categories');
    const categories = result ? [...state.categories, ...JSON.parse(result)] : [];
    store.setState({ categories });
  },

  addCategory: async (state, payload) => {
    await AsyncStorage.setItem('categories', JSON.stringify([...state.categories, payload]));
    store.setState({ categories: [...state.categories, payload] });
  },

  deleteCategory: async (state, id) => {
    const categories = deepClone(state.categories);
    const newCategories = categories.filter(category => category.id !== id);

    await AsyncStorage.setItem('categories', JSON.stringify(newCategories));
    store.setState({ categories: newCategories });
  },
});
