import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import SigIn from './pages/SingIn';

import AppProvider from './hooks/index';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
        <Routes />
    </AppProvider>      

    <GlobalStyle />
  </Router> 
  );

export default App;
