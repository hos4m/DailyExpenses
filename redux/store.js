import createStore from 'redux-zero';

export const initialState = {
  expenses: [
    {
      id: 1,
      date: 'Wed Mar 28 2018 15:45:14 GMT+0400 (+04)',
      category: 'Test Category',
      amount: '15'
    }
  ],
  categories: [
    {
      id: 1,
      name: 'Test Category'
    }
  ]
};

export default createStore(initialState);
