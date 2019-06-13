import React from 'react';
import Pages from '@/pages';
import {BrowserRouter,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
          <Route path="/" exact component={Pages.Home}/>      
          <Route path="/home" exact component={Pages.Home}/>      
          <Route path="/login" exact component={Pages.Login}/>      
      </BrowserRouter>
    </div>
  );
}

export default App;
