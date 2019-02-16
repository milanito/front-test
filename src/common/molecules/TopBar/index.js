import React from 'react'
import { injectIntl } from 'react-intl'
import { Menu, Icon } from 'semantic-ui-react'
import { isEqual, get } from 'lodash'
import { withRouter, Link } from 'react-router-dom'
import { compose, withProps } from 'recompose'

const TopBar = ({ title }) => (
  <Menu inverted fixed='top'>
    <Menu.Item as={Link} to='/'>
      <Icon name='home' />
    </Menu.Item>
    <Menu.Item name={title} header>
      {title}
    </Menu.Item>
  </Menu>
)
export default compose(injectIntl,
  withRouter,
  withProps(({ intl, match }) => ({
    title: ((int, { path, params }) => {
      if (isEqual(path, '/')) {
        return int.formatMessage({ id: 'SURVEY.titleList' })
      }

      return get(params, 'surveyName', '')
    })(intl, match)
  }))
)(TopBar)
