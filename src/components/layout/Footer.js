import React from 'react';

const Footer = ({ className, ...props }) => {
  return (
    <footer className={`bg-bg-DEFAULT border-t border-slate-800 py-8 md:py-12 ${className}`} {...props}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="md:flex md:items-center md:justify-between text-center md:text-left">

          <div className="text-sm text-slate-500 font-mono mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Franck Kabasele. Built with React & Tailwind.
          </div>

          <div className="flex justify-center md:justify-end gap-6">
            <a href="https://github.com/kabasele243" className="text-slate-400 hover:text-accent-cyan transition-colors text-sm font-mono">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-slate-400 hover:text-accent-cyan transition-colors text-sm font-mono">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-accent-cyan transition-colors text-sm font-mono">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;