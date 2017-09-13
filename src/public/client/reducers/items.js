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
    default:
      return state

  }
}

export default items;
