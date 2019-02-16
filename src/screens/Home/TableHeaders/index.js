import React from 'react'
import { map } from 'lodash'
import { Table } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

export default ({ columns }) => map(columns, ({ title }) => (
  <Table.HeaderCell key={title}>
    <FormattedMessage id={title} />
  </Table.HeaderCell>
))
