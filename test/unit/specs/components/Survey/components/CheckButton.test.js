import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

describe('CheckButton', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(CheckButton, {
      propsData: {
        text: 'Lorem ipsum',
        value: 'dummy-value',
        selected: true,
        disabled: false
      }
    })
  })

  it('should exist as a component', () => {
    expect(wrapper.find(CheckButton).exists()).toBe(true)
  })

  it('should render the text value passed as prop correctly', () => {
    expect(wrapper.props().text).toBe('Lorem ipsum')
  })

  it('should render the value passed as prop correctly', () => {
    expect(wrapper.props().value).toBe('dummy-value')
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', () => {
    expect(wrapper.classes('check-button--selected')).toBe(true)
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    wrapper.setProps({ selected: false })
    expect(wrapper.classes('check-button--selected')).toBe(false)
  })

  it('should not the dynamic "check-button--disabled" class when the disabled prop is set to false', () => {
    expect(wrapper.classes('check-button--disabled')).toBe(false)
  })

  it('should attach the dynamic "check-button--disabled" class when the disabled prop is set to true', () => {
    wrapper.setProps({ disabled: true })
    expect(wrapper.classes('check-button--disabled')).toBe(true)
  })

  it('if selected is true then it should emit value on click', async () => {
    wrapper.vm.$el.click()
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
