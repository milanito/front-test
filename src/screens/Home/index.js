import React from 'react'
import Loadable from 'react-loadable'
import { compose, withState, withHandlers } from 'recompose'

import Loading from '../../common/molecules/Loading'
import ListSurvey from '../../common/api/ListSurvey'

const Home = Loadable.Map({
  loader: {
    HomeSearch: () => import('./HomeSearch'),
    SurveyList: () => import('./SurveyList')
  },
  render (loaded, { input, updateInput, title, data }) {
    const SurveyList = loaded.SurveyList.default
    const HomeSearch = loaded.HomeSearch.default

    return (
      <div>
        <HomeSearch input={input} updateInput={updateInput} />
        <SurveyList data={data} input={input} />
      </div>
    )
  },
  loading: Loading
})

export default compose(withState('input', 'modifyInput', ''),
  withHandlers({
    updateInput: ({ modifyInput }) => input => modifyInput(input)
  }),
  ListSurvey
)(Home)
