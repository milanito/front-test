import React from 'react'
import { Statistic, Header, Divider } from 'semantic-ui-react'

export default ({ result, label }) => (
  <div>
    <Header content={label} as='h2' />
    <Statistic>
      <Statistic.Value>{result.toFixed(2)}</Statistic.Value>
    </Statistic>
    <Divider />
  </div>
)
