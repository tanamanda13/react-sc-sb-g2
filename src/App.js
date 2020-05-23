import React from 'react'
import styled from 'styled-components'
import StreamerName from './ui/molecules/StreamerName'


const AppWrapper = styled.div`
  width: 100vw;
  height: 744px;
  background-color: black;
  padding: 16px;
`

export default function App () {
  return (
    <AppWrapper>
      <StreamerName name='Ponce' />
    </AppWrapper>
  )
}
