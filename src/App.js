import './App.css';
import {QueryClientProvider,QueryClient} from 'react-query'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Navbar from './Component/Navbar';
import Api from './api/Api';
import Useeffect from './useeffect/Useeffect';
import Lifecycle from './lifecycle/Lifecycle';
import UseQuery from './api/UseQuery';
import Graphql from './Graphql/Graphql';
import Infinite from './InfiniteScroll/Infinite';
//import React, { useState } from 'react';

const apolloClient = new ApolloClient({
  uri: "https://3f31-103-113-190-50.in.ngrok.io/v1/graphql",
  cache: new InMemoryCache()
});


function App() { 

  //const queryClient = new QueryClient
  //const Client = new ApolloClient

  return (
    //<ApolloProvider client={apolloClient}>
    <div className="App">
        <Navbar />
        <Infinite />
        {/* <Graphql /> */}
        {/* <UseQuery /> */}
        {/* <Api/> */}
        {/* <Useeffect /> */}
        {/* <Lifecycle />        */}
    </div>
   // </ApolloProvider>
  );
}

export default App;