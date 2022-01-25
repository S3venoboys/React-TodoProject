import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from '../views/Auth';
import Task from '../views/Task';
import PrivateRoute from './PrivateRoute';



const Routing = () => {
  return(
    
    <Router>
      <Routes>
          <Route path="/" element={<Auth/>} />
          <Route element={<PrivateRoute/>}>
            <Route path="/task" element={<Task/>} />
          </Route>  
      </Routes>
     </Router>
  );
}

export default Routing;
