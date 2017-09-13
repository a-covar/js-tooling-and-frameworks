import axios from 'axios';
// increment likes
export function like(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// increment deslikes

export function dislike(index, count) {
  return {
    type: 'INCREMENT_DISLIKES',
    index
  }
}

export function allitems(payload){
  return {
    type: 'SET_ALL_ITEMS',
    payload
  }
}

export function increment() {
    return {
        type: 'COUNT_ADD'
    }
}

export function clickLike (index, count){
  return (dispatch) => {
    if (count === 2) {
        dispatch(getAllItems());
    }
    dispatch(increment());
    dispatch(like(index));
  }
}
export function clickDislike (index, count){
  return (dispatch) => {
    if (count === 2) {
        dispatch(getAllItems());
    }
    dispatch(increment());
    dispatch(dislike(index));
  }
}
// fetch more
export function getAllItems(){
  return (dispatch) => {
    const API = 'http://localhost:3000/api/items'
    axios.get(`${API}`).then((response) => {
      dispatch(allitems(response.data));
    });
  }
}
