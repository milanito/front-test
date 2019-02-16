import React from 'react'
import { RadialChart } from 'react-vis'
import { map, join } from 'lodash'
import { compose, withProps } from 'recompose'
import { Header, Divider, Grid, List } from 'semantic-ui-react'

const ResultsList = ({ result }) => map(result, (value, product) => (
  <List.Item key={join([product, value], '-')}>
    {product} : {value}
  </List.Item>
))

const ResultQCM = ({ data, label, result }) => (
  <div>
    <Header content={label} as='h2' />
    <Grid columns={2}>
      <Grid.Column>
        <RadialChart showLabels
          data={data}
          width={300}
          height={300} />
      </Grid.Column>
      <Grid.Column>
        <List>
          <ResultsList result={result} />
        </List>
      </Grid.Column>
    </Grid>
    <Divider />
  </div>
)

export default compose(withProps(({ result }) => ({
  data: map(result, (angle, label) => ({
    angle, label
  }))
})))(ResultQCM)
