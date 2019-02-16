import Loadable from 'react-loadable'
import { compose, withProps } from 'recompose'

import Loading from '../../common/molecules/Loading'
import GetSurvey from '../../common/api/GetSurvey'

const Survey = Loadable({
  loader: () => import('./SurveyData'),
  loading: Loading
})

export default compose(withProps(({ match }) => ({
  name: match.params.surveyName,
  code: match.params.surveyCode
})),
GetSurvey
)(Survey)
