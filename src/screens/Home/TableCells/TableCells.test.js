import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { compose, withProps } from 'recompose'

import TableCells from './index'

describe('<TableCells />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('tr')
    ReactDOM.render(<TableCells />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders something with data', () => {
    const Element = compose(withProps({
      columns: [{ getter: 'code' }], item: { code: 'toto' }
    }))(TableCells)
    const wrapper = mount(<Element />)

    expect(wrapper.exists('td')).toEqual(true)
    expect(wrapper.text()).toEqual('toto')
  })
})
