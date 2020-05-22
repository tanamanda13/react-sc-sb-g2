import React from "react";
import styled from 'styled-components';
// import Badge, { colors } from "./ui/atoms/Badge";
import Name from './ui/atoms/Name';

import Fonts from './ui/particles/Fonts';

const AppWrapper = styled.div`
  /* width: 375px; */
  width: 100vw;
  height: 744px;
  background-color: black;
  padding: 16px;
`;

export default function App() {
      return (
            // <div className="App">
            //     <Badge text="IRL" color={colors.purple}/>
            //     <Badge text="IRL" color={colors.grey}/>
            // </div>

            <AppWrapper>
                  <Fonts />
                        <Name>Ponce</Name>
               
            </AppWrapper>
      );
}
