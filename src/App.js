import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Nico Cobb Personal Site</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Me</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={AboutMe} />
        </main>
      </div>
    </Router>
  );
}

export default App;

