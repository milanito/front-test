import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { get } from 'lodash'
import { Router, MemoryRouter } from 'react-router-dom'
import { compose, withProps } from 'recompose'

import TableRow from './index'
import enMessages from '../../../config/translations/en.json'
import { mountWithIntl as mount } from '../../../../__helpers__/intl-enzyme-test-helper'

describe('<TableRow />', () => {
  it('renders table row', () => {
    const Element = compose(withProps({
      columns: [{ title: 'SURVEY.code', getter: 'code' }],
      item: { code: 'toto', name: 'toto' }
    }))(props => (
      <MemoryRouter>
        <TableRow {...props} />
      </MemoryRouter>
    ))
    const wrapper = mount(<Element />)

    expect(wrapper.find('tr').exists()).toEqual(true)
  })

  it('calls function when updating input', () => {
    const history = createBrowserHistory()
    sinon.spy(history, 'push')
    const Element = compose(withProps({
      columns: [{ title: 'SURVEY.code', getter: 'code' }],
      item: { code: 'toto', name: 'toto' }
    }))(props => (
      <Router history={history}>
        <TableRow {...props} />
      </Router>
    ))
    const wrapper = mount(<Element />)

    wrapper.find('tr').simulate('click')
    expect(history.push.called).toEqual(true)
    expect(history.push.calledWithExactly('/survey/toto/toto')).toEqual(true)
  })
})
