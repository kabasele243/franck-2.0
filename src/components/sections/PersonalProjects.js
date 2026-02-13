import React from 'react';
import { motion } from 'framer-motion';

const PersonalProjects = () => {
  const projects = [
    {
      title: "Our Dev Journey",
      subtitle: "System Design Notebook",
      emoji: "📓",
      description: "A visual guide to technical concepts where I document learnings and break down system design patterns.",
      tech: ["React", "Next.js", "TailwindCSS"],
      link: "https://our-dev-journey.vercel.app",
      preview: "https://our-dev-journey.vercel.app/og-image.png" // fallback preview
    }
  ];

  return (
    <section className="bg-bg-DEFAULT py-16 relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(102,252,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(102,252,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent font-mono text-xs tracking-wider uppercase border border-accent/30 px-3 py-1 rounded-full inline-block mb-3">
              ~/side-projects
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Personal Projects
            </h2>
            <p className="text-slate-400 text-sm">
              Side projects where I experiment and learn
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-bg-secondary border border-slate-800/50 rounded-xl overflow-hidden hover:border-accent/50 transition-all duration-300"
            >
              {/* Preview Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                <img
                  src={project.preview}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"></div>

                {/* Emoji overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.emoji}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-accent-teal font-mono text-xs">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded border border-slate-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center text-accent text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Project</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
