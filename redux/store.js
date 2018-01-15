import createStore from 'redux-zero';

const initialState = {
  expenses: [
    {
      id: 1,
      category: 'taxi',
      date: new Date().toString(),
      amount: '15'
    },
    {
      id: 2,
      category: 'food',
      date: new Date().toString(),
      amount: '25'
    }
  ],

  categories: ['taxi', 'food']
};

export default (store = createStore(initialState));
