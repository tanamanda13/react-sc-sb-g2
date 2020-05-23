import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

const NameWrapper = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  color: ${props =>
    props.nameColor === Colors.dark ? Colors.dark : Colors.white};
  font-family: "Roobert TRIAL";
  text-align: center;
`

const Name = props => {


  const { children, nameColor } = props;

  return (
    <NameWrapper nameColor={nameColor}>{ children }</NameWrapper>
  )
}

Name.protoTypes = {
  children: PropTypes.string
} 

Name.defaultProps = {
  nameColor: Colors.white
} 


export default Name;
