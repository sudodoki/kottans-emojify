import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './containers/Login';
import OAuth from './containers/OAuth';

const Home = () => <h1>Hello in Kottans Emojify</h1>;
const About = () => <h1>This app was create with ❤️</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/oauth" component={OAuth} />
        </div>
      </Router>
    );
  }
}

export default App;
