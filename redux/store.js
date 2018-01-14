import createStore from 'redux-zero';

const initialState = {
  expenses: [
    {
      id: 1,
      cateogry: 'taxi',
      date: new Date().toString(),
      amount: '15'
    },
    {
      id: 2,
      cateogry: 'food',
      date: new Date().toString(),
      amount: '25'
    }
  ],

  categories: ['taxi', 'food']
};

export default (store = createStore(initialState));
