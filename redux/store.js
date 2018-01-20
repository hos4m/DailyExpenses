import createStore from 'redux-zero';
import { AsyncStorage } from 'react-native';

const getValueFromAsyncStorage = key => {
  return AsyncStorage.getItem(key).then(val => {
    return val ? JSON.parse(val) : [];
  });
};

const store = createStore({
  expenses: getValueFromAsyncStorage('expenses'),
  categories: getValueFromAsyncStorage('categories')
});

console.log('----------------------------------');
console.log(store.getState());
console.log('----------------------------------');

export default store;
