import React from 'react'
import { Table } from 'semantic-ui-react'
import { map, get, join } from 'lodash'

export default ({ columns, item }) => map(columns, ({ getter }) => (
  <Table.Cell key={join([item.code, getter], '-')}>{get(item, getter, '')}</Table.Cell>
))
