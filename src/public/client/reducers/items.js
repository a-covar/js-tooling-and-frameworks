function items(state = [], action){
  let i = action.index -1;
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ]
      break;
    case 'INCREMENT_DISLIKES':
      return [
        ...state.slice(0,i),
        {...state[i], dislikes: state[i].dislikes + 1},
        ...state.slice(i + 1)
      ]
      break;
    case 'SET_ITEMS':
      return [...action.payload.items]
      break;
    case 'SET_ALL_ITEMS':
      return [
        ...state.slice(0,5),
        ...action.payload.items.slice(5)
      ]
      break;
    default:
      return state

  }
}

export default items;
