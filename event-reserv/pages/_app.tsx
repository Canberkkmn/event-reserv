import { AppProps } from 'next/app';
import { TimerProvider } from '../context/TimerContext';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TimerProvider>
      <Component {...pageProps} />
    </TimerProvider>
  );
}

export default MyApp;
