import React from 'react'
import styled from 'styled-components'
import StreamerName from './ui/molecules/StreamerName'

import Fonts from './ui/particles/Fonts'

const AppWrapper = styled.div`
  /* width: 375px; */
  width: 100vw;
  height: 744px;
  background-color: black;
  padding: 16px;
`

export default function App () {
  return (
    <AppWrapper>
      <Fonts />
      <StreamerName name='Ponce' />
    </AppWrapper>
  )
}
