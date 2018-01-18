export default store => ({
  addCategory: (state, payload) => ({ categories: [...state.categories, payload] })
});
