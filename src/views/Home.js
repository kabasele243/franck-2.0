import React from 'react';
import '../index.css';
// Import the new sections
import Hero from '../components/sections/Hero';
import CaseStudies from '../components/sections/CaseStudies';
import FeaturesTiles from '../components/sections/FeaturesTiles'; // Keeping for "Skills"
import WorkHistory from '../components/sections/WorkHistory';
import PersonalProjects from '../components/sections/PersonalProjects';

const Home = () => {
  return (
    <div className="bg-bg-DEFAULT min-h-screen overflow-x-hidden">
      {/* 1. The New Terminal-Style Hero */}
      <Hero />

      {/* 2. Skills Section (Styled to match new dark theme) */}
      <div className="bg-bg-DEFAULT py-20 border-y border-slate-800/50">
        <div className="container mx-auto text-center mb-12">
          <h3 className="text-white text-2xl lg:text-3xl font-bold tracking-tight">Technical Arsenal</h3>
          <p className="text-slate-400 mt-2">Languages and tools I use to solve problems</p>
        </div>
        {/* We reuse FeaturesTiles but wrap it to force dark mode styles inheritance if needed */}
        <div className="opacity-90 scale-95">
          <FeaturesTiles />
        </div>
      </div>



      {/* 4. The Engineering Case Studies */}
      <CaseStudies />
      <WorkHistory />
      {/* 3. Personal Projects Section */}
      <PersonalProjects />
      {/* 4. Simple Contact/Footer Callout */}
      <div className="bg-bg-DEFAULT py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to build something great?</h2>
        <a href="mailto:kabasele467@gmail.com" className="inline-block bg-transparent border-2 border-accent text-accent px-8 py-3 rounded font-mono font-bold hover:bg-accent hover:text-bg-DEFAULT transition-all duration-300">
          Initialize Connection
        </a>
      </div>
    </div>
  );
}

export default Home;