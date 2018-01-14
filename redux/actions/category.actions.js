export default (actions = store => ({
  addCategoryAction: (state, category) => {
    const newCategories = [...state.categories, category]
    return { categories: newCategories };
  }
}));
