import React from 'react';
import ReactDOM from 'react-dom';

import StoneDetails from './stone-details';
import {QueryClient, QueryClientProvider} from 'react-query';


const client = new QueryClient();

export default function IndexPage() {
  
  return <QueryClientProvider client={client}>
    <StoneDetails/>
    </QueryClientProvider>
}
