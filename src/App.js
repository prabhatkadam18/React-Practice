import React from 'react';
import './App.css';
import Nav from './nav.js';
import Home from './home.js';
import About from './about.js';
import ToDo from './todo.js';
import {Route} from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/todo' component={ToDo} />
      </div>
    );
  }
}


export default App;

