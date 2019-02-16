import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import { get } from 'lodash'
import { compose, withProps } from 'recompose'

import enMessages from '../../../config/translations/en.json'
import TableHeaders from './index'
import { mountWithIntl as mount } from '../../../../__helpers__/intl-enzyme-test-helper'

describe('<TableHeaders />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('tr')
    ReactDOM.render(<TableHeaders />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders something with data', () => {
    const Element = compose(withProps({
      columns: [{ title: 'SURVEY.code' }]
    }))(TableHeaders)
    const wrapper = mount(<Element />)

    expect(wrapper.exists('th')).toEqual(true)
    expect(wrapper.text()).toEqual(get(enMessages, 'SURVEY.code'))
  })
})
