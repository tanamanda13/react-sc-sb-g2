// import { injectGlobal } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import RobertTrialBold from '../../fonts/RoobertTRIAL-Bold.otf';

export default createGlobalStyle`
  @font-face {
    font-family: "Roobert TRIAL";
    /* src: url("fonts/Roboto.woff2") format("woff2"), url("fonts/Roboto.woff") format("woff"); */
    /* src: url("../../fonts/RoobertTRIAL-Bold.otf"); */
    src: url(${RobertTrialBold});
    font-weight: bold;
    font-style: normal;
  }
`

