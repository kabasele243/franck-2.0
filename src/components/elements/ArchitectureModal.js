import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import { motion, AnimatePresence } from 'framer-motion';

// Initialize mermaid settings
mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
        primaryColor: '#1E1E1E',
        primaryTextColor: '#C5C6C7',
        primaryBorderColor: '#00ff88',
        lineColor: '#00ff88',
        secondaryColor: '#0B0C10',
        tertiaryColor: '#1F2833',
        fontFamily: '"Fira Code", monospace'
    },
    securityLevel: 'loose',
});

const ArchitectureModal = ({ isOpen, onClose, title, diagram }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (isOpen && containerRef.current) {
            // Clear previous content
            containerRef.current.innerHTML = diagram;
            containerRef.current.removeAttribute('data-processed');

            // Render diagram
            try {
                mermaid.init(undefined, containerRef.current);
            } catch (err) {
                console.error('Mermaid failed to render', err);
            }
        }
    }, [isOpen, diagram]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-bg-secondary border border-slate-700 w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto">

                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-[#151719]">
                                <div>
                                    <h3 className="text-xl font-bold text-white font-mono">System Architecture</h3>
                                    <p className="text-sm text-accent">{title}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Diagram Content */}
                            <div className="flex-1 overflow-auto p-8 bg-bg-DEFAULT flex items-center justify-center">
                                <div className="mermaid" ref={containerRef}>
                                    {diagram}
                                </div>
                            </div>

                            {/* Footer Legend */}
                            <div className="px-6 py-3 bg-[#151719] border-t border-slate-700 text-xs text-slate-500 font-mono flex gap-4 justify-center">
                                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#1E1E1E] border border-accent-teal block"></span> Service</span>
                                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#0B0C10] border border-white block"></span> Database</span>
                                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-accent block"></span> Data Flow</span>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ArchitectureModal;