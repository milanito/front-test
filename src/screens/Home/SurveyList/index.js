import React from 'react'
import Loadable from 'react-loadable'
import { Table } from 'semantic-ui-react'
import { compose, withProps } from 'recompose'
import { isEmpty, filter, lowerCase } from 'lodash'

import LoadingNull from '../../../common/atoms/LoadingNull'

const COLUMNS = [{
  title: 'SURVEY.name',
  getter: 'name'
}, {
  title: 'SURVEY.code',
  getter: 'code'
}]

const SurveyList = Loadable.Map({
  loader: {
    TableRows: () => import('../TableRows'),
    TableHeaders: () => import('../TableHeaders')
  },
  render (loaded, { filteredData }) {
    const TableRows = loaded.TableRows.default
    const TableHeaders = loaded.TableHeaders.default

    return (
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <TableHeaders columns={COLUMNS} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <TableRows data={filteredData} columns={COLUMNS} />
        </Table.Body>
      </Table>
    )
  },
  loading: LoadingNull
})

export default compose(withProps(({ input, data }) => {
  if (isEmpty(input)) {
    return { filteredData: data }
  }

  return {
    filteredData: filter(data, ({ name, code }) => {
      return lowerCase(name).includes(lowerCase(input)) ||
        lowerCase(code).includes(lowerCase(input))
    })
  }
}))(SurveyList)
