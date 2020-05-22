import React from 'react';
import GlobalStyle from './styles/global';

import SigIn from './pages/SingIn';
import ToastContainer from './components/ToastContainer';

//import Signup from './pages/Signup';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SigIn />
      </AuthProvider>

      <ToastContainer />
      
    <GlobalStyle />
 </> 
  );

export default App;
