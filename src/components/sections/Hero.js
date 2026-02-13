import React from 'react';
import { motion } from 'framer-motion';
import InteractiveTerminal from '../elements/InteractiveTerminal';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-DEFAULT pt-20 pb-20 px-4 sm:px-6 lg:px-8">

      {/* Background decoration: Subtle grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(90deg, #00ff88 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Column: The Pitch */}
        <div className="text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-accent/30 bg-accent/10 text-accent font-mono text-xs tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            OPEN TO WORK
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none font-sans">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-teal">
              Event-Driven
            </span> Systems.
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed">
            I'm <span className="text-white font-semibold">Franck Kabasele</span>, a full stack engineer focused on designing distributed systems and event-driven architectures for Fintech, Healthcare, and Automotive domains.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/about" className="border border-slate-600 text-slate-300 px-8 py-4 rounded font-mono hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300">
              cat about_me.txt
            </a>
            {/* New Resume Button */}
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-accent text-black px-8 py-4 rounded font-mono font-bold hover:bg-accent-teal transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Resume.pdf
            </a>
          </div>
        </div>

        {/* Right Column: The Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-lg mx-auto lg:mr-0"
        >
          {/* Terminal Window */}
          <div className="h-[400px] bg-[#0c0c0c] border border-slate-800 rounded-lg overflow-hidden shadow-2xl relative z-10">
            <div className="flex items-center px-4 py-2 border-b border-slate-800 bg-[#111]">
              <div className="flex gap-1.5 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              </div>
              <span className="text-xs font-mono text-slate-500">zsh — 80x24</span>
            </div>
            <InteractiveTerminal />
          </div>

          {/* Decorative shadow/glow */}
          <div className="absolute -inset-4 bg-accent/20 blur-3xl -z-10 opacity-40 rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;