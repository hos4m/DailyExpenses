import { AsyncStorage } from 'react-native';

const getValueFromAsyncStorage = async key => {
  const value = await AsyncStorage.getItem(key);
  return (await JSON.parse(value)) || [];
};

export default store => ({
  getCategories: () => {
    return getValueFromAsyncStorage('categories');
  },

  addCategory: async (state, payload) => {
    await AsyncStorage.setItem('categories', JSON.stringify([...state.categories, payload]));
    return { categories: [...state.categories, payload] };
  }
});
