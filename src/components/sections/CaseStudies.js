import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image from '../elements/Image';
import ArchitectureModal from '../elements/ArchitectureModal';

// Images
// import imgTravel from './../../assets/images/mytravelApp.png';
// import imgKena from './../../assets/images/kenashop.png';
// import imgMenji from './../../assets/images/gf.png';
// import imgNubia from './../../assets/images/nubia.PNG';
// import imgAdili from './../../assets/images/adili.PNG';
import imgIdempotency from './../../assets/images/video-placeholder.jpg';

const CaseStudies = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  const openArchitecture = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const projects = [
    {
      title: "Idempotent API Engine",
      type: "Distributed Systems",
      description: "A fault-tolerant middleware ensuring exactly-once processing for payment APIs during network failures.",
      technical_details: [
        "Leveraged DynamoDB atomic conditional writes for distributed locking.",
        "Designed state-machine middleware to intercept and cache API responses.",
        "Prevented duplicate transactions during simulated high-concurrency retry storms."
      ],
      stack: ["TypeScript", "Node.js", "DynamoDB", "Docker"],
      link: "/case-studies/idempotent-api",
      repo: "https://github.com/kabasele243/backend-university/tree/main/08-idempotent-api",
      image: imgIdempotency,
      diagram: `
        graph TD
          subgraph Client_Layer
            Client[Client App]
          end
          subgraph API_Gateway
            Middleware[Idempotency Middleware]
            Controller[Payment Controller]
          end
          subgraph Persistence
            Dynamo[(DynamoDB Lock)]
            Postgres[(Postgres DB)]
          end
          
          Client -->|x-idempotency-key| Middleware
          Middleware -->|1. Atomic Lock| Dynamo
          Dynamo -.->|Lock Acquired| Middleware
          Middleware -->|2. Process Request| Controller
          Controller -->|3. Create Order| Postgres
          Controller -.->|4. Return Result| Middleware
          Middleware -->|5. Update State| Dynamo
          Middleware -->|6. Safe Response| Client
          
          style Client_Layer fill:#1E1E1E,stroke:#00ff88,color:#fff
          style API_Gateway fill:#1E1E1E,stroke:#00ff88,color:#fff
          style Persistence fill:#0B0C10,stroke:#C084FC,color:#fff
      `
    },
    // {
    //   title: "MyTravelApp",
    //   type: "Full Stack Architecture",
    //   description: "A comprehensive booking platform handling complex concurrent user requests.",
    //   technical_details: [
    //     "Implemented optimistic locking to prevent race conditions during tour booking.",
    //     "Designed a MongoDB aggregation pipeline for real-time analytics.",
    //     "Built a RESTful API using Node.js and Express."
    //   ],
    //   stack: ["Node.js", "MongoDB", "Pug", "JWT"],
    //   link: "https://mytravelapp.netlify.app/",
    //   repo: "https://github.com/kabasele243/mytravelapp",
    //   image: imgTravel,
    //   // The Diagram Definition
    //   diagram: `
    //     graph LR
    //       subgraph Client
    //         Browser[Browser / Pug Templates]
    //       end
    //       subgraph Load_Balancer
    //         NGINX[NGINX / Reverse Proxy]
    //       end
    //       subgraph API_Layer
    //         Node[Node.js Express API]
    //         Auth[JWT Auth Middleware]
    //       end
    //       subgraph Data_Layer
    //         Mongo[(MongoDB Atlas)]
    //         Redis[(Redis Cache)]
    //       end

    //       Browser -->|HTTPS| NGINX
    //       NGINX --> Node
    //       Node --> Auth
    //       Auth --> Node
    //       Node -->|Read/Write| Mongo
    //       Node -->|Cache Hit/Miss| Redis

    //       style Client fill:#1E1E1E,stroke:#00ff88,color:#fff
    //       style Load_Balancer fill:#1E1E1E,stroke:#C084FC,color:#fff
    //       style API_Layer fill:#1E1E1E,stroke:#00ff88,color:#fff
    //       style Data_Layer fill:#0B0C10,stroke:#fff,color:#fff
    //   `
    // },
    // {
    //   title: "KenaShop",
    //   type: "E-Commerce Systems",
    //   description: "A scalable e-commerce solution focusing on inventory management and payment security.",
    //   technical_details: [
    //     "Integrated Stripe API for secure payment processing.",
    //     "Modeled complex product variants (size, color, material) in Firebase.",
    //     "Utilized Redux for global state management."
    //   ],
    //   stack: ["React", "Firebase", "Stripe", "Redux"],
    //   link: "https://boutique-project.herokuapp.com/",
    //   repo: "https://github.com/kabasele243/project-ecommerce-shop",
    //   image: imgKena,
    //   diagram: `
    //     graph TD
    //       User((User))
    //       subgraph Frontend
    //         React[React SPA]
    //         Redux[Redux Store]
    //       end
    //       subgraph Backend_Services
    //         Firebase[Firebase Auth & DB]
    //         Stripe[Stripe Payment GW]
    //       end

    //       User --> React
    //       React -->|Dispatch| Redux
    //       React -->|Auth/Data| Firebase
    //       React -->|Checkout| Stripe
    //       Stripe -->|Webhook| Firebase

    //       style Frontend fill:#1E1E1E,stroke:#00ff88,color:#fff
    //       style Backend_Services fill:#0B0C10,stroke:#C084FC,color:#fff
    //   `
    // },
    // {
    //   title: "Menji Magazine",
    //   type: "Content Management System",
    //   description: "A backend-heavy blogging platform with granular permission systems.",
    //   technical_details: [
    //     "Engineered a role-based access control (RBAC) system.",
    //     "Optimized database queries for nested comments.",
    //     "Deployed on Heroku with a CI/CD pipeline."
    //   ],
    //   stack: ["Node.js", "Express", "MongoDB", "REST"],
    //   link: "https://www.menji-magazine.com/",
    //   repo: "https://github.com/kabasele243/menji-magazine",
    //   image: imgMenji,
    //   diagram: `
    //     graph TD
    //       subgraph Users
    //         Admin[Admin/Editor]
    //         Reader[Reader]
    //       end
    //       subgraph API_Gateway
    //         Express[Express REST API]
    //         RBAC[RBAC Middleware]
    //       end
    //       subgraph Storage
    //         DB[(MongoDB)]
    //         Assets[S3 Bucket]
    //       end

    //       Admin -->|Create/Edit| Express
    //       Reader -->|Read/Comment| Express
    //       Express --> RBAC
    //       RBAC --> Express
    //       Express -->|JSON Data| DB
    //       Express -->|Uploads| Assets

    //       style Users fill:#1E1E1E,stroke:#C084FC,color:#fff
    //       style API_Gateway fill:#1E1E1E,stroke:#00ff88,color:#fff
    //   `
    // },
    // {
    //   title: "Nubia",
    //   type: "Frontend UI/UX",
    //   description: "A storytelling platform focused on immersive user experience.",
    //   technical_details: [
    //     "Implemented smooth scroll reveals and parallax effects.",
    //     "Optimized asset loading for low-bandwidth connections.",
    //     "Component-driven architecture for reusability."
    //   ],
    //   stack: ["React", "CSS3", "Netlify"],
    //   link: "https://nubia-site.netlify.app",
    //   repo: "https://github.com/kabasele243/nubia",
    //   image: imgNubia,
    //   diagram: `
    //     graph LR
    //       subgraph Client_Side
    //         React[React App]
    //         Motion[Framer Motion]
    //       end
    //       subgraph CDN
    //         Netlify[Netlify Edge]
    //       end

    //       Netlify -->|Serve Static Assets| React
    //       React -->|Animation Controls| Motion

    //       style Client_Side fill:#1E1E1E,stroke:#00ff88,color:#fff
    //   `
    // },
    // {
    //   title: "Adili",
    //   type: "Real Estate Platform",
    //   description: "A high-performance static site for real estate listings.",
    //   technical_details: [
    //     "Focus on SEO optimization and semantic HTML5.",
    //     "Responsive design patterns for mobile-first users."
    //   ],
    //   stack: ["React", "SASS", "Responsive Design"],
    //   link: "https://adili.netlify.app/",
    //   repo: "https://github.com/kabasele243/adili",
    //   image: imgAdili,
    //   diagram: `
    //     graph TD
    //       User -->|Request| CDN
    //       subgraph Host
    //         CDN[Netlify/Vercel]
    //       end
    //       subgraph App
    //         Static[Static Generator]
    //         SASS[SASS Compiler]
    //       end

    //       Static --> CDN
    //       SASS --> CDN

    //       style App fill:#1E1E1E,stroke:#00ff88,color:#fff
    //   `
    // }
  ];

  return (
    <section id="case-studies" className="bg-bg-secondary py-24 text-white relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-teal to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6">

        <div className="mb-20 max-w-3xl mx-auto text-center relative">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tight">Engineering Case Studies</h2>
          <p className="text-bg-tertiary text-lg mb-8">
            Selected works demonstrating scalability, security, and system design.
          </p>

          {/* View Toggle */}
          <div className="inline-flex bg-bg-DEFAULT border border-slate-700 rounded-lg p-1 gap-1 shadow-lg">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-all ${viewMode === 'list' ? 'bg-accent-teal/20 text-accent-teal' : 'text-slate-400 hover:text-white'}`}
              aria-label="List View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-all ${viewMode === 'grid' ? 'bg-accent-teal/20 text-accent-teal' : 'text-slate-400 hover:text-white'}`}
              aria-label="Grid View"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
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
                  <div className="absolute -inset-2 bg-accent/10 rounded-xl blur-xl group-hover:bg-accent/20 transition-all duration-500"></div>
                  <div className="relative bg-bg-DEFAULT rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
                    <div className="bg-[#1E1E1E] h-8 border-b border-slate-700 flex items-center px-4 gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                    </div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      width={800}
                      height={600}
                    />

                    {/* Overlay Button for Diagram */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                      <button
                        onClick={() => openArchitecture(project)}
                        className="bg-accent text-bg-DEFAULT px-6 py-3 rounded font-mono font-bold hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        View Architecture
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className="flex-1 space-y-6">
                  <div>
                    <span className="text-accent font-mono text-xs tracking-wider uppercase border border-accent/30 px-2 py-1 rounded">
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
                    {project.link.startsWith('http') ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1 flex items-center gap-2">
                        View Deployment <span className="text-lg">↗</span>
                      </a>
                    ) : (
                      <Link to={project.link} className="text-white font-bold hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1 flex items-center gap-2">
                        View Documentation <span className="text-lg">→</span>
                      </Link>
                    )}
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                      GitHub Repo
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-bg-DEFAULT border border-slate-700 rounded-xl overflow-hidden group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    width={400}
                    height={300}
                  />
                  <div className="absolute top-4 right-4 bg-bg-DEFAULT/90 backdrop-blur px-2 py-1 rounded text-xs font-mono text-accent border border-slate-700">
                    {project.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                  <div className="mt-auto pt-4 border-t border-slate-800">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded-full">+{project.stack.length - 3}</span>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      {/* Using the same logic for links */}
                      {project.link.startsWith('http') ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent text-sm font-bold hover:underline flex items-center gap-1">
                          Details ↗
                        </a>
                      ) : (
                        <Link to={project.link} className="text-accent text-sm font-bold hover:underline flex items-center gap-1">
                          Read Case Study →
                        </Link>
                      )}

                      <button
                        onClick={() => openArchitecture(project)}
                        className="text-slate-500 hover:text-white transition-colors"
                        title="View Architecture"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Architecture Modal Instance */}
      <ArchitectureModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={currentProject?.title}
        diagram={currentProject?.diagram}
      />

    </section>
  );
}

export default CaseStudies;