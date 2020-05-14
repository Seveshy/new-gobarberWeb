import React from 'react';
import GlobalStyle from './styles/global';

import SigIn from './pages/SingIn';
//import Signup from './pages/Signup';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SigIn />
      </AuthProvider>
    <GlobalStyle />
 </> 
  );

export default App;
