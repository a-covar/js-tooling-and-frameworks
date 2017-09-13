// increment likes
export function like(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}
// increment deslikes

export function dislike(index) {
  return {
    type: 'INCREMENT_DISLIKES',
    index
  }
}
