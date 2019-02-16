import React from 'react'
import Loadable from 'react-loadable'
import { map } from 'lodash'

import LoadingNull from '../../../common/atoms/LoadingNull'

const TableRow = Loadable({
  loader: () => import('../TableRow'),
  loading: LoadingNull
})

export default ({ data, columns }) => map(data, item => (
  <TableRow item={item} columns={columns} key={item.code} />
))
