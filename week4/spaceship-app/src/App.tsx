import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { NavComponent } from './components/nav/nav.component';
import './include/bootstrap';
import { FirstComponent } from './components/first.component';
import { SecondComponent } from './components/second.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavComponent />
      <Route path="/first" component={FirstComponent} />
      <Route path="/second" component={SecondComponent} />
    </BrowserRouter>
  );
}

export default App;
