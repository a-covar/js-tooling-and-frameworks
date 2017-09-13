import * as actions from './actionCreators'

describe('actions', () => {
  it('should create an action increment LIKES', () => {
    const index = 0
    const expectedAction = {
      type: 'INCREMENT_LIKES',
      index
    }
    expect(actions.like(index)).toEqual(expectedAction)
  });

  it('should create an action increment DISLIKES', () => {
    const index = 0
    const expectedAction = {
      type: 'INCREMENT_DISLIKES',
      index
    }
    expect(actions.dislike(index)).toEqual(expectedAction)
  });
  it('should create an action increment COUNT_ADD', () => {
    const expectedAction = {
      type: 'COUNT_ADD'
    }
    expect(actions.increment()).toEqual(expectedAction)
  });
  it('should create an action fetch SET_ALL_ITEMS', () => {
    const expectedAction = {
      type: 'SET_ALL_ITEMS',
      payload: {items:[]}
    }
    expect(actions.allitems({items:[]})).toEqual(expectedAction)
  });
})
