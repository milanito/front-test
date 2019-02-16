import axios from 'axios'
import { compose, withState, withHandlers, lifecycle } from 'recompose'

import WithData from '../../atoms/WithData'

export default compose(withState('data', 'modifyData', {}),
  withHandlers({
    updateData: ({ modifyData }) => data => modifyData(data)
  }),
  lifecycle({
    async componentDidMount () {
      const { updateData } = this.props
      const { data } = await axios.get('http://localhost:3000/api/list.json')

      return updateData(data)
    }
  }), WithData)
