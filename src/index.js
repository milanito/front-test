import React from 'react'
import ReactDOM from 'react-dom'
import { compose } from 'recompose'
import 'react-vis/dist/style.css'
import 'semantic-ui-css/semantic.min.css'

import Router from './config/router'
import TranslationProvider from './config/translations'
import * as serviceWorker from './serviceWorker'

const App = compose(TranslationProvider)(Router)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
