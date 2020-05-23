import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Colors from '../particles/Colors'
import Name from '../atoms/Name'
import IconCheck from '../atoms/IconCheck'
import Fonts from '../particles/Fonts'

const StreamerNameWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StreamerName = props => {
  const { name, color } = props

  return (
    <StreamerNameWrapper>
      <Fonts />
      <Name>{name}</Name>
      <IconCheck color={color} />
    </StreamerNameWrapper>
  )
}

StreamerName.protoTypes = {
  name: PropTypes.string
}

export default StreamerName
