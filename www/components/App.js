import React from 'react';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Form from './Form';
import About from './About';
import NotFound from './NotFound';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/render-prop-form' component={Form} />
        <Route path='/form' component={Form} />
        <Route path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
