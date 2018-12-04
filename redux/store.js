import createStore from 'redux-zero';

export const initialState = {
  expenses: [
    // EXAMPLE OF EXPENSE DATA STRUCTURE:
    // {
    //   id: 1,
    //   date: 'Wed Mar 28 2018 15:45:14 GMT+0400 (+04)',
    //   category: 'Food',
    //   amount: '15'
    // }
  ],
  categories: [
    // EXAMPLE OF CATEGORY DATA STRUCTURE:
    // {
    //   id: 1,
    //   name: 'Food'
    // }
  ]
};

export default createStore(initialState);
