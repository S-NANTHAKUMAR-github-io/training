import './App.css';
import {QueryClientProvider,QueryClient} from 'react-query'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Navbar from './Component/Navbar';
import Api from './api/Api';
import Useeffect from './useeffect/Useeffect';
import Lifecycle from './lifecycle/Lifecycle';
import UseQuery from './api/UseQuery';
import Graphql from './Graphql/Graphql';
//import React, { useState } from 'react';

const apolloClient = new ApolloClient({
  uri: "https://example.com/graphql",
  cache: new InMemoryCache()
});


function App() { 

  //const queryClient = new QueryClient
  //const apolloClient = new ApolloClient

  return (
    <ApolloProvider client={apolloClient}>
    <div className="App">
        <Navbar />
        <Graphql />
        {/* <UseQuery /> */}
        {/* <Api/> */}
        {/* <Useeffect /> */}
        {/* <Lifecycle />        */}
    </div>
    </ApolloProvider>
  );
}

export default App;
