import React from 'react'
import { Icon } from 'semantic-ui-react'
import { compose, branch, renderComponent } from 'recompose'

export default compose(branch(({ error }) => error, renderComponent(() => (
  <Icon name='times' />
))))(() => (
  <Icon loading name='spinner' />
))
