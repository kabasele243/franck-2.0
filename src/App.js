import React, { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Project from './views/Project';
import About from './views/About';
import CaseStudyIdempotency from './views/CaseStudyIdempotency';

// Initialize Google Analytics
const GA_CODE = process.env.REACT_APP_GA_CODE;
if (GA_CODE) {
  ReactGA.initialize(GA_CODE);
}

const trackPage = page => {
  if (GA_CODE) {
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
};

const App = () => {
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    trackPage(page);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={
        <LayoutDefault>
          <Home />
        </LayoutDefault>
      } />
      <Route path="/project" element={
        <LayoutDefault>
          <Project />
        </LayoutDefault>
      } />
      <Route path="/about" element={
        <LayoutDefault>
          <About />
        </LayoutDefault>
      } />
      <Route path="/case-studies/idempotent-api" element={
        <LayoutDefault>
          <CaseStudyIdempotency />
        </LayoutDefault>
      } />
    </Routes>
  );
}

export default App;