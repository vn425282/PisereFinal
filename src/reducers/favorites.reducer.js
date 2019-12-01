const favoritesReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITES':
      return [
        ...state,
        action.item
      ]
    case 'REMOVE_FAVORITES':
      return state.filter((item) => item.id !== action.id);
    default:
      return state
  }
}

export default favoritesReducers