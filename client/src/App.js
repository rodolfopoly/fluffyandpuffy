import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext} from '@apollo/client/link/context';

import Detail from './pages/Detail';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import FooterMenu from './components/Footer';
const httpLink = createHttpLink({
  uri:'/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});



const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="bg-indigo-100">
          <StoreProvider>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
            <FooterMenu/>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;