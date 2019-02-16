import React from 'react'
import { map } from 'lodash'
import { FormattedDate } from 'react-intl'
import { Header, Divider, List } from 'semantic-ui-react'

const ResultsList = ({ result }) => map(result, res => (
  <List.Item key={res}>
    <FormattedDate
      value={new Date(res)}
      year='numeric'
      month='long'
      day='2-digit'
    />
  </List.Item>
))

export default ({ result, label }) => (
  <div>
    <Header content={label} as='h2' />
    <List divided relaxed>
      <ResultsList result={result} />
    </List>
    <Divider />
  </div>
)
