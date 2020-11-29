import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: false
      }
    })
  })

  // Complete the following statements by implementing tests for the described behaviours

  it('should exist as a component', () => {
    expect(test.find('CheckButton').exists()).toBe(true);
  })

  it('should render the text value passed as prop correctly', () => {

  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {

  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', () => {

  })

  // Write additional tests based on the new logic added to the CheckButton component as part of the challenge
})
