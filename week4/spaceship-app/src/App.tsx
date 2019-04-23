import React from 'react';
import './include/bootstrap';
import './App.css';
import { FirstComponent } from './components/first.component';
import { SecondComponent } from './components/second.component';
import { ThirdComponent } from './components/third.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        <FirstComponent />
        My Application
      <FirstComponent />
        <FirstComponent />
        hello
      <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
