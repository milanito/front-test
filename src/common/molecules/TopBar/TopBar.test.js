import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import { get } from 'lodash'
import { compose, withProps } from 'recompose'
import { MemoryRouter, Route } from 'react-router-dom'

import TopBar from './index'
import enMessages from '../../../config/translations/en.json'
import { mountWithIntl as mount } from '../../../../__helpers__/intl-enzyme-test-helper'

describe('<TopBar />', () => {
  it('renders title when home', () => {
    const wrapper = mount(
      <MemoryRouter>
        <TopBar />
      </MemoryRouter>
    )

    // Should be a menu
    expect(wrapper.exists('.ui')).toEqual(true)
    expect(wrapper.exists('.inverted')).toEqual(true)
    expect(wrapper.exists('.top')).toEqual(true)
    expect(wrapper.exists('.fixed')).toEqual(true)
    // Should have home icon
    expect(wrapper.exists('.home')).toEqual(true)
    expect(wrapper.exists('.icon')).toEqual(true)
    // Title
    expect(wrapper.exists('.header')).toEqual(true)
    expect(wrapper.exists('.item')).toEqual(true)
    expect(wrapper.find('.header').text()).toEqual(get(enMessages, 'SURVEY.titleList'))
    wrapper.unmount()
  })

  it('renders name when survey', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/survey/XX3/Melun' ]}>
        <Route component={TopBar} path='/survey/:surveyCode/:surveyName' />
      </MemoryRouter>
    )

    // Should be a menu
    expect(wrapper.exists('.ui')).toEqual(true)
    expect(wrapper.exists('.inverted')).toEqual(true)
    expect(wrapper.exists('.top')).toEqual(true)
    expect(wrapper.exists('.fixed')).toEqual(true)
    // Should have home icon
    expect(wrapper.exists('.home')).toEqual(true)
    expect(wrapper.exists('.icon')).toEqual(true)
    // Title
    expect(wrapper.exists('.header')).toEqual(true)
    expect(wrapper.exists('.item')).toEqual(true)
    expect(wrapper.find('.header').text()).toEqual('Melun')
    wrapper.unmount()
  })
})
