import React from 'react'
import { mount } from 'enzyme'
import Card from './Card'

function setup() {
  const props = {
    increment: jest.fn(),
    clickLike: jest.fn(),
    clickDislike: jest.fn(),
    getAllItems: jest.fn(),
    count:0,
    item: []
  }

  const enzymeWrapper = mount(<Card {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Card', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('img').hasClass('grid-photo')).toBe(true)
      expect(enzymeWrapper.find('button').length).toBe(2);
    });
  })
})
