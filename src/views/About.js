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
                        <h2 className="text-slate-500 mb-2">// Summary</h2>
                        <p className="text-slate-300">
                            "I am an Atlanta-based software engineer with experience across <span className="text-accent-teal">Fintech</span>, <span className="text-accent-teal">Healthcare</span>, and <span className="text-accent-teal">Automotive</span> industries.
                            I specialize in the 'plumbing' of software development—gathering complex business requirements and translating them into clean, scalable, event-driven systems."
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-slate-500 mb-2">// Core_Competencies</h2>
                        <ul className="list-disc pl-5 text-[#CE9178] space-y-1">
                            <li><span className="text-slate-300">Complex System Design</span></li>
                            <li><span className="text-slate-300">Event-Driven Architecture (SQS, Kafka)</span></li>
                            <li><span className="text-slate-300">Cloud Infrastructure (AWS)</span></li>
                            <li><span className="text-slate-300">API Development (REST & GraphQL)</span></li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-slate-500 mb-2">// Current_Status</h2>
                        <p className="text-slate-300">
                            Currently building <span className="text-white font-bold">InterviewSprint</span>, an AI-powered platform to help engineers crush technical interviews.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-slate-500 mb-2">// Interests</h2>
                        <p className="text-slate-300">
                            ["Software Architecture", "Open Source", "Soccer", "Gardening", "Congolese Community Tech"]
                        </p>
                    </div>

                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center">
                    <a href="mailto:your.email@example.com" className="inline-block border border-accent-cyan text-accent-cyan px-8 py-3 rounded font-mono hover:bg-accent-cyan/10 transition-colors">
                        Let's Connect
                    </a>
                </div>

            </div>
        </section>
    );
}

export default About;