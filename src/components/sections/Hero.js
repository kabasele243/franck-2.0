import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for the terminal lines
  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.5 }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-DEFAULT pt-20 pb-20 px-4 sm:px-6 lg:px-8">

      {/* Background decoration: Subtle grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#45A29E 1px, transparent 1px), linear-gradient(90deg, #45A29E 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Column: The Pitch */}
        <div className="text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded border border-accent-teal/30 bg-accent-teal/10 text-accent-cyan font-mono text-xs tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
            OPEN TO WORK
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none">
            Architecting <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">
              Event-Driven
            </span> Systems.
          </h1>

          <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed">
            I am <span className="text-white font-semibold">Franck Kabasele</span>.
            I specialize in the "plumbing" of the web—building scalable backend architectures
            for Fintech, Healthcare, and Automotive industries.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#case-studies" className="bg-accent-cyan text-bg-DEFAULT px-8 py-4 rounded font-mono font-bold hover:bg-white hover:scale-105 transition-all duration-300">
              ./view_projects.sh
            </a>
            <a href="/about" className="border border-slate-600 text-slate-300 px-8 py-4 rounded font-mono hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300">
              cat about_me.txt
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
          <div className="bg-[#1E1E1E] rounded-lg shadow-2xl border border-slate-700 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
            {/* Title Bar */}
            <div className="bg-[#252526] px-4 py-3 flex items-center gap-2 border-b border-black/40">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <div className="flex-1 text-center text-slate-500 text-xs font-mono">franck — -zsh — 80x24</div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm sm:text-base leading-loose text-slate-300">
              <div className="mb-4">
                <span className="text-accent-cyan">➜</span> <span className="text-blue-400">~</span> <span className="text-yellow-300">neofetch</span> --user franck
              </div>

              <div className="grid grid-cols-[100px_1fr] gap-4">
                <div className="text-accent-purple hidden sm:block">
                  <pre className="text-[8px] leading-[8px]">
                    {`
   _    _ 
  | |  | |
  | |__| |
  |  __  |
  | |  | |
  |_|  |_|
`}
                  </pre>
                </div>
                <div className="space-y-1">
                  <motion.div custom={1} variants={lineVariants} initial="hidden" animate="visible">
                    <span className="text-accent-cyan font-bold">Role:</span> Senior Software Engineer
                  </motion.div>
                  <motion.div custom={2} variants={lineVariants} initial="hidden" animate="visible">
                    <span className="text-accent-cyan font-bold">Location:</span> Atlanta, GA
                  </motion.div>
                  <motion.div custom={3} variants={lineVariants} initial="hidden" animate="visible">
                    <span className="text-accent-cyan font-bold">Backend:</span> Node.js, Python, Go
                  </motion.div>
                  <motion.div custom={4} variants={lineVariants} initial="hidden" animate="visible">
                    <span className="text-accent-cyan font-bold">Cloud:</span> AWS (SQS, Lambda, DynamoDB)
                  </motion.div>
                  <motion.div custom={5} variants={lineVariants} initial="hidden" animate="visible">
                    <span className="text-accent-cyan font-bold">Frontend:</span> React, Next.js, Tailwind
                  </motion.div>
                  <motion.div custom={6} variants={lineVariants} initial="hidden" animate="visible">
                    <span className="text-accent-cyan font-bold">Current:</span> Building InterviewSprint
                  </motion.div>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <span className="text-accent-cyan mr-2">➜</span>
                <span className="text-blue-400 mr-2">~</span>
                <span className="animate-pulse bg-slate-400 w-2.5 h-5 block"></span>
              </div>
            </div>
          </div>

          {/* Decorative shadow/glow */}
          <div className="absolute -inset-2 bg-accent-cyan/20 blur-2xl -z-10 opacity-50 rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;