import { AppProps } from 'next/app';

import '@/src/styles/globals.css';

/**
 * Custom App component to initialize pages.
 *
 * @component
 * @param {AppProps} props - The properties for the component.
 * @param {Component} props.Component - The page component being rendered.
 * @param {Object} props.pageProps - The initial props for the page.
 * @returns {JSX.Element} The initialized app component.
 */
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
