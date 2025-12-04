import React from 'react';

const About = () => {
    return (
        <section className="bg-bg-DEFAULT min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
                        <span className="text-accent-purple">const</span> <span className="text-accent-cyan">aboutMe</span> =
                    </h1>
                    <div className="h-px bg-slate-800 w-full"></div>
                </div>

                {/* Content as Code/Documentation */}
                <div className="bg-[#1E1E1E] rounded-lg p-6 sm:p-10 border border-slate-700 shadow-2xl font-mono text-sm sm:text-base leading-relaxed">

                    <div className="mb-8">
                        <h2 className="text-slate-500 mb-2">{/* Summary */}</h2>
                        <p className="text-slate-300">
                            "I'm an Atlanta-based full stack engineer with experience across <span className="text-accent-teal">Fintech</span>, <span className="text-accent-teal">Healthcare</span>, and <span className="text-accent-teal">Automotive</span> industries.
                            I specialize in designing distributed systems and building scalable event-driven architectures that solve complex business problems."
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-slate-500 mb-2">{/* Core_Competencies */}</h2>
                        <ul className="list-disc pl-5 text-[#CE9178] space-y-1">
                            <li><span className="text-slate-300">Distributed Systems & Microservices Architecture</span></li>
                            <li><span className="text-slate-300">Event-Driven Architecture (SQS, Kafka, RabbitMQ)</span></li>
                            <li><span className="text-slate-300">Cloud Infrastructure & DevOps (AWS, Docker, Kubernetes)</span></li>
                            <li><span className="text-slate-300">Full Stack Development (React, Node.js, Python, Java)</span></li>
                            <li><span className="text-slate-300">API Design & Development (REST, GraphQL, gRPC)</span></li>
                            <li><span className="text-slate-300">Database Design (SQL, NoSQL, Caching Strategies)</span></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-slate-500 mb-2">{/* Interests */}</h2>
                        <p className="text-slate-300">
                            ["System Design", "Scalability Patterns", "Developer Tools", "Open Source", "Soccer", "Tech Community Building"]
                        </p>
                    </div>

                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <a href="mailto:kabasele467@gmail.com" className="inline-block border border-accent-cyan text-accent-cyan px-8 py-3 rounded font-mono hover:bg-accent-cyan/10 transition-colors">
                        Let's Connect
                    </a>
                </div>

            </div>
        </section>
    );
}

export default About;