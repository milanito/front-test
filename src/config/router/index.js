import React from 'react'
import Loadable from 'react-loadable'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'
import Loading from '../../common/molecules/Loading'

/**
 * This component is the application's router
 * @returns {Object} A react router filled with its routes
 */
export default Loadable.Map({
  loader: {
    // Routes components
    Home: () => import('../../screens/Home'),
    Survey: () => import('../../screens/Survey'),
    NoMatch: () => import('../../screens/NoMatch'),
    // Top bar and main container component
    MainScreen: () => import('../../common/containers/MainScreen')
  },
  render (loaded) {
    const Home = loaded.Home.default
    const Survey = loaded.Survey.default
    const NoMatch = loaded.NoMatch.default
    const MainScreen = loaded.MainScreen.default

    return (
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={MainScreen(Home)} />
          <Route path='/survey/:surveyCode/:surveyName' exact component={MainScreen(Survey)} />
          <Route component={MainScreen(NoMatch)} />
        </Switch>
      </Router>
    )
  },
  loading: Loading
})
