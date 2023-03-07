import { ApolloProvider } from '@apollo/client';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import 'normalize.css/normalize.css';
import { useState } from 'react';
import LaunchContext from '../context/LaunchesContext';
import { Launch } from '../graphql/__generated__/schema.graphql';
import { useApollo } from '../lib/apollo';
import '../styles/globals.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);
  const [launches, setLaunches] = useState<Launch[]>([]);

  const updateLaunchContext = (newLaunches: Launch[]) => {
    setLaunches(newLaunches);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <LaunchContext.Provider value={{ launches, updateLaunchContext }}>
        <NextNProgress />
        <Component {...pageProps} />
      </LaunchContext.Provider>
    </ApolloProvider>
  );
};

export default App;
