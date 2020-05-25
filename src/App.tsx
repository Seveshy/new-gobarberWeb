import React from 'react';
import GlobalStyle from './styles/global';

import SigIn from './pages/SingIn';

//import Signup from './pages/Signup';

import AppProvider from './hooks/index';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SigIn />
    </AppProvider>      
    <GlobalStyle />
 </> 
  );

export default App;
