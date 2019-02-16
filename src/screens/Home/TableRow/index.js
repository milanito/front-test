import React from 'react'
import styled from 'styled-components'
import Loadable from 'react-loadable'
import { Table } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { compose, withHandlers } from 'recompose'

import LoadingNull from '../../../common/atoms/LoadingNull'

const CursorRow = styled(Table.Row)`
  cursor: pointer;
`

const TableCells = Loadable({
  loader: () => import('../TableCells'),
  loading: LoadingNull
})

const TableRow = ({ item, columns, onClick }) => (
  <CursorRow onClick={onClick}>
    <TableCells item={item} columns={columns} key={item.code} />
  </CursorRow>
)

export default compose(withRouter, withHandlers({
  onClick: ({ history, item }) => () => history.push(`/survey/${item.code}/${item.name}`)
}))(TableRow)
