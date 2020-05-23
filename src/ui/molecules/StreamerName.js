import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Name from '../atoms/Name'
import IconCheck from '../atoms/IconCheck'
import Fonts from '../particles/Fonts'
import Colors from '../particles/Colors'


const StreamerNameWrapper = styled.div`
  display: flex;
  justify-content: center;
`
/**
 * Use `StreamerName` to display name's users
 *
 */
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

StreamerName.propTypes = {
  /**
  * Streamer's name 
  */
  name: PropTypes.string,
  /**
  * Check icon color
  */
  color: PropTypes.string,
   /**
   * Streamer's name color
   */
  nameColor: PropTypes.string
}

StreamerName.defaultProps = {
  name: "Ponce",
  color: Colors.purple,
  nameColor: Colors.white
}

export default StreamerName
