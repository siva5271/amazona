import { ModeWrapper } from '../utils/ModeWrapper';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <ModeWrapper>
      <Component {...pageProps} />;
    </ModeWrapper>
  );
}

export default MyApp;
