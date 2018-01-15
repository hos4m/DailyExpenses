import createStore from 'redux-zero';

const initialState = {
  expenses: [],
  categories: ['taxi', 'food']
};

export default (store = createStore(initialState));
