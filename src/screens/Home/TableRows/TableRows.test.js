import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'

import TableRows from './index'

describe('<TableRows />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TableRows />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
