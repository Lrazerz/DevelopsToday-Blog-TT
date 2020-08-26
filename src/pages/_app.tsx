import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '../redux/store';
import '../../node_modules/normalize.css/normalize.css';
import '../styles/global.css';

import { config } from '@fortawesome/fontawesome-svg-core';
// Import the CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
}

export default wrapper.withRedux(MyApp);