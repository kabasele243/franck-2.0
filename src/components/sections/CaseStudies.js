import React from 'react';
import { motion } from 'framer-motion';
// Importing existing images
import imgTravel from './../../assets/images/mytravelApp.png';
import imgKena from './../../assets/images/kenashop.png';
import imgMenji from './../../assets/images/gf.png';
import imgNubia from './../../assets/images/nubia.PNG';
import imgAdili from './../../assets/images/adili.PNG';

const CaseStudies = () => {

  const projects = [
    {
      title: "MyTravelApp",
      type: "Full Stack Application",
      description: "A comprehensive booking platform handling complex concurrent user requests.",
      technical_details: [
        "Implemented optimistic locking to prevent race conditions during tour booking.",
        "Designed a MongoDB aggregation pipeline for real-time analytics.",
        "Built a RESTful API using Node.js and Express."
      ],
      stack: ["Node.js", "MongoDB", "Pug", "JWT"],
      link: "https://mytravelapp.netlify.app/",
      repo: "https://github.com/kabasele243/mytravelapp",
      image: imgTravel
    },
    {
      title: "KenaShop",
      type: "E-Commerce Architecture",
      description: "A scalable e-commerce solution focusing on inventory management and payment security.",
      technical_details: [
        "Integrated Stripe API for secure payment processing.",
        "Modeled complex product variants (size, color, material) in Firebase.",
        "Utilized Redux for global state management of the cart and user session."
      ],
      stack: ["React", "Firebase", "Stripe", "Redux"],
      link: "https://boutique-project.herokuapp.com/",
      repo: "https://github.com/kabasele243/project-ecommerce-shop",
      image: imgKena
    },
    {
      title: "Menji Magazine",
      type: "Content Management System",
      description: "A backend-heavy blogging platform with granular permission systems.",
      technical_details: [
        "Engineered a role-based access control (RBAC) system for Authors vs Editors.",
        "Optimized database queries for retrieving nested comments efficiently.",
        "Deployed on Heroku with a CI/CD pipeline."
      ],
      stack: ["Node.js", "Express", "MongoDB", "REST"],
      link: "https://www.menji-magazine.com/",
      repo: "https://github.com/kabasele243/menji-magazine",
      image: imgMenji
    },
    {
      title: "Nubia",
      type: "Frontend UI/UX",
      description: "A storytelling platform focused on immersive user experience.",
      technical_details: [
        "Implemented smooth scroll reveals and parallax effects.",
        "Optimized asset loading for low-bandwidth connections.",
        "Component-driven architecture for reusability."
      ],
      stack: ["React", "CSS3", "Netlify"],
      link: "https://nubia-site.netlify.app",
      repo: "https://github.com/kabasele243/nubia",
      image: imgNubia
    },
    {
      title: "Adili",
      type: "Real Estate Platform",
      description: "A high-performance static site for real estate listings.",
      technical_details: [
        "Focus on SEO optimization and semantic HTML5.",
        "Responsive design patterns for mobile-first users."
      ],
      stack: ["React", "SASS", "Responsive Design"],
      link: "https://adili.netlify.app/",
      repo: "https://github.com/kabasele243/adili",
      image: imgAdili
    }
  ];

  return (
    <section id="case-studies" className="bg-bg-secondary py-24 text-white relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-teal to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6">

        <div className="mb-20 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">Engineering Case Studies</h2>
          <p className="text-bg-tertiary text-lg">
            Selected works demonstrating scalability, security, and system design.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Project Visual */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 w-full relative group"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-accent-cyan/10 rounded-xl blur-xl group-hover:bg-accent-cyan/20 transition-all duration-500"></div>

                <div className="relative bg-bg-DEFAULT rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                  {/* Browser Bar for "Dev" feel */}
                  <div className="bg-[#1E1E1E] h-8 border-b border-slate-700 flex items-center px-4 gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105 transform"
                    style={{ transition: 'transform 0.5s ease, opacity 0.3s ease' }}
                  />
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-accent-cyan font-mono text-xs tracking-wider uppercase border border-accent-cyan/30 px-2 py-1 rounded">
                    {project.type}
                  </span>
                  <h3 className="text-4xl font-bold mt-4 mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-lg">{project.description}</p>
                </div>

                <div className="bg-bg-DEFAULT/50 p-6 rounded-lg border-l-2 border-accent-teal backdrop-blur-sm">
                  <h4 className="text-white font-bold mb-3 font-mono text-sm">Technical Highlights:</h4>
                  <ul className="space-y-2">
                    {project.technical_details.map((detail, i) => (
                      <li key={i} className="text-slate-400 text-sm flex items-start">
                        <span className="text-accent-teal mr-2">▹</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs font-mono text-bg-tertiary bg-white/5 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-accent-cyan transition-colors border-b-2 border-transparent hover:border-accent-cyan pb-1 flex items-center gap-2">
                    View Deployment <span className="text-lg">↗</span>
                  </a>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    GitHub Repo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CaseStudies;