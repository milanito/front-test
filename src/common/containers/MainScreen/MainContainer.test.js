import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import { get } from 'lodash'
import { compose, withProps } from 'recompose'
import { MemoryRouter, Route } from 'react-router-dom'

import MainContainer from './index'
import enMessages from '../../../config/translations/en.json'
import { mountWithIntl as mount } from '../../../../__helpers__/intl-enzyme-test-helper'

const Test = () => (<p id='test'>Test</p>)

describe('<MainContainer />', () => {
  it('renders correctly all elements', () => {
    const Element = compose(MainContainer)(Test)
    const wrapper = mount(
      <MemoryRouter>
        <Element />
      </MemoryRouter>
    )

    // Should have menu with right title
    expect(wrapper.exists('.ui')).toEqual(true)
    expect(wrapper.exists('.inverted')).toEqual(true)
    expect(wrapper.exists('.top')).toEqual(true)
    expect(wrapper.exists('.fixed')).toEqual(true)
    expect(wrapper.find('.header').text()).toEqual(get(enMessages, 'SURVEY.titleList'))
    // Should have a container
    expect(wrapper.exists('.ui')).toEqual(true)
    expect(wrapper.exists('.container')).toEqual(true)
    // Should have test
    expect(wrapper.find('#test').text()).toEqual('Test')
    wrapper.unmount()
  })
})
