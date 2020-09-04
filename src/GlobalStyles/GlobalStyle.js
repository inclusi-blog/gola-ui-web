import { createGlobalStyle } from 'styled-components';

import BalooThambiEot from 'assets/fonts/baloothambi.eot';
import BalooThambiWoff2 from 'assets/fonts/baloothambi.woff2';
import BalooThambiWoff from 'assets/fonts/baloothambi.woff';
import BalooThambiTtf from 'assets/fonts/baloothambi.ttf';

import MuktaMalarEot from 'assets/fonts/muktamalar.eot';
import MuktaMalarWoff2 from 'assets/fonts/muktamalar.woff2';
import MuktaMalarWoff from 'assets/fonts/muktamalar.woff';
import MuktaMalarTtf from 'assets/fonts/muktamalar.ttf';

import PoppinsEot from 'assets/fonts/poppins.eot';
import PoppinsWoff2 from 'assets/fonts/poppins.woff2';
import PoppinsWoff from 'assets/fonts/poppins.woff';
import PoppinsTtf from 'assets/fonts/poppins.ttf';

import QuandoEot from 'assets/fonts/quando.eot';
import QuandoWoff2 from 'assets/fonts/quando.woff2';
import QuandoWoff from 'assets/fonts/quando.woff';
import QuandoTtf from 'assets/fonts/quando.ttf';

const GlobalStyle = createGlobalStyle`
   
@font-face {
  font-family: 'BalooThambi';
  font-style: normal;
  font-weight: 400;
  src: local('BalooThambi'), local('BalooThambi'),
       url(${BalooThambiEot}) format('eot'), /* IE9 Compat Modes */
       url(${BalooThambiEot}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
       url(${BalooThambiWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${BalooThambiWoff}) format('woff'), /* Modern Browsers */
       url(${BalooThambiTtf}) format('truetype'); /* Safari, Android, iOS */
     /*   url('../fonts/baloo-thambi-2-v1-latin-regular.svg#BalooThambi2'); format('svg'), /* Legacy iOS */ */
      
}
@font-face {
    font-family: 'MuktaMalar';
    font-style: normal;
    font-weight: 400;
    src: local('MuktaMalar'), local('MuktaMalar'),
         url(${MuktaMalarEot})format('eot'), /* IE9 Compat Modes */
         url(${MuktaMalarEot}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
         url(${MuktaMalarWoff2}) format('woff2'), /* Super Modern Browsers */
         url(${MuktaMalarWoff}) format('woff'), /* Modern Browsers */
         url(${MuktaMalarTtf}) format('truetype'), /* Safari, Android, iOS */
       /*   url('../fonts/baloo-thambi-2-v1-latin-regular.svg#BalooThambi2') format('svg'), /* Legacy iOS */ */
         
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins'), local('Poppins'),
         url(${PoppinsEot})format('eot'), /* IE9 Compat Modes */
         url(${PoppinsEot}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
         url(${PoppinsWoff2}) format('woff2'), /* Super Modern Browsers */
         url(${PoppinsWoff}) format('woff'), /* Modern Browsers */
         url(${PoppinsTtf}) format('truetype'); /* Safari, Android, iOS */
       /*   url('../fonts/baloo-thambi-2-v1-latin-regular.svg#BalooThambi2') format('svg'), /* Legacy iOS */ */
         
  }
  @font-face {
    font-family: 'Quando';
    font-style: normal;
    font-weight: 400;
    src: local('Quando'), local('Quando'),
         url(${QuandoEot})format('eot'), /* IE9 Compat Modes */
         url(${QuandoEot}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
         url(${QuandoWoff2}) format('woff2'), /* Super Modern Browsers */
         url(${QuandoWoff}) format('woff'), /* Modern Browsers */
         url(${QuandoTtf}) format('truetype'); /* Safari, Android, iOS */
       /*   url('../fonts/baloo-thambi-2-v1-latin-regular.svg#BalooThambi2') format('svg'), /* Legacy iOS */ */
         
  }
`;

export default GlobalStyle;
