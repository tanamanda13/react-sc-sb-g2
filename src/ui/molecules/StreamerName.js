import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Colors from '../particles/Colors'
import Name from '../atoms/Name'
import IconCheck from '../atoms/IconCheck'

const StreamerNameWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StreamerName = props => {
  const { name } = props

  return (
    <StreamerNameWrapper>
      <Name>{name}</Name>
      <IconCheck />
    </StreamerNameWrapper>
  )
}

StreamerName.protoTypes = {
  children: PropTypes.string
}

export default StreamerName
