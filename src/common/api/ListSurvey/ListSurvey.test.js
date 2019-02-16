import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import mockAxios from 'jest-mock-axios'
import { shallow, mount } from 'enzyme'
import { compose, withProps } from 'recompose'

import ListSurvey from './index'

const Test = () => (<p>test</p>)

describe('ListSurvey HOC', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const Elmnt = compose(ListSurvey)(Test)

    ReactDOM.render(<Elmnt />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders something with data', done => {
    const Elmnt = compose(ListSurvey)(Test)
    const wrapper = mount(<Elmnt />)

    setTimeout(() => {
      expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:3000/api/list.json')
      expect(wrapper.html()).toEqual('<p>test</p>')
      wrapper.unmount()
      done()
    }, 1000)
  })
})
