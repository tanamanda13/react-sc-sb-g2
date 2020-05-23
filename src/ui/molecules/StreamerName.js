import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Name from '../atoms/Name'
import IconCheck from '../atoms/IconCheck'
import Fonts from '../particles/Fonts'

const StreamerNameWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StreamerName = props => {
  const { name, color, nameColor } = props

  return (
    <StreamerNameWrapper>
      <Fonts />
      <Name nameColor={nameColor} >{name}</Name>
      <IconCheck color={color} />
    </StreamerNameWrapper>
  )
}

export default StreamerName
