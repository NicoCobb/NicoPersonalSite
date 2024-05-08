import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

const App = ()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="about" element={<AboutMe/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

