import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";
import Colors from "../particles/Colors";

// import injectGlobal from '../particles/injectGlobal';
import Fonts from '../particles/Fonts';

const NameWrapper = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  /* color: white; */
  color: ${Colors.white};
  /* font-family: ${Fonts}, */
  font-family: "Roobert TRIAL";
  text-align: center;
`

const Name = props => {


  const { children } = props;

  return (
    <NameWrapper>{ children }</NameWrapper>
  )
}

Name.protoTypes = {
  children: PropTypes.string
} 

export default Name;
