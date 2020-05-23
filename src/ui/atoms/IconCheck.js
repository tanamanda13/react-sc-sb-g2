import React from 'react'
import styled from 'styled-components'
import Colors from '../particles/Colors'

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
`

const IconCheck = props => {

  const { color } = props

  return (
    <IconWrapper>
      <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.00001 0.333344C3.32001 0.333344 0.333344 3.32001 0.333344 7.00001C0.333344 10.68 3.32001 13.6667 7.00001 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00001C13.6667 3.32001 10.68 0.333344 7.00001 0.333344ZM5.66668 10.3333L2.33334 7.00001L3.27334 6.06001L5.66668 8.44668L10.7267 3.38668L11.6667 4.33334L5.66668 10.3333Z'
          // fill={Colors.purple}
          fill={ color === Colors.green ? Colors.green : Colors.purple }
          
        />
      </svg>
    </IconWrapper>
  )
}

IconCheck.defaultProps = {
  color: Colors.purple
}

export default IconCheck
