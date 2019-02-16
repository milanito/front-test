import React from 'react'
import { get } from 'lodash'
import { Input } from 'semantic-ui-react'
import { injectIntl } from 'react-intl'
import { compose, withProps, withHandlers } from 'recompose'

const HomeSearch = ({ placeholder, onChange, input }) => (
  <Input fluid icon='search' placeholder={placeholder} onChange={onChange} value={input} />
)

export default compose(injectIntl,
  withProps(({ intl }) => ({
    placeholder: intl.formatMessage({ id: 'SURVEY.search' })
  })),
  withHandlers({
    onChange: ({ updateInput }) => evt => updateInput(get(evt, 'target.value', ''))
  })
)(HomeSearch)
