import count from './count';

describe('count reducer', () => {
  it('should return the initial state', () => {
    expect(count(undefined, {})).toEqual(0)
  })

  it('should handle COUNT_ADD', () => {
    expect(
      count(0, {
        type: 'COUNT_ADD',
      })
    ).toEqual(1);
  })
})
