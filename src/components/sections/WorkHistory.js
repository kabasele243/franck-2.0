import React from 'react';

const WorkHistory = () => {
    const jobs = [
        {
            company: "Kard Financial",
            role: "Software Engineer I",
            date: "Oct 2022 - Present",
            desc: "Kard is a rewards-as-a-service platform that provides loyalty programs to neo-banks."
        },
        {
            company: "Cox Automotive",
            role: "Software Engineer I",
            date: "Nov 2021 - June 2022",
            desc: "Cox Automotive delivers digital marketing and software solutions to automotive dealerships."
        },
        {
            company: "Florence Healthcare",
            role: "Software Engineer",
            date: "Mar 2021 - Sept 2021",
            desc: "Florence Healthcare provides clinical trial management software for research sites."
        }
    ];

    return (
        <section className="bg-bg-DEFAULT py-20 border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-bold text-white mb-12 font-mono text-center">Experience_Log</h2>
                <div className="space-y-12">
                    {jobs.map((job, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-10 border-l-2 border-slate-700 pl-8 relative">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-teal shadow-[0_0_10px_#00ff88]"></div>
                            <div className="md:w-1/3">
                                <h3 className="text-xl text-white font-bold">{job.company}</h3>
                                <div className="text-accent font-mono text-sm mt-1">{job.date}</div>
                            </div>
                            <div className="md:w-2/3">
                                <div className="text-lg text-white font-semibold mb-2">{job.role}</div>
                                <p className="text-slate-400 leading-relaxed">{job.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkHistory;