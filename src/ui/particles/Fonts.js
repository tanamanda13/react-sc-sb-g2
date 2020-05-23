import { createGlobalStyle } from 'styled-components';

import RobertTrialBold from '../../fonts/RoobertTRIAL-Bold.otf';

export default createGlobalStyle`
  @font-face {
    font-family: "Roobert TRIAL";
    src: url(${RobertTrialBold});
    font-weight: bold;
    font-style: normal;
  }
`

