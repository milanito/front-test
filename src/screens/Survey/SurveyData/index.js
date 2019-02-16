import React from 'react'
import Loadable from 'react-loadable'
import { capitalize, get, map } from 'lodash'

import Loading from '../../../common/molecules/Loading'

export default Loadable.Map({
  loader: {
    ResultDate: () => import('../ResultDate'),
    ResultQcm: () => import('../ResultQCM'),
    ResultNumeric: () => import('../ResultNumeric')
  },
  render (loaded, { data }) {
    return map(data, ({ type, label, result }) => {
      const Component = get(loaded, `Result${capitalize(type)}.default`, () => null)

      return (<Component label={label} result={result} key={type} />)
    })
  },
  loading: Loading
})
