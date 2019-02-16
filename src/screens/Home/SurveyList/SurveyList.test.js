import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'

import SurveyList from './index'
import { mountWithIntl as mount } from '../../../../__helpers__/intl-enzyme-test-helper'

describe('<SurveyList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SurveyList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
