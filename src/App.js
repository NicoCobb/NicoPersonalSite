import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Layout from './pages/Layout';

const App = ()=> {
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


          <Routes>
            <Route path="/" element={Layout}/>
            <Route exact path="/" element={Home} />
            <Route path="/projects" element={Projects} />
            <Route path="/about" element={AboutMe} />
          </Routes>

      </div>
    </Router>
  );
}

export default App;

