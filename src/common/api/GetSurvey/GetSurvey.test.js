import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import mockAxios from 'jest-mock-axios'
import { shallow, mount } from 'enzyme'
import { compose, withProps } from 'recompose'

import GetSurvey from './index'

const Test = () => (<p>test</p>)

describe('GetSurvey HOC', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const Elmnt = compose(GetSurvey)(Test)

    ReactDOM.render(<Elmnt />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders without data if not code', done => {
    const Elmnt = compose(GetSurvey)(Test)
    const wrapper = mount(<Elmnt />)

    setTimeout(() => {
      expect(mockAxios.get).not.toHaveBeenCalledWith('http://localhost:3000/api/1.json')
      expect(wrapper.html()).toEqual('<p>test</p>')
      wrapper.unmount()
      done()
    }, 1000)
  })

  it('renders something with data', done => {
    const Elmnt = compose(withProps({ code: 1 }), GetSurvey)(Test)
    const wrapper = mount(<Elmnt />)

    setTimeout(() => {
      expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:3000/api/1.json')
      expect(wrapper.html()).toEqual('<p>test</p>')
      wrapper.unmount()
      done()
    }, 1000)
  })
})
