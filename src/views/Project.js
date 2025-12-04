import React from 'react';
import CaseStudies from '../components/sections/CaseStudies';

const Project = () => {
    return (
        <div className="pt-20">
            {/* We reuse the CaseStudies component as it is the comprehensive project view */}
            <div className="bg-bg-DEFAULT pb-12">
                <div className="container mx-auto px-6 pt-12 text-center">
                    <h1 className="text-4xl text-white font-bold font-mono">/projects</h1>
                    <p className="text-slate-500 mt-2">A directory of my engineering work</p>
                </div>
            </div>
            <CaseStudies />
        </div>
    );
}

export default Project;