import React, { useContext } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);

  // console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  // console.log("%chttps://github.com/hhhrrrttt222111/developer-portfolio", `color:${theme.tertiary}; font-size:20px`);

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Routes>
        {/* <Route path="" element={Main} /> */}
          <Route path="/" exact element={<Main/>} />
          <Route path="/blog" exact element={<BlogPage/>} />
          <Route path="/projects" exact element={<ProjectPage/>} />
          <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
