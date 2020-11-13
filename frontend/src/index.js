import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePoll from './pages/CreatePoll';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="w-full h-screen">
        <div className="h-16 w-full bg-gray-800 flex items-center">
          <div className="container mx-auto px-5">
          <Link to='/' className="text-white cursor-pointer hover:text-gray-400 transition duration-150 mr-3">Home</Link>
          <Link to='/polls/create' className="text-white cursor-pointer hover:text-gray-400 transition duration-150 mr-3">Create Poll</Link>
          </div>
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/polls/create" component={CreatePoll} />
        </Switch>

      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();