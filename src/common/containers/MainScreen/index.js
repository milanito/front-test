import React from 'react'

import TopBar from '../../molecules/TopBar'
import MainContainer from '../../atoms/MainContainer'

export default Component => props => (
  <div>
    <TopBar />
    <MainContainer>
      <Component {...props} />
    </MainContainer>
  </div>
)
