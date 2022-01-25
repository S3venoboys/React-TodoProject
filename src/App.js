import React from 'react';
import { AuthProvider } from './context/auth';
import Routing from './routes/Routing';

const App = () => {
  return (
      <AuthProvider>
        <Routing/>
      </AuthProvider>
  );
  
}

export default App;
