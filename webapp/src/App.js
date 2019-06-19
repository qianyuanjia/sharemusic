import React from 'react';
import Pages from '@/pages';
import {BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
            <Route path="/" exact component={Pages.Home}/>      
            <Route path="/home"   component={Pages.Home}/>      
            <Route path="/register"  component={Pages.Register}/>      
            <Route path="/login"  component={Pages.Login}/>      
      </BrowserRouter>
  );
}

export default App;
