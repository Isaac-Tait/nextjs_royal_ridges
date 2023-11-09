import { ApolloProvider } from '@apollo/client/react';
import { client } from '../lib/apollo';

import HomePage from './(components)/Homepage';

export default function Home() {
  return (
    <ApolloProvider>
      <div>
        <HomePage />
      </div>
    </ApolloProvider>
  );
}
