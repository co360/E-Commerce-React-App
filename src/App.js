import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const Hatspage = () => {
  return <h2>Hats Page</h2>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={Hatspage} /> {/* Testing */}
      </Switch>
    </div>
  );
}

export default App;
