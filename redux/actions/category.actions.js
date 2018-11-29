import { AsyncStorage } from 'react-native';
import cloneDeep from 'lodash/cloneDeep';

export default store => ({
  getCategories: async state => {
    const result = await AsyncStorage.getItem('categories');
    const categories = result ? [...state.categories, ...JSON.parse(result)] : [];
    store.setState({ categories });
  },

  addCategory: async (state, payload) => {
    await AsyncStorage.setItem('categories', JSON.stringify([...state.categories, payload]));
    store.setState({ categories: [...state.categories, payload] });
  },

  editCategory: async (state, id, value) => {
    let item = state.categories.find(category => category.id === id);
    const itemIndex = state.categories.indexOf(item);
    const newCategories = cloneDeep(state.categories);
    item.name = value;
    newCategories[itemIndex] = item;

    await AsyncStorage.setItem('categories', JSON.stringify(newCategories));
    store.setState({ categories: newCategories });
  },

  deleteCategory: async (state, id) => {
    const categories = cloneDeep(state.categories);
    const newCategories = categories.filter(category => category.id !== id);

    await AsyncStorage.setItem('categories', JSON.stringify(newCategories));
    store.setState({ categories: newCategories });
  }
});
