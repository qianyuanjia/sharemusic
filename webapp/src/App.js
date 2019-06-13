import React from 'react';
import Pages from '@/pages';
import {BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
          <Route path="/" exact component={Pages.Home}/>      
          <Route path="/home" exact component={Pages.Home}/>      
          <Route path="/register" exact component={Pages.Register}/>      
      </BrowserRouter>
  );
}

export default App;
