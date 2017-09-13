function count(state = 0, action){

  switch (action.type) {
    case 'COUNT_ADD':
      return state= state + 1
      break;
    default:
      return state
  }
}

export default count;
